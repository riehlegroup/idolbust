/// <reference types="astro/client" />

declare module "@/components/sections/*.astro" {
  const Component: import("astro/runtime/server/index.js").AstroComponentFactory;
  export default Component;
}

declare module "@/components/ui/*.astro" {
  const Component: import("astro/runtime/server/index.js").AstroComponentFactory;
  export default Component;
}

declare module "@/components/features/*.astro" {
  const Component: import("astro/runtime/server/index.js").AstroComponentFactory;
  export default Component;
}
