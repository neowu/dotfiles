ZSH_COMPDUMP="${XDG_CACHE_HOME:-$HOME/.cache}/zcompdump"
autoload -Uz compinit && compinit -i -d "${ZSH_COMPDUMP}"
[[ "$ZSH_COMPDUMP.zwc" -nt "$ZSH_COMPDUMP" ]] || zcompile -R -- "$ZSH_COMPDUMP.zwc" "$ZSH_COMPDUMP" 

# dircolors other/dir_colors
export LS_COLORS='no=00:rs=0:fi=00:di=01;34:ln=36:mh=04;36:pi=04;01;36:so=04;33:do=04;01;36:bd=01;33:cd=33:or=31:mi=01;37;41:ex=01;36:su=01;04;37:sg=01;04;37:ca=01;37:tw=01;37;44:ow=01;04;34:st=04;37;44:*.7z=01;32:*.ace=01;32:*.alz=01;32:*.arc=01;32:*.arj=01;32:*.bz=01;32:*.bz2=01;32:*.cab=01;32:*.cpio=01;32:*.deb=01;32:*.dz=01;32:*.ear=01;32:*.gz=01;32:*.jar=01;32:*.lha=01;32:*.lrz=01;32:*.lz=01;32:*.lz4=01;32:*.lzh=01;32:*.lzma=01;32:*.lzo=01;32:*.rar=01;32:*.rpm=01;32:*.rz=01;32:*.sar=01;32:*.t7z=01;32:*.tar=01;32:*.taz=01;32:*.tbz=01;32:*.tbz2=01;32:*.tgz=01;32:*.tlz=01;32:*.txz=01;32:*.tz=01;32:*.tzo=01;32:*.tzst=01;32:*.war=01;32:*.xz=01;32:*.z=01;32:*.Z=01;32:*.zip=01;32:*.zoo=01;32:*.zst=01;32:*.aac=32:*.au=32:*.flac=32:*.m4a=32:*.mid=32:*.midi=32:*.mka=32:*.mp3=32:*.mpa=32:*.mpeg=32:*.mpg=32:*.ogg=32:*.opus=32:*.ra=32:*.wav=32:*.3des=01;35:*.aes=01;35:*.gpg=01;35:*.pgp=01;35:*.doc=32:*.docx=32:*.dot=32:*.odg=32:*.odp=32:*.ods=32:*.odt=32:*.otg=32:*.otp=32:*.ots=32:*.ott=32:*.pdf=32:*.ppt=32:*.pptx=32:*.xls=32:*.xlsx=32:*.app=01;36:*.bat=01;36:*.btm=01;36:*.cmd=01;36:*.com=01;36:*.exe=01;36:*.reg=01;36:*~=02;37:*.bak=02;37:*.log=02;37:*.log=02;37:*.old=02;37:*.orig=02;37:*.swo=02;37:*.swp=02;37:*.lock=02;37:*.DS_Store=02;37:*.gitignore=02;37:*.dockerignore=02;37:*.bmp=32:*.cgm=32:*.dl=32:*.dvi=32:*.emf=32:*.eps=32:*.gif=32:*.jpeg=32:*.jpg=32:*.mng=32:*.pbm=32:*.pcx=32:*.pgm=32:*.png=32:*.PNG=32:*.ppm=32:*.pps=32:*.ppsx=32:*.ps=32:*.svg=32:*.svgz=32:*.tga=32:*.tif=32:*.tiff=32:*.xbm=32:*.xcf=32:*.xpm=32:*.xwd=32:*.xwd=32:*.yuv=32:*.anx=32:*.asf=32:*.avi=32:*.axv=32:*.flc=32:*.fli=32:*.flv=32:*.gl=32:*.m2v=32:*.m4v=32:*.mkv=32:*.mov=32:*.MOV=32:*.mp4=32:*.mpeg=32:*.mpg=32:*.nuv=32:*.ogm=32:*.ogv=32:*.ogx=32:*.qt=32:*.rm=32:*.rmvb=32:*.swf=32:*.vob=32:*.webm=32:*.wmv=32:*.cfg=35:*.conf=35:*.config=35:*.ini=35:*.json=35:*.tml=35:*.toml=35:*.xml=35:*.yaml=35:*.yml=35:*Dockerfile=35:*.properties=35:*.txt=35:*.htm=35:*.html=35:*.csv=35:*.md=35:*.css=32:*.sass=32:*.scss=32:*.c=32:*.cpp=32:*.h=32:*.dart=32:*.diff=32:*.patch=32:*.go=32:*.dot=32:*.groovy=32:*.gradle=32:*.ipynb=32:*.java=32:*.js=32:*.jsx=32:*.ts=32:*.tsx=32:*.kt=32:*.kts=32:*.lua=32:*.php=32:*.py=32:*.rb=32:*.rs=32:*.sh=32:*.bash=32:*.zsh=32:*.fish=32:*.sql=32:*.swift=32:*.vim=32:*README.md=04;33:*CHANGELOG.md=04;33:*INSTALL.md=04;33:'
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
HISTFILE=$ZDOTDIR/.zsh_history
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

bindkey '^[[1;3C' forward-word
bindkey '^[[1;3D' backward-word