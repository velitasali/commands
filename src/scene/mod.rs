pub mod shell;

use web_sys::WheelEvent;

use crate::program::ProgramResult;
use self::shell::Shell;

pub trait Scene {
    fn draw(&mut self);

    fn handle_wheel_event(&mut self, event: WheelEvent);

    fn is_dirty(&self) -> bool;

    fn schedule_for_redraw(&mut self);
}

impl From<ProgramResult> for Box<dyn Scene> {
    fn from(program_result: ProgramResult) -> Self {
        match program_result {
            ProgramResult::Scene { scene } => scene,
            ProgramResult::Text { text } => Box::from(Shell::new(text)),
        }
    }
}