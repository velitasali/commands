use js_sys::Math::min;
use wasm_bindgen::JsValue;

use super::Scene;
use crate::{dom, util::wrap_text};

const PADDING: f64 = 20.0;

pub struct Shell {
    text: String,
    is_drawn: bool,
    scroll: f64,
    scroll_velocity: f64,
}

impl Shell {
    pub fn new(text: String) -> Self {
        Shell {
            text,
            is_drawn: false,
            scroll: 0.0,
            scroll_velocity: 0.0,
        }
    }
}

impl Scene for Shell {
    fn draw(&mut self) {
        let dom = dom();
        let ctx = &dom.ctx;
        let max_width = dom.canvas.client_width() as f64;
        let max_height = dom.canvas.client_height() as f64;
        let mut y = 0.0;
        let y_offset = PADDING - self.scroll;
        let color = dom
            .window
            .get_computed_style(&dom.canvas)
            .unwrap()
            .unwrap()
            .get_property_value("color")
            .unwrap();

        ctx.clear_rect(0.0, 0.0, max_width, max_height);

        ctx.save();
        ctx.translate(0.0, y_offset).unwrap();
        ctx.set_fill_style(&JsValue::from_str(color.as_str()));
        ctx.set_text_baseline("top");
        ctx.set_font("24px DM Mono, Source Code Pro, Monospace");

        let lines = wrap_text(
            &self.text,
            (max_width - PADDING * 2.0) * dom.window.device_pixel_ratio(),
        );
        for line in lines {
            ctx.fill_text(&line, PADDING, y).unwrap();
            y += 36.0;
        }
        ctx.restore();

        let is_scrollable_to_top = self.scroll > 0.0;
        let is_scrollable_to_bottom = y + y_offset > max_height;

        if is_scrollable_to_top || is_scrollable_to_bottom {
            ctx.save();

            ctx.set_shadow_color("rgba(112, 112, 112, 0.5)");
            ctx.set_shadow_blur(8.0);
            ctx.set_fill_style(&JsValue::from_str("rgba(112, 112, 112, .2)"));

            if is_scrollable_to_top {
                ctx.fill_rect(0.0, 0.0, max_width, 2.0);
            }
            if is_scrollable_to_bottom {
                ctx.fill_rect(0.0, max_height - 2.0, max_width, 2.0);
            }

            ctx.restore();
        }

        self.is_drawn = self.scroll_velocity == 0.0;
        self.scroll += self.scroll_velocity;

        if self.scroll > 0.0 && y + y_offset < max_height {
            self.scroll_velocity = -min(10.0, max_height - (y + y_offset));
        } else if self.scroll < 0.0 {
            self.scroll_velocity = min(10.0, -self.scroll);
        } else if self.scroll_velocity != 0.0 {
            if self.scroll_velocity > 0.0 || y < max_height - PADDING {
                self.scroll = 0.0;
            } else {
                self.scroll = y - (max_height - PADDING);
            }
            self.scroll_velocity = 0.0;
        }
    }

    fn handle_wheel_event(&mut self, event: web_sys::WheelEvent) {
        self.is_drawn = false;
        self.scroll += event.delta_y();
    }

    fn is_dirty(&self) -> bool {
        !self.is_drawn
    }

    fn schedule_for_redraw(&mut self) {
        self.is_drawn = false;
    }
}
