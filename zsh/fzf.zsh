export FZF_DEFAULT_COMMAND='fd --type f --color=always --hidden --follow --exclude .git'
export FZF_DEFAULT_OPTS='--ansi --height=40% --layout=reverse'
_fzf_compgen_path() {
    fd --color=always --hidden --follow --exclude '.git' . "$1"
}
_fzf_compgen_dir() {
    fd --type d --color=always --hidden --follow --exclude '.git' . "$1"
}
source $FZF_PLUGIN_BASE/completion.zsh
source $FZF_PLUGIN_BASE/key-bindings.zsh