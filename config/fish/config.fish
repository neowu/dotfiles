status is-interactive; or exit

set -U fish_greeting

set -x CDPATH $HOME/depot $HOME/projects

fish_add_path $HOME/.cargo/bin

abbr h history
abbr dh dirh
