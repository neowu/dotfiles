local wezterm = require "wezterm" 
local act = wezterm.action

config = wezterm.config_builder()
config.automatically_reload_config = false

config.color_scheme = "Nord (base16)"
config.font = wezterm.font "JetBrainsMono Nerd Font"
config.font_size = 13.0
config.line_height = 1.1

config.use_fancy_tab_bar = true
config.hide_tab_bar_if_only_one_tab = true

config.initial_cols = 200
config.initial_rows = 50
config.window_padding = {
    left = 2,
    right = 2,
    top = 2,
    bottom = 2,
}

config.audible_bell = "Disabled"
config.enable_kitty_keyboard = true
config.disable_default_key_bindings = true
config.keys = {
    -- make Option-Left equivalent to Alt-b which many line editors interpret as backward-word
    { key = "LeftArrow", mods = "OPT", action = act{SendString="\x1bb"} },
    -- make Option-Right equivalent to Alt-f; forward-word
    { key = "RightArrow", mods = "OPT", action = act{SendString="\x1bf"} },
    
    { key = "{", mods = "CMD|SHIFT", action = act.ActivatePaneDirection "Prev" },
    { key = "}", mods = "CMD|SHIFT", action = act.ActivatePaneDirection "Next" },      
    { key = "p", mods = "CMD", action = act.ActivateKeyTable { name = "pane_mode", timeout_milliseconds = 3000 } },

    { key = "=", mods = "CMD", action = act.IncreaseFontSize },
    { key = "-", mods = "CMD", action = act.DecreaseFontSize },
    { key = "0", mods = "CMD", action = act.ResetFontSize },

    { key = "c", mods = "CMD", action = act.CopyTo "Clipboard" },
    { key = "v", mods = "CMD", action = act.PasteFrom "Clipboard" },
    { key = "f", mods = "CMD", action = act.Search "CurrentSelectionOrEmptyString" },
    { key = "k", mods = "CMD", action = act.ClearScrollback "ScrollbackAndViewport" },
    { key = "l", mods = "CMD", action = act.ActivateCommandPalette },

    { key = "n", mods = "CMD", action = act.SpawnWindow },
    { key = "q", mods = "CMD", action = act.QuitApplication },

    { key = "t", mods = "CMD", action = act.SpawnTab "CurrentPaneDomain" },
    { key = "w", mods = "CMD", action = act.CloseCurrentTab{ confirm = true } },
    { key = "[", mods = "CMD", action = act.ActivateTabRelative(-1) },
    { key = "]", mods = "CMD", action = act.ActivateTabRelative(1) },
    { key = "1", mods = "CMD", action = act.ActivateTab(0) },
    { key = "2", mods = "CMD", action = act.ActivateTab(1) },
    { key = "3", mods = "CMD", action = act.ActivateTab(2) },
    { key = "4", mods = "CMD", action = act.ActivateTab(3) },
    { key = "5", mods = "CMD", action = act.ActivateTab(4) },
        
    { key = "PageUp", mods = "SHIFT", action = act.ScrollByPage(-1) },
    { key = "PageDown", mods = "SHIFT", action = act.ScrollByPage(1) },
}

config.key_tables = {
    pane_mode = {
        { key = "s", action = act.SplitHorizontal { domain = "CurrentPaneDomain" } },
        { key = "v", action = act.SplitVertical { domain = "CurrentPaneDomain" } },
        { key = "q", action = act.CloseCurrentPane { confirm = true } },
        { key = "z", action = act.TogglePaneZoomState },
        { key = "a", action = act.PaneSelect },
        { key = "f", action = act.ToggleFullScreen },
        { key = "Escape", action = "PopKeyTable" },
    },
}

wezterm.on("update-right-status", function(window, pane)
    local mode = window:active_key_table()
    if mode then
        mode = " " .. string.upper(mode) .. " "
    end
    window:set_right_status(mode or "")
end)

local dark0 = "#2e3440"
local dark1 = "#3b4252"
local dark2 = "#434c5e"
local light0 = "#d8dee9"
local light1 = "#e5e9f0" 
local light2 = "#eceff4"

config.window_frame = {
    font = wezterm.font { family = "JetBrainsMono Nerd Font" },
    font_size = 13.0,
    inactive_titlebar_bg = dark0,
    active_titlebar_bg = dark0,
}

config.colors = {
    tab_bar = {
        background = dark0,
        active_tab = { bg_color = dark0, fg_color = light0, },
        inactive_tab = { bg_color = dark1, fg_color = light0, },
        inactive_tab_hover = { bg_color = dark2, fg_color = light0, },  
        new_tab = { bg_color = dark0, fg_color = light0, },
        new_tab_hover = { bg_color = dark2, fg_color = light0, },
    },
    scrollbar_thumb = dark2,
    split = dark2,
}

config.command_palette_bg_color = dark1
config.command_palette_fg_color = light0

return config
