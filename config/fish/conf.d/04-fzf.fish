return
not status is-interactive; or not command -q fzf; and return

set -gx FZF_DEFAULT_OPTS '--ansi --height=80% --layout=reverse --color=border:gray,pointer:cyan,marker:cyan,spinner:cyan,prompt:yellow,info:yellow,hl:red,hl+:bright-red'
set -gx FZF_CTRL_T_COMMAND 'fd --color=always --hidden --follow --exclude .git'
set -gx FZF_CTRL_T_OPTS "--preview 'test -d {} && eza --color=always --tree --git-ignore {} || bat -n --color=always {}' --bind 'ctrl-_:change-preview-window(down|hidden|)' --bind 'ctrl-p:preview-up' --bind 'ctrl-n:preview-down'"
set -gx FZF_ALT_C_COMMAND 'fd --type d --color=always --hidden --follow --exclude .git'
set -gx FZF_ALT_C_OPTS "--preview 'eza --color=always --tree --git-ignore {}' --bind 'ctrl-_:change-preview-window(down|hidden|)' --bind 'ctrl-p:preview-up' --bind 'ctrl-n:preview-down'"

fzf --fish | source
