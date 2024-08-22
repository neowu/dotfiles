#!/usr/bin/env fish
cp -r config/fish $HOME/.config/

# set universal variables
set -U fish_greeting
fish_config theme choose Nord
set -U fish_color_cwd cyan
set -U fish_color_host_remote yellow
