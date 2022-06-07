use clap::{ArgEnum, IntoApp, Parser, Subcommand};

use crate::{dom, DEVELOPER_EMAIL, DEVELOPER_NAME, DEVELOPER_WEBSITE};

use super::{Program, ProgramResult};

#[derive(ArgEnum, Clone, Debug)]
enum DeveloperDetail {
    Name,
    Education,
    Email,
    Website,
}

#[derive(Subcommand, Debug)]
enum Detail {
    /// Details about the developer
    Developer {
        /// Detail to print
        #[clap(arg_enum)]
        detail: DeveloperDetail,

        /// Open links in a new tab
        #[clap(long, short)]
        open: bool,
    },
    /// Details about the project
    Project,
}

/// More details about the project
#[derive(Parser, Debug)]
#[clap(name = "about", version)]
struct ProgramMe {
    #[clap(subcommand)]
    detail: Detail,
}

pub struct Me {}

impl Me {
    fn new() -> Self {
        Self {}
    }

    fn detail(&self, detail: &Detail) -> String {
        match detail {
            Detail::Project => concat!(
                "This was created to demo a bunch of technologies, mainly ",
                "Rust, WebAssembly, TypeScript, Node.js, and Canvas. \n\nIf ",
                "you are interested in seeing the source code, you can use ",
                "find the commands to find the links related to the project.",
            )
            .to_string(),
            Detail::Developer { detail, open } => self.developer_detail(detail, open),
        }
    }

    fn developer_detail(&self, detail: &DeveloperDetail, open: &bool) -> String {
        let result = match detail {
            DeveloperDetail::Name => DEVELOPER_NAME,
            DeveloperDetail::Education => concat!(
                "Bachelor's Degree from Erciyes University. ",
                "Feel free to guess the field :)",
            ),
            DeveloperDetail::Email => DEVELOPER_EMAIL,
            DeveloperDetail::Website => DEVELOPER_WEBSITE,
        };

        if *open {
            let openable = match detail {
                DeveloperDetail::Email => Some(format!("mailto:{}", result)),
                DeveloperDetail::Website => Some(result.to_string()),
                _ => None,
            };

            if let Some(openable) = openable {
                dom().window.open_with_url(openable.as_str()).unwrap();
            }
        }

        result.to_string()
    }
}

impl Program for Me {
    fn command<'a>(&self) -> clap::Command<'a> {
        ProgramMe::command()
    }

    fn name(&self) -> String {
        ProgramMe::command().get_name().to_string()
    }

    fn run(&self, text: String) -> ProgramResult {
        ProgramResult::Text {
            text: match ProgramMe::try_parse_from(text.split_whitespace()) {
                Ok(args) => self.detail(&args.detail),
                Err(error) => error.to_string(),
            },
        }
    }
}

impl Default for Me {
    fn default() -> Self {
        Self::new()
    }
}
