# Commands

A personal website working in a CLI fashion. Want a demo? 
<https://velitasali.github.io/commands>.

## Build

### Dependencies

* Node
* Rustup
* Firefox (for running tests only)

### Steps

Install NPM dependencies:

```
npm install
```

Build WASM binaries:

```
npx wasm-pack build
```

Serve the project on port `9000`. Note that changes made on JS source files
will automatically update the page. For `webpack` to pick up WASM changes,
rebuild WASM binaries like you did above:

```
npx webpack serve
```

#### Additionally

To run Rust tests on Firefox browser:

```
npx wasm-pack test --firefox --headless
```

