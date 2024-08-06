export FZF_DEFAULT_COMMAND='fd --color=always --hidden --follow --exclude .git'
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_DEFAULT_OPTS='--ansi --height=40% --layout=reverse'
_fzf_compgen_path() {
    fd --color=always --hidden --follow --exclude '.git' . "$1"
}
_fzf_compgen_dir() {
    fd --type d --color=always --hidden --follow --exclude '.git' . "$1"
}
source <(fzf --zsh)
