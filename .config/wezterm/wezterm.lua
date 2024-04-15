local wezterm = require "wezterm" 
local act = wezterm.action

config = wezterm.config_builder()
config.front_end = "WebGpu"
config.automatically_reload_config = false
config.use_fancy_tab_bar = true
config.window_decorations = "INTEGRATED_BUTTONS|RESIZE"
config.native_macos_fullscreen_mode = true

config.color_scheme = "Nord (base16)"
config.font = wezterm.font "JetBrainsMono Nerd Font"
config.font_size = 13.0
config.freetype_load_target = "Light"
config.freetype_load_flags = "NO_HINTING"
config.line_height = 1.1
config.initial_cols = 200
config.initial_rows = 50
config.window_padding = {
    left = 2,
    right = 2,
    top = 2,
    bottom = 2,
}
config.window_close_confirmation = "NeverPrompt"
config.adjust_window_size_when_changing_font_size = false
config.audible_bell = "Disabled"
config.enable_kitty_keyboard = true

config.disable_default_key_bindings = true
config.keys = {        
    { key = "p", mods = "CMD", action = act.ActivateKeyTable { name = "pane_mode", one_shot = false, prevent_fallback = true, replace_current = true, until_unknown = true } },

    { key = "=", mods = "CMD", action = act.IncreaseFontSize },
    { key = "-", mods = "CMD", action = act.DecreaseFontSize },
    { key = "0", mods = "CMD", action = act.ResetFontSize },

    { key = "c", mods = "CMD", action = act.CopyTo "Clipboard" },
    { key = "v", mods = "CMD", action = act.PasteFrom "Clipboard" },
    { key = "f", mods = "CMD", action = act.Search "CurrentSelectionOrEmptyString" },
    { key = "k", mods = "CMD", action = act.ClearScrollback "ScrollbackAndViewport" },
    { key = "l", mods = "CMD", action = act.Multiple { act.ClearKeyTableStack, act.ActivateCommandPalette } },

    { key = "n", mods = "CMD", action = act.SpawnWindow },
    { key = "q", mods = "CMD", action = act.QuitApplication },

    { key = "t", mods = "CMD", action = act.SpawnTab "DefaultDomain" },
    { key = "w", mods = "CMD", action = act.CloseCurrentTab { confirm = false } },
    { key = "e", mods = "CMD", action = act.PromptInputLine { description = "Enter new name for tab", 
        action = wezterm.action_callback(function(window, pane, line)
            if line then
                window:active_tab():set_title(line)
            end
        end) } },
    { key = "[", mods = "CMD", action = act.ActivateTabRelative(-1) },
    { key = "]", mods = "CMD", action = act.ActivateTabRelative(1) },
    { key = "{", mods = "SHIFT|CMD", action = act.MoveTabRelative(-1) },
    { key = "}", mods = "SHIFT|CMD", action = act.MoveTabRelative(1) },
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
        { key = "p", mods = "CMD", action = act.PopKeyTable },
        { key = "Escape", action = act.PopKeyTable },
        { key = "s", action = act.SplitHorizontal { domain = "CurrentPaneDomain" } },
        { key = "v", action = act.SplitVertical { domain = "CurrentPaneDomain" } },
        { key = "q", action = act.CloseCurrentPane { confirm = false } },
        { key = "z", action = act.TogglePaneZoomState },
        { key = "a", action = act.Multiple { act.ClearKeyTableStack, act.PaneSelect } },
        { key = "f", action = act.ToggleFullScreen },
        { key = "h", action = act.ActivatePaneDirection "Left" },
        { key = "l", action = act.ActivatePaneDirection "Right" },
        { key = "k", action = act.ActivatePaneDirection "Up" },
        { key = "j", action = act.ActivatePaneDirection "Down" },
        { key = "[", action = act.ActivatePaneDirection "Prev" },
        { key = "]", action = act.ActivatePaneDirection "Next" },  
        { key = "{", mods = "SHIFT", action = act.RotatePanes "CounterClockwise" },
        { key = "}", mods = "SHIFT", action = act.RotatePanes "Clockwise" },
    },
}

config.ssh_domains = {
    { name = "ssh:alpine", remote_address = "alpine", username = "neo", multiplexing = "None" },
}

function exec_domain(domain, name, shell) 
    return wezterm.exec_domain(domain, function(cmd)
        cmd.args = cmd.args or { shell }
        local wrapped = { "/opt/homebrew/bin/docker", "exec", "-it", name }
        for _, arg in ipairs(cmd.args) do
            table.insert(wrapped, arg)
        end
        cmd.args = wrapped
        return cmd
    end)
end

config.exec_domains = {
    exec_domain("docker:redis", "redis", "/bin/bash")
}

local dark0 = "#2e3440"
local dark1 = "#3b4252"
local dark2 = "#434c5e"
local grey0 = "#616e88"
local light0 = "#d8dee9"
local light1 = "#e5e9f0" 
local light2 = "#eceff4"
local blue1 = "#88c0d0"

wezterm.on("update-right-status", function(window, pane)
    local mode = window:active_key_table()
    if mode then
        mode = wezterm.format({ { Foreground = { Color = blue1 } }, { Text = " " .. string.upper(mode) .. " " } })
    end
    window:set_right_status(mode or "")
end)

function current_working_dir(tab)
    local dir = tab.active_pane.current_working_dir
    if dir then
        dir = dir.file_path
        local home = os.getenv("HOME")
        if home and dir:sub(1, #home) == home then 
            return "~" .. dir:sub(#home + 1)
        end
    end
    return nil
end

function tab_title(tab)
    local title = tab.tab_title -- if the tab title is explicitly set
    if #title > 0 then
        return title
    end
    return tab.active_pane.title
end

wezterm.on("format-tab-title", function(tab, tabs, panes, config, hover, max_width)
    local title = { { Text = tab.tab_index + 1 .. ":" } }
    local is_zoomed = tab.active_pane.is_zoomed
    if is_zoomed then
        table.insert(title, { Text = wezterm.nerdfonts.oct_zoom_in .. " " })
    end
    local domain_name = tab.active_pane.domain_name
    if domain_name ~= "local" then
        table.insert(title, { Foreground = { Color = grey0 } })
        table.insert(title, { Text = "[" .. domain_name .. "] " })
        table.insert(title, "ResetAttributes")
    end
    table.insert(title, { Text = tab_title(tab) })
    if domain_name == "local" then
        local dir = current_working_dir(tab)
        if dir then
            table.insert(title, { Foreground = { Color = grey0 } })
            table.insert(title, { Text = " " .. dir })
        end
    end
    return wezterm.format(title)
end)

config.window_frame = {
    font = wezterm.font { family = "JetBrainsMono Nerd Font" },
    font_size = 13.0,
    inactive_titlebar_bg = dark0,
    active_titlebar_bg = dark0,
}

config.colors = {
    tab_bar = {
        background = dark0,
        active_tab = { bg_color = dark0, fg_color = blue1 },
        inactive_tab = { bg_color = dark1, fg_color = light0 },
        inactive_tab_hover = { bg_color = dark2, fg_color = light0 },  
        new_tab = { bg_color = dark0, fg_color = light0 },
        new_tab_hover = { bg_color = dark2, fg_color = light0 },
        inactive_tab_edge = dark0,
    },
    scrollbar_thumb = dark2,
    split = dark2,
}

config.command_palette_bg_color = dark1
config.command_palette_fg_color = light0

return config
