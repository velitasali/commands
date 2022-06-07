mod dom;
mod event;
mod history;
mod program;
mod render;
mod scene;
mod util;

extern crate wasm_bindgen;

use event::handler::oncanvaswheel;
use lazy_static::lazy_static;
use wasm_bindgen::{prelude::*, JsCast};
use web_sys::{KeyboardEvent, WheelEvent};

use crate::dom::Dom;
use crate::event::handler::{onkeydown, onresize};

const DEVELOPER_NAME: &str = "Veli Tasalı";
const DEVELOPER_WEBSITE: &str = "https://velitasali.com";
const DEVELOPER_EMAIL: &str = "me@velitasali.com";
const PROJECT_REPOSITORY: &str = env!("CARGO_PKG_REPOSITORY");

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

lazy_static! {
    static ref DOM: Dom = Dom::new();
}

#[wasm_bindgen]
pub fn commands_init() {
    util::set_panic_hook();
    util::console_log!("Hello from Rust WASM!");

    self::setup_listeners();
    self::dom().init();
}

pub fn dom() -> &'static Dom {
    &DOM
}

fn setup_listeners() {
    let dom = self::dom();

    let keydown_listener = Closure::wrap(Box::new(|e: KeyboardEvent| {
        onkeydown(e);
    }) as Box<dyn FnMut(KeyboardEvent)>);

    dom.canvas_input.set_onkeydown(Some(keydown_listener.as_ref().unchecked_ref()));
    keydown_listener.forget();

    let resize_listener = Closure::wrap(Box::new(|| {
        onresize();
    }) as Box<dyn FnMut()>);

    dom.window.set_onresize(Some(resize_listener.as_ref().unchecked_ref()));
    resize_listener.forget();

    let wheel_listener = Closure::wrap(Box::new(|e: WheelEvent| {
        oncanvaswheel(e);
    }) as Box<dyn FnMut(WheelEvent)>);

    dom.canvas.set_onwheel(Some(wheel_listener.as_ref().unchecked_ref()));

    wheel_listener.forget();
}
