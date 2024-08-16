set -U fish_greeting

fish_add_path $HOME/.cargo/bin

if status is-interactive
    set -x CDPATH $HOME/depot $HOME/projects
end
