import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the brand and primary links", () => {
    render(<Navbar />);
    expect(screen.getByText("Dr. Maya Reynolds")).toBeInTheDocument();
    const nav = screen.getByRole("navigation", { name: "Primary" });
    for (const label of ["About", "Specialties", "Approach", "Contact"]) {
      expect(nav.textContent).toContain(label);
    }
  });

  it("opens the mobile menu when the trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // The menu island loads after hydration — wait for the trigger first.
    const trigger = await screen.findByRole("button", {
      name: "Open navigation menu",
    });
    await user.click(trigger);

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });
});
