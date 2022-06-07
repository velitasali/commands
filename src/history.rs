pub struct History {
    pub history: Vec<String>,
    pub index: usize,
}

impl History {
    pub fn new() -> Self {
        Self {
            history: Vec::new(),
            index: 0,
        }
    }

    pub fn add(&mut self, text: String) {
        if let Some(last) = self.history.last() {
            if last == &text {
                return;
            }
        }
        self.history.push(text);
        self.index = self.history.len() - 1;
    }

    pub fn current(&self) -> Option<&String> {
        self.history.get(self.index)
    }

    pub fn prev(&mut self) -> Option<String> {
        if self.index > 0 {
            self.index -= 1;
            Some(self.history[self.index].clone())
        } else {
            None
        }
    }

    pub fn next(&mut self) -> Option<String> {
        if self.index < self.history.len() - 1 {
            self.index += 1;
            Some(self.history[self.index].clone())
        } else {
            None
        }
    }
}

impl Default for History {
    fn default() -> Self {
        Self::new()
    }
}
