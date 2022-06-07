use std::cell::RefCell;
use wasm_bindgen::JsCast;

use crate::{
    history::History,
    program::{commands::Commands, Program, ProgramResult},
    render::Renderer,
    scene::Scene,
};

pub struct Dom {
    pub document: web_sys::Document,
    pub window: web_sys::Window,
    pub body: web_sys::HtmlElement,

    pub canvas: web_sys::HtmlCanvasElement,
    pub canvas_input: web_sys::HtmlInputElement,
    pub ctx: web_sys::CanvasRenderingContext2d,

    pub program: Commands,

    pub renderer: RefCell<Renderer>,
    pub scene: RefCell<Box<dyn Scene>>,
    pub history: RefCell<History>,
}

impl Dom {
    pub fn new() -> Self {
        let window: web_sys::Window = web_sys::window().expect("no global `window` exists");
        let document = window.document().expect("should have a document on window");
        let body = document.body().expect("document should have a body");
        let canvas = document
            .get_element_by_id("mainCanvas")
            .unwrap()
            .dyn_into::<web_sys::HtmlCanvasElement>()
            .unwrap();
        let canvas_input = document
            .get_element_by_id("canvasInput")
            .unwrap()
            .dyn_into::<web_sys::HtmlInputElement>()
            .unwrap();
        let ctx = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();
        let program = Commands::default();
        let renderer = RefCell::from(Renderer::new());
        let scene = RefCell::from(Box::from(program.help()));
        let history = RefCell::from(History::new());

        Self {
            document,
            window,
            body,
            canvas,
            canvas_input,
            ctx,
            program,
            renderer,
            scene,
            history,
        }
    }

    pub fn init(&self) {
        self.resize();
        Renderer::start_render_loop();
    }

    pub fn resize(&self) {
        let ratio = self.window.device_pixel_ratio();

        self.canvas
            .set_width((self.canvas.client_width() as f64 * ratio) as u32);
        self.canvas
            .set_height((self.canvas.client_height() as f64 * ratio) as u32);

        self.ctx.scale(ratio, ratio).unwrap();
        self.renderer.borrow_mut().redraw();
    }

    pub fn update_scene_from(&self, program_result: ProgramResult) {
        self.scene.replace(Box::from(program_result));
    }
}

impl Default for Dom {
    fn default() -> Self {
        Self::new()
    }
}

unsafe impl Send for Dom {}

unsafe impl Sync for Dom {}
