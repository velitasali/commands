use clap::{ArgEnum, IntoApp, Parser, Subcommand};

use crate::{dom, DEVELOPER_WEBSITE, PROJECT_REPOSITORY};

use super::{about::Me, Program, ProgramResult};

#[derive(ArgEnum, Clone, Debug)]
enum Link {
    Personal,
    Repo,
}

#[derive(Subcommand, Debug)]
enum Action {
    /// Lists available commands.
    List,

    /// Opens specified project link in a new tab.
    Visit {
        #[clap(arg_enum)]
        link: Link,
    },
}

#[derive(Parser, Debug)]
#[clap(author, version, about, long_about = None)]
struct ProgramCommands {
    #[clap(subcommand)]
    action: Action,
}

pub struct Commands {
    pub programs: Vec<Box<dyn Program>>,
}

impl Commands {
    fn available_commands(&self) -> ProgramResult {
        let commands_list = self
            .programs
            .iter()
            .map(|program| {
                format!(
                    "\t{} <{}>",
                    program.name(),
                    program.command().get_about().unwrap()
                )
            })
            .collect::<Vec<_>>()
            .join("\n");
        ProgramResult::Text {
            text: format!("AVAILABLE COMMANDS:\n\n{}", commands_list,),
        }
    }

    fn visit(&self, link: Link) -> ProgramResult {
        let dom = dom();
        let result = match link {
            Link::Personal => DEVELOPER_WEBSITE,
            Link::Repo => PROJECT_REPOSITORY,
        };

        dom.window.open_with_url(result).unwrap();

        ProgramResult::Text {
            text: format!("Opening `{}` in a new tab...", result),
        }
    }
}

impl Program for Commands {
    fn command<'a>(&self) -> clap::Command<'a> {
        ProgramCommands::command()
    }

    fn name(&self) -> String {
        ProgramCommands::command().get_name().to_string()
    }

    fn run(&self, text: String) -> ProgramResult {
        let prg_name = text.trim().split(' ').next();
        let list_cmds_help = "To print help, run:\n\tcommands --help";

        match prg_name {
            None => ProgramResult::Text {
                text: format!("error: The program name is invalid\n\n{}", list_cmds_help),
            },
            Some(prg_name) => {
                if prg_name.is_empty() {
                    self.help()
                } else if prg_name == self.name() {
                    match ProgramCommands::try_parse_from(text.split_whitespace()) {
                        Ok(args) => match args.action {
                            Action::List => self.available_commands(),
                            Action::Visit { link } => self.visit(link),
                        },
                        Err(error) => ProgramResult::Text {
                            text: error.to_string(),
                        },
                    }
                } else if let Some(program) = self
                    .programs
                    .iter()
                    .find(|program| program.name() == prg_name)
                {
                    program.run(text)
                } else {
                    ProgramResult::Text {
                        text: format!(
                            "error: No matching command `{}`\n\n{}",
                            prg_name, list_cmds_help
                        ),
                    }
                }
            }
        }
    }
}

impl Default for Commands {
    fn default() -> Self {
        let programs: Vec<Box<dyn Program>> = vec![Box::new(Me::default())];
        Self { programs }
    }
}
