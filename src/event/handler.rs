use web_sys::{KeyboardEvent, WheelEvent};

use crate::{dom, program::Program};

pub fn onkeydown(e: KeyboardEvent) {
    let dom = dom();
    let input_value = dom.canvas_input.value();

    // Check if the key is Enter, and if so, update the latest input.
    if e.key() == "Enter" {
        e.prevent_default();
        dom.update_scene_from(dom.program.run(input_value.clone()));
        dom.history.borrow_mut().add(input_value);
        dom.canvas_input.set_value("");
    } else if e.key() == "Tab" && input_value.trim().is_empty() {
        if let Some(value) = dom.history.borrow_mut().current() {
            e.prevent_default();
            dom.canvas_input.set_value(value.as_str());
        }
    } else if e.key() == "ArrowUp" {
        if let Some(value) = dom.history.borrow_mut().prev() {
            e.prevent_default();
            dom.canvas_input.set_value(value.as_str());
        }
    } else if e.key() == "ArrowDown" {
        if let Some(value) = dom.history.borrow_mut().next() {
            e.prevent_default();
            dom.canvas_input.set_value(value.as_str());
        } 
    } else {
        return;
    }

    if let Some(current_value) = dom.history.borrow().current() {
        dom.canvas_input.set_placeholder(current_value.as_str());
    }
}

pub fn onresize() {
    let dom = dom();
    dom.resize();
}

pub fn oncanvaswheel(e: WheelEvent) {
    e.prevent_default();
    dom().scene.borrow_mut().handle_wheel_event(e);
}