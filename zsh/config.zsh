ZSH_COMPDUMP="${XDG_CACHE_HOME:-$HOME/.cache}/zcompdump"
autoload -Uz compinit && compinit -i -d "${ZSH_COMPDUMP}"
[[ "$ZSH_COMPDUMP.zwc" -nt "$ZSH_COMPDUMP" ]] || zcompile -R -- "$ZSH_COMPDUMP.zwc" "$ZSH_COMPDUMP" 

PS1='%B[%n@%m:%~]%# %b'

# refer to https://zsh.sourceforge.io/Doc/Release/Options.html
# directory
setopt CD_SILENT            # Never print the working directory after a cd (whether explicit or implied with the AUTO_CD option set)
setopt AUTO_PUSHD           # Push the old directory onto the stack on cd.
setopt PUSHD_IGNORE_DUPS    # Do not store duplicates in the stack.
setopt PUSHD_SILENT         # Do not print the directory stack after pushd or popd.
setopt PUSHD_TO_HOME        # Push to home directory when no argument is given.
setopt COMPLETE_IN_WORD     # If unset, the cursor is set to the end of the word if completion is started. Otherwise it stays there and completion is done from both ends.
setopt ALWAYS_TO_END        # If a completion is performed with the cursor within a word, and a full completion is inserted, the cursor is moved to the end of the word.

# history
HISTSIZE=50000                      # The number of events to save in the internal history.
SAVEHIST=10000                      # The number of events to save in the history file.
HISTORY_IGNORE="(l|l[lt]|cd|..|pwd|exit)"
setopt EXTENDED_HISTORY             # record timestamp of command in HISTFILE
setopt HIST_IGNORE_ALL_DUPS         # If a new command line being added to the history list duplicates an older one, the older command is removed from the list (even if it is not the previous event).
setopt HIST_IGNORE_DUPS             # Do not enter command lines into the history list if they are duplicates of the previous event.
setopt HIST_IGNORE_SPACE            # ignore commands that start with space
setopt HIST_VERIFY                  # show command with history expansion to user before running it
setopt HIST_SAVE_NO_DUPS            # When writing out the history file, older commands that duplicate newer ones are omitted.
setopt HIST_NO_STORE                # history commands are not registered in history
setopt SHARE_HISTORY                # share command history data

# completion
WORDCHARS=''

setopt AUTO_MENU           # Show completion menu on a succesive tab press.
unsetopt MENU_COMPLETE     # Do not autoselect the first completion entry.
unsetopt FLOW_CONTROL      # Disable start/stop characters in shell editor.

zstyle ':completion::complete:*' use-cache on       # Use caching to make completion for cammands such as dpkg and apt usable.
zstyle ':completion::complete:*' cache-path ${XDG_CACHE_HOME:-$HOME/.cache}/zsh

zstyle ':completion:*' matcher-list 'r:|=*' 'l:|=* r:|=*'
zstyle ':completion:*' special-dirs true

zstyle ':completion:*:*:*:*:*' menu select

zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS} 'ma=1;30;46'
zstyle ':completion:*:cd:*' tag-order local-directories directory-stack path-directories

zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#) ([0-9a-z-]#)*=01;34=0=01'
zstyle ':completion:*:*:*:*:processes' command "ps -u $USERNAME -o pid,user,comm -w -w"