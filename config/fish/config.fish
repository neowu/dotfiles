status is-interactive; or exit

fish_add_path -g $HOME/.cargo/bin

set -x CDPATH $HOME/depot $HOME/projects

set -g VIRTUAL_ENV_DISABLE_PROMPT true

abbr h history
abbr dh dirh
abbr lg lazygit
abbr gs 'git status -sb'
