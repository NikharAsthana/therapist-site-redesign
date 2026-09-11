import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactSection from "./ContactSection";

afterEach(() => {
  vi.unstubAllGlobals();
});

function mockFetch(ok: boolean) {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok } as Response)
  );
}

describe("ContactSection", () => {
  it("renders every field with an associated label", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/)).toBeInTheDocument();
    expect(screen.getByLabelText("What brings you here?")).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(await screen.findByText(/Please enter your name/)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your email/)).toBeInTheDocument();
    expect(screen.getByText(/at least 10 characters/)).toBeInTheDocument();
  });

  it("submits valid input and shows the success panel", async () => {
    mockFetch(true);
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText("Full name"), "Jane Rivera");
    await user.type(screen.getByLabelText("Email"), "jane@example.com");
    await user.type(
      screen.getByLabelText("What brings you here?"),
      "I have been feeling overwhelmed lately."
    );
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      await screen.findByRole("heading", { name: /Message received/ })
    ).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("shows the submit error when the API responds with failure", async () => {
    mockFetch(false);
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText("Full name"), "Jane Rivera");
    await user.type(screen.getByLabelText("Email"), "jane@example.com");
    await user.type(
      screen.getByLabelText("What brings you here?"),
      "I have been feeling overwhelmed lately."
    );
    await user.click(screen.getByRole("button", { name: "Send message" }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });
});
