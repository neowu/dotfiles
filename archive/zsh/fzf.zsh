export FZF_DEFAULT_OPTS='--ansi --height=80% --layout=reverse --color=border:gray,pointer:cyan,marker:cyan,spinner:cyan,prompt:yellow,info:yellow,hl:red,hl+:bright-red'
export FZF_CTRL_T_COMMAND='fd --color=always --hidden --follow --exclude .git'
export FZF_CTRL_T_OPTS="--preview '[[ -d {} ]] && eza --color=always --tree --git-ignore {} || bat -n --color=always {}' --bind 'ctrl-_:change-preview-window(down|hidden|)' --bind 'ctrl-p:preview-up' --bind 'ctrl-n:preview-down'"

_fzf_compgen_path() {
    fd --color=always --hidden --follow --exclude .git . "$1"
}
_fzf_compgen_dir() {
    fd --type d --color=always --hidden --follow --exclude .git . "$1"
}
_fzf_comprun() {
  local command=$1
  shift

  case "$command" in
    cd)           fzf --preview 'eza --color=always --tree --git-ignore {}' "$@" ;;
    export|unset) fzf --preview "eval 'echo \$'{}" "$@" ;;
    cat|cp|mv|rm) fzf --preview '[[ -d {} ]] && eza --color=always --tree --git-ignore {} || bat -n --color=always {}' --bind 'ctrl-_:change-preview-window(down|hidden|)' --bind 'ctrl-p:preview-up' --bind 'ctrl-n:preview-down' "$@" ;;
    *)            fzf "$@" ;;
  esac
}

FZF_ALT_C_COMMAND= source <(fzf --zsh)
