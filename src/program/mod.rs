pub mod commands;
pub mod about;

use crate::scene::Scene;

pub enum ProgramResult {
    Text { text: String },
    Scene { scene: Box<dyn Scene> },
}

pub trait Program {
    fn command<'a>(&self) -> clap::Command<'a>;

    fn help(&self) -> ProgramResult {
        self.run(format!("{} --help", self.name()))
    }

    fn name(&self) -> String;

    fn run(&self, arg: String) -> ProgramResult;
}
