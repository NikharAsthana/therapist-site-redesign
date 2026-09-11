/**
 * Tracked-in-git image module declarations.
 *
 * `next-env.d.ts` (which references `next/image-types/global`) is generated
 * and gitignored, so a bare clone has no `*.jpg`/`*.png` declarations until
 * `next dev`/`next build` runs. These ambient declarations keep `tsc --noEmit`
 * green in CI, where typecheck runs before build.
 */
declare module "*.jpg" {
  import type { StaticImageData } from "next/image";

  const value: StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  import type { StaticImageData } from "next/image";

  const value: StaticImageData;
  export default value;
}

declare module "*.png" {
  import type { StaticImageData } from "next/image";

  const value: StaticImageData;
  export default value;
}
