# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zsh/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

FPATH=/opt/homebrew/share/zsh/site-functions:$FPATH

source $ZDOTDIR/color.zsh
source $ZDOTDIR/config.zsh

# plugins
source $ZDOTDIR/plugins/zsh-autosuggestions/zsh-autosuggestions.plugin.zsh
source $ZDOTDIR/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh
source $ZDOTDIR/plugins/powerlevel10k/powerlevel10k.zsh-theme

FZF_PLUGIN_BASE=/opt/homebrew/opt/fzf/shell
source $ZDOTDIR/fzf.zsh

cdpath=($HOME/depot $HOME/projects)
source $ZDOTDIR/alias.zsh

source $ZDOTDIR/.p10k.zsh
