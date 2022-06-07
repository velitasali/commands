use wasm_bindgen::{prelude::Closure, JsCast};

use crate::dom;

pub struct Renderer {
    next_frame_id: i32,
    frame_callback: Closure<dyn FnMut()>,
}

impl Renderer {
    pub fn new() -> Self {
        let frame_callback = Closure::wrap(Box::new(move || {
            Self::do_render_loop();
        }) as Box<dyn FnMut()>);

        Self {
            next_frame_id: 0,
            frame_callback,
        }
    }

    fn do_render_loop() {
        let dom = dom();
        let renderer = &mut (*dom.renderer.borrow_mut());

        renderer.draw();
        renderer.next_frame_id = dom
            .window
            .request_animation_frame(renderer.frame_callback.as_ref().unchecked_ref())
            .unwrap();
    }

    pub fn draw(&mut self) {
        let dom = dom();
        let scene = &mut (*dom.scene.borrow_mut());

        if scene.is_dirty() {
            scene.draw();
        }
    }

    pub fn redraw(&mut self) {
        let dom = dom();
        dom.scene.borrow_mut().schedule_for_redraw();
    }

    pub fn start_render_loop() {
        Self::do_render_loop();
    }
}

impl Default for Renderer {
    fn default() -> Self {
        Self::new()
    }
}
