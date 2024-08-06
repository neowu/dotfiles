# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zsh/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

FPATH=/opt/homebrew/share/zsh/site-functions:$FPATH
[[ -e $HOME/.cargo/env ]] && source $HOME/.cargo/env

source $ZDOTDIR/config.zsh

# plugins
source $ZDOTDIR/plugins/zsh-autosuggestions/zsh-autosuggestions.plugin.zsh
source $ZDOTDIR/highlighting.zsh
source $ZDOTDIR/plugins/powerlevel10k/powerlevel10k.zsh-theme

source $ZDOTDIR/fzf.zsh
source $ZDOTDIR/eza.zsh
source $ZDOTDIR/bat.zsh

cdpath=($HOME/depot $HOME/projects)
alias d='dirs -v'
alias ..='cd ..'

source $ZDOTDIR/p10k.zsh
