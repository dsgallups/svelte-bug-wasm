# To reproduce, run

`npm run debug`

Note that +layout.svelte NEVER calls wasm's `init` function. It is only imported.

This code runs in vite dev mode:

`npm run dev`
