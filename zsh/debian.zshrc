# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zsh/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

source $ZDOTDIR/config.zsh

# plugins
source $ZDOTDIR/plugins/zsh-autosuggestions/zsh-autosuggestions.plugin.zsh
source $ZDOTDIR/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh
source $ZDOTDIR/plugins/powerlevel10k/powerlevel10k.zsh-theme

FZF_PLUGIN_BASE=/usr/share/doc/fzf/examples
source $ZDOTDIR/fzf.zsh

# gcloud load "autoload -U +X bashcompinit && bashcompinit" already
[[ ! -e /usr/share/google-cloud-sdk/completion.zsh.inc ]] || source /usr/share/google-cloud-sdk/completion.zsh.inc
[[ ! $+commands[terraform] ]] || complete -o nospace -C terraform terraform
[[ ! -e /etc/bash_completion.d/azure-cli ]] || source /etc/bash_completion.d/azure-cli
[[ ! $+commands[kubectl] ]] || source <(kubectl completion zsh)

# alias
cdpath=(/workspaces)
alias d='dirs -v'
alias ..='cd ..'

export EZA_COLORS='uu=2:gu=2:ur=34:uw=34:ue=34:ux=34:gr=36:gw=36:gx=36:tr=35:tw=35:tx=35:nm=33:ng=31:nt=31'
alias l='eza -l -a --time-style=long-iso'
alias ls='eza'
alias ll='eza -l --time-style=long-iso'
alias lt='eza -a --tree --time-style=long-iso'

export BAT_THEME='Nord'
export MANPAGER="sh -c 'col -bx | bat -l man -p'"
alias cat='bat -p'

source $ZDOTDIR/.p10k.zsh