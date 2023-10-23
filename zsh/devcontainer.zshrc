# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zsh/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

FPATH=$ZDOTDIR/functions:$FPATH

source $ZDOTDIR/plugins/lscolors/lscolors.plugin.zsh
source $ZDOTDIR/default.zsh

source $ZDOTDIR/plugins/zsh-autosuggestions/zsh-autosuggestions.plugin.zsh
source $ZDOTDIR/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh
source $ZDOTDIR/plugins/powerlevel10k/powerlevel10k.zsh-theme

FZF_PLUGIN_BASE=/usr/share/doc/fzf/examples
source $ZDOTDIR/fzf.zsh

# gcloud load "autoload -U +X bashcompinit && bashcompinit" already
[[ ! -e /usr/share/google-cloud-sdk/completion.zsh.inc ]] || source /usr/share/google-cloud-sdk/completion.zsh.inc
[[ ! -e /usr/bin/terraform ]] || complete -o nospace -C /usr/bin/terraform terraform
[[ ! -e /etc/bash_completion.d/azure-cli ]] || source /etc/bash_completion.d/azure-cli

# alias
export EZA_COLORS="uu=0:gu=0:ur=34:uw=34:ue=34:ux=34:gr=36:gw=36:gx=36:tr=31:tw=31:tx=31"
alias l='eza -la --time-style iso'
alias ll='eza -l --time-style iso'
alias tree='eza -Ta --time-style iso'
alias c='batcat -p'

source $ZDOTDIR/.p10k.zsh