# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zsh/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

FPATH=$(brew --prefix)/share/zsh/site-functions:$ZDOTDIR/functions:$FPATH

ZSH_COMPDUMP="${XDG_CACHE_HOME:-$HOME/.cache}/zcompdump"
autoload -Uz compinit && compinit -i -d "${ZSH_COMPDUMP}"
[[ "$ZSH_COMPDUMP.zwc" -nt "$ZSH_COMPDUMP" ]] || zcompile -R -- "$ZSH_COMPDUMP.zwc" "$ZSH_COMPDUMP" 

PS1='%B[%n@%m:%~]%# %b'

# dir
setopt AUTO_CD              # Auto changes to a directory without typing cd.
setopt AUTO_PUSHD           # Push the old directory onto the stack on cd.
setopt PUSHD_IGNORE_DUPS    # Do not store duplicates in the stack.
setopt PUSHD_SILENT         # Do not print the directory stack after pushd or popd.
setopt PUSHD_TO_HOME        # Push to home directory when no argument is given.

# history
HISTSIZE=50000                      # The number of events to save in the internal history.
SAVEHIST=10000                      # The number of events to save in the history file.
setopt EXTENDED_HISTORY             # record timestamp of command in HISTFILE
setopt HIST_EXPIRE_DUPS_FIRST       # delete duplicates first when HISTFILE size exceeds HISTSIZE
setopt HIST_IGNORE_DUPS             # ignore duplicated commands history list
setopt HIST_IGNORE_SPACE            # ignore commands that start with space
setopt HIST_VERIFY                  # show command with history expansion to user before running it
setopt SHARE_HISTORY                # share command history data

# completion
setopt COMPLETE_IN_WORD    # Complete from both ends of a word.
setopt ALWAYS_TO_END       # Move cursor to the end of a completed word.
setopt AUTO_MENU           # Show completion menu on a succesive tab press.
unsetopt MENU_COMPLETE     # Do not autoselect the first completion entry.
unsetopt FLOW_CONTROL      # Disable start/stop characters in shell editor.

zstyle ':completion::complete:*' use-cache on       # Use caching to make completion for cammands such as dpkg and apt usable.
zstyle ':completion::complete:*' cache-path ${XDG_CACHE_HOME:-$HOME/.cache}/zsh

zstyle ':completion:*' matcher-list 'r:|[._-]=* r:|=*' 'l:|=* r:|=*'    # Case-insensitive (all), partial-word, and then substring completion.
zstyle ':completion:*' special-dirs true

zstyle ':completion:*:*:*:*:*' menu select

zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*:cd:*' tag-order local-directories directory-stack path-directories

function apply_plugin() {
    local plugin="$1"
    [[ ! -f $ZDOTDIR/plugins/$plugin/$plugin.plugin.zsh ]] || source $ZDOTDIR/plugins/$plugin/$plugin.plugin.zsh    
}

apply_plugin zsh-autosuggestions
apply_plugin zsh-syntax-highlighting
apply_plugin lscolors
[[ ! -f $ZDOTDIR/plugins/powerlevel10k/powerlevel10k.zsh-theme ]] ||source $ZDOTDIR/plugins/powerlevel10k/powerlevel10k.zsh-theme

unfunction apply_plugin

# fzf
export FZF_DEFAULT_COMMAND='fd --type f --color=always --hidden --follow --exclude .git'
export FZF_DEFAULT_OPTS='--ansi --height=40% --layout=reverse'

_fzf_compgen_path() {
    fd --color=always --hidden --follow --exclude ".git" . "$1"
}
_fzf_compgen_dir() {
    fd --type d --color=always --hidden --follow --exclude ".git" . "$1"
}
source /opt/homebrew/opt/fzf/shell/completion.zsh
source /opt/homebrew/opt/fzf/shell/key-bindings.zsh

# alias
export EZA_COLORS="uu=0:gu=0:ur=34:uw=34:ue=34:ux=34:gr=36:gw=36:gx=36:tr=31:tw=31:tx=31"
alias l='eza -la --time-style iso'
alias ll='eza -l --time-style iso'
alias tree='eza -Ta --time-style iso'
alias c='bat -p'

[[ ! -f $ZDOTDIR/.p10k.zsh ]] || source $ZDOTDIR/.p10k.zsh