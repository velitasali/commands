use wasm_bindgen::prelude::wasm_bindgen;

use crate::dom;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}

macro_rules! console_log {
    ($($t:tt)*) => (crate::util::log(&format_args!($($t)*).to_string()))
}

pub(crate) use console_log;

pub fn set_panic_hook() {
    // When the `console_error_&panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

pub fn wrap_text(str: &str, max_width: f64) -> Vec<String> {
    let dom = dom();
    let modified_str = str
        .replace("\r\n", "\n")
        .replace('\t', "    ")
        .replace('\r', "\n")
        .trim()
        .to_string();
    let lines = modified_str.split('\n');
    let mut moved_line = String::new();
    let mut result = vec![];

    for line in lines {
        let words = line.split(' ');
        for word in words {
            let metrics = dom.ctx.measure_text(&(moved_line.clone() + word)).unwrap();
            let line_width = metrics.width() * dom.window.device_pixel_ratio();

            if line_width > max_width {
                result.push(moved_line.to_string());
                moved_line = String::new();
            }

            moved_line += &format!("{} ", &word);
        }

        if !moved_line.is_empty() {
            result.push(moved_line.clone());
            moved_line = String::new();
        }
    }

    result
}
