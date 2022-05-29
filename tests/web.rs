//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

use libcommands::get_number;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn test_passes() {
    assert_eq!(1 + 1, 2);
}

#[wasm_bindgen_test]
fn test_numbers_equal() {
    assert_eq!(get_number(), 42);
}
