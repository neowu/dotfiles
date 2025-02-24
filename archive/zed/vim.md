 # settings
 ```json
 {
   "relative_line_numbers": true,
   "vim_mode": false,
   "vim": {
     "toggle_relative_line_numbers": true,
     "use_multiline_find": true,
     "use_smartcase_find": true,
     "use_system_clipboard": "on_yank"
   },
 }
 ```
# key map
```json
[
  {
    "context": "VimControl && !menu",
    "bindings": {
      "space b": "tab_switcher::Toggle",
      "space e": "project_panel::ToggleFocus",
      "space f": "file_finder::Toggle",
      "space h": "editor::Hover",
      "space s": "outline::Toggle",
      "space shift-s": "project_symbols::Toggle",
      "space .": "editor::ToggleCodeActions"
    }
  }
]
```
