#!/usr/bin/env fish
cp -r config/fish $HOME/.config/

# set universal variables
set -U fish_greeting

# set theme
set -U fish_color_normal normal
set -U fish_color_command blue
set -U fish_color_param normal
set -U fish_color_keyword magenta
set -U fish_color_quote green
set -U fish_color_redirection magenta
set -U fish_color_end magenta
set -U fish_color_comment --dim black
set -U fish_color_error red
set -U fish_color_gray --dim black
set -U fish_color_selection --background=brwhite
set -U fish_color_search_match --reverse
set -U fish_color_option cyan
set -U fish_color_operator magenta
set -U fish_color_escape brred
set -U fish_color_autosuggestion --dim brwhite
set -U fish_color_cancel red
set -U fish_color_cwd cyan
set -U fish_color_user cyan
set -U fish_color_host blue
set -U fish_color_status red

set -U fish_pager_color_background
set -U fish_pager_color_completion normal
set -U fish_pager_color_description yellow
set -U fish_pager_color_prefix blue
set -U fish_pager_color_progress --dim black
set -U fish_pager_color_secondary_background
set -U fish_pager_color_secondary_completion
set -U fish_pager_color_secondary_description
set -U fish_pager_color_secondary_prefix
set -U fish_pager_color_selected_background --reverse
set -U fish_pager_color_selected_completion
set -U fish_pager_color_selected_description
set -U fish_pager_color_selected_prefix

switch (hostname)
case '*dev*'
    set -U fish_color_host_remote green
case '*prod*'
    set -U fish_color_host_remote red
case '*'
    set -U fish_color_host_remote yellow
end
