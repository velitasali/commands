mod utils;

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert(format!("Hello, {name}!", name = "Commands").as_str());
}

#[wasm_bindgen]
pub fn get_number() -> i32 {
    42
}

#[wasm_bindgen]
pub fn run() {
    utils::set_panic_hook();
    web_sys::console::log_1(&JsValue::from("Hello from Rust WASM!"));

    let window: web_sys::Window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");
    let p: web_sys::Node = document.create_element("p").unwrap().into();
    p.set_text_content(Some("Hello from Rust, WebAssembly, and Webpack!"));
    body.append_child(&p).unwrap();
}
