# To reproduce, run

`npm run debug`

Note that +layout.svelte NEVER calls wasm's `init` function. It is only imported.

This code runs in vite dev mode:

`npm run dev`

## Prerequisites
You may have to install [rust](https://www.rust-lang.org/)
and run the following command:
`rustup target add wasm32-unknown-unknown`

Let me know if you have any issues reproducing. Thanks!
