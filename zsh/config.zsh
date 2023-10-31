ZSH_COMPDUMP="${XDG_CACHE_HOME:-$HOME/.cache}/zcompdump"
autoload -Uz compinit && compinit -i -d "${ZSH_COMPDUMP}"
[[ "$ZSH_COMPDUMP.zwc" -nt "$ZSH_COMPDUMP" ]] || zcompile -R -- "$ZSH_COMPDUMP.zwc" "$ZSH_COMPDUMP" 

# refer to https://github.com/sharkdp/vivid, "vivid -m 8-bit generate nord"
export LS_COLORS='or=1;38;5;255;48;5;131:sg=0:fi=0;38;5;240:so=1;38;5;139;48;5;239:mh=0:rs=0;38;5;240:*~=0;38;5;239:ow=0:ca=0:bd=1;38;5;222;48;5;239:ex=1;38;5;173:no=0;38;5;240:st=0:su=0:cd=1;38;5;222;48;5;239:tw=0:di=1;38;5;109:mi=1;38;5;255;48;5;131:pi=1;38;5;222;48;5;239:ln=1;38;5;144:do=1;38;5;139;48;5;239:*.p=0;38;5;144:*.r=0;38;5;144:*.o=0;38;5;239:*.t=0;38;5;144:*.m=0;38;5;144:*.a=0;38;5;173:*.c=0;38;5;144:*.z=1;38;5;109:*.h=0;38;5;144:*.d=0;38;5;144:*.cc=0;38;5;144:*.mn=0;38;5;144:*.nb=0;38;5;144:*.rs=0;38;5;144:*.go=0;38;5;144:*.rm=0;38;5;139:*.di=0;38;5;144:*.el=0;38;5;144:*.pp=0;38;5;144:*.bc=0;38;5;239:*.ll=0;38;5;144:*.as=0;38;5;144:*.xz=1;38;5;109:*.cs=0;38;5;144:*.ko=0;38;5;173:*.cr=0;38;5;144:*.js=0;38;5;144:*.ex=0;38;5;144:*.hh=0;38;5;144:*.hs=0;38;5;144:*.wv=0;38;5;139:*.vb=0;38;5;144:*.ts=0;38;5;144:*.gv=0;38;5;144:*.cp=0;38;5;144:*.7z=1;38;5;109:*.hi=0;38;5;239:*.td=0;38;5;144:*.lo=0;38;5;239:*.ps=0;38;5;139:*.py=0;38;5;144:*.kt=0;38;5;144:*css=0;38;5;144:*.so=0;38;5;173:*.la=0;38;5;239:*.sh=0;38;5;144:*.gz=1;38;5;109:*.md=0;38;5;139:*.ml=0;38;5;144:*.ui=0;38;5;139:*.bz=1;38;5;109:*.jl=0;38;5;144:*.rb=0;38;5;144:*.pl=0;38;5;144:*.fs=0;38;5;144:*.pm=0;38;5;144:*.tsx=0;38;5;144:*.def=0;38;5;144:*.bin=1;38;5;109:*.ics=0;38;5;139:*.exe=0;38;5;173:*.pdf=0;38;5;139:*TODO=1;38;5;139:*.out=0;38;5;239:*.sbt=0;38;5;144:*.mp4=0;38;5;139:*.pro=0;38;5;144:*.kex=0;38;5;139:*.eps=0;38;5;139:*.log=0;38;5;239:*.zip=1;38;5;109:*.elm=0;38;5;144:*.mir=0;38;5;144:*.ods=0;38;5;139:*.swp=0;38;5;239:*.idx=0;38;5;239:*.ttf=0;38;5;139:*.csv=0;38;5;139:*.pyd=0;38;5;239:*.fls=0;38;5;239:*.bst=0;38;5;139:*.tex=0;38;5;144:*.deb=1;38;5;109:*.cfg=0;38;5;139:*.gif=0;38;5;139:*.mid=0;38;5;139:*.tml=0;38;5;139:*.htc=0;38;5;144:*.c++=0;38;5;144:*.tgz=1;38;5;109:*.toc=0;38;5;239:*.mp3=0;38;5;139:*.awk=0;38;5;144:*.pgm=0;38;5;139:*.zsh=0;38;5;144:*.rpm=1;38;5;109:*.tmp=0;38;5;239:*.tcl=0;38;5;144:*.fsx=0;38;5;144:*.pbm=0;38;5;139:*.bmp=0;38;5;139:*.txt=0;38;5;139:*.vim=0;38;5;144:*.sty=0;38;5;239:*.cxx=0;38;5;144:*.iso=1;38;5;109:*.rar=1;38;5;109:*.psd=0;38;5;139:*.odt=0;38;5;139:*.hpp=0;38;5;144:*.tbz=1;38;5;109:*.clj=0;38;5;144:*.pyo=0;38;5;239:*.aux=0;38;5;239:*.otf=0;38;5;139:*.blg=0;38;5;239:*.fon=0;38;5;139:*.kts=0;38;5;144:*.wmv=0;38;5;139:*.sxi=0;38;5;139:*.pas=0;38;5;144:*.rtf=0;38;5;139:*.swf=0;38;5;139:*.inc=0;38;5;144:*.epp=0;38;5;144:*.aif=0;38;5;139:*.exs=0;38;5;144:*.bak=0;38;5;239:*.bib=0;38;5;139:*.xmp=0;38;5;139:*.cgi=0;38;5;144:*.mov=0;38;5;139:*.bag=1;38;5;109:*.odp=0;38;5;139:*.ppm=0;38;5;139:*.ilg=0;38;5;239:*.mkv=0;38;5;139:*.jpg=0;38;5;139:*.dll=0;38;5;173:*.ps1=0;38;5;144:*.img=1;38;5;109:*.vcd=1;38;5;109:*.avi=0;38;5;139:*.ppt=0;38;5;139:*.ipp=0;38;5;144:*.fnt=0;38;5;139:*.svg=0;38;5;139:*.png=0;38;5;139:*.wav=0;38;5;139:*.tar=1;38;5;109:*.m4v=0;38;5;139:*.yml=0;38;5;139:*.inl=0;38;5;144:*.bbl=0;38;5;239:*.xlr=0;38;5;139:*.bcf=0;38;5;239:*.doc=0;38;5;139:*.com=0;38;5;173:*.htm=0;38;5;139:*.mpg=0;38;5;139:*.pid=0;38;5;239:*.pkg=1;38;5;109:*.tif=0;38;5;139:*.zst=1;38;5;109:*.fsi=0;38;5;144:*.pyc=0;38;5;239:*.arj=1;38;5;109:*.rst=0;38;5;139:*.cpp=0;38;5;144:*.gvy=0;38;5;144:*.php=0;38;5;144:*.ind=0;38;5;239:*.bz2=1;38;5;109:*.bat=0;38;5;173:*.wma=0;38;5;139:*.xcf=0;38;5;139:*.nix=0;38;5;139:*.apk=1;38;5;109:*.ico=0;38;5;139:*hgrc=0;38;5;144:*.csx=0;38;5;144:*.flv=0;38;5;139:*.sxw=0;38;5;139:*.ogg=0;38;5;139:*.xml=0;38;5;139:*.erl=0;38;5;144:*.vob=0;38;5;139:*.bsh=0;38;5;144:*.dot=0;38;5;144:*.dmg=1;38;5;109:*.asa=0;38;5;144:*.jar=1;38;5;109:*.ltx=0;38;5;144:*.git=0;38;5;239:*.sql=0;38;5;144:*.h++=0;38;5;144:*.xls=0;38;5;139:*.m4a=0;38;5;139:*.pod=0;38;5;144:*.ini=0;38;5;139:*.dox=0;38;5;144:*.dpr=0;38;5;144:*.mli=0;38;5;144:*.pps=0;38;5;139:*.lua=0;38;5;144:*.hxx=0;38;5;144:*.pptx=0;38;5;139:*.rlib=0;38;5;239:*.make=0;38;5;144:*.jpeg=0;38;5;139:*.html=0;38;5;139:*.docx=0;38;5;139:*.webm=0;38;5;139:*.yaml=0;38;5;139:*.json=0;38;5;139:*.lisp=0;38;5;144:*.conf=0;38;5;139:*.bash=0;38;5;144:*.h264=0;38;5;139:*.less=0;38;5;144:*.opus=0;38;5;139:*.psm1=0;38;5;144:*.toml=0;38;5;139:*.orig=0;38;5;239:*.dart=0;38;5;144:*.epub=0;38;5;139:*.diff=0;38;5;144:*.mpeg=0;38;5;139:*.purs=0;38;5;144:*.fish=0;38;5;144:*.lock=0;38;5;239:*.tiff=0;38;5;139:*.tbz2=1;38;5;109:*.hgrc=0;38;5;144:*.flac=0;38;5;139:*.psd1=0;38;5;144:*.xlsx=0;38;5;139:*.java=0;38;5;144:*README=0;38;5;139:*.swift=0;38;5;144:*.ipynb=0;38;5;144:*.patch=0;38;5;144:*.dyn_o=0;38;5;239:*.scala=0;38;5;144:*.toast=1;38;5;109:*.cache=0;38;5;239:*.shtml=0;38;5;139:*passwd=0;38;5;139:*.mdown=0;38;5;139:*.cmake=0;38;5;144:*shadow=0;38;5;139:*.cabal=0;38;5;144:*.class=0;38;5;239:*.xhtml=0;38;5;139:*INSTALL=0;38;5;139:*COPYING=0;38;5;139:*.flake8=0;38;5;144:*LICENSE=0;38;5;139:*.matlab=0;38;5;144:*.gradle=0;38;5;144:*.config=0;38;5;139:*TODO.md=1;38;5;139:*.dyn_hi=0;38;5;239:*.ignore=0;38;5;144:*.groovy=0;38;5;144:*setup.py=0;38;5;144:*.desktop=0;38;5;139:*.gemspec=0;38;5;144:*Doxyfile=0;38;5;144:*TODO.txt=1;38;5;139:*Makefile=0;38;5;144:*COPYRIGHT=0;38;5;139:*.DS_Store=0;38;5;239:*.kdevelop=0;38;5;144:*.markdown=0;38;5;139:*.fdignore=0;38;5;144:*.rgignore=0;38;5;144:*.cmake.in=0;38;5;144:*README.md=0;38;5;139:*configure=0;38;5;144:*README.txt=0;38;5;139:*CODEOWNERS=0;38;5;144:*SConstruct=0;38;5;144:*.gitconfig=0;38;5;144:*.localized=0;38;5;239:*.scons_opt=0;38;5;239:*Dockerfile=0;38;5;139:*INSTALL.md=0;38;5;139:*.gitignore=0;38;5;144:*SConscript=0;38;5;144:*.synctex.gz=0;38;5;239:*.travis.yml=0;38;5;144:*.gitmodules=0;38;5;144:*INSTALL.txt=0;38;5;139:*MANIFEST.in=0;38;5;144:*Makefile.in=0;38;5;239:*Makefile.am=0;38;5;144:*LICENSE-MIT=0;38;5;139:*CONTRIBUTORS=0;38;5;139:*.fdb_latexmk=0;38;5;239:*.applescript=0;38;5;144:*configure.ac=0;38;5;144:*appveyor.yml=0;38;5;144:*.clang-format=0;38;5;144:*LICENSE-APACHE=0;38;5;139:*.gitattributes=0;38;5;144:*CMakeLists.txt=0;38;5;144:*CMakeCache.txt=0;38;5;239:*CONTRIBUTORS.md=0;38;5;139:*.sconsign.dblite=0;38;5;239:*requirements.txt=0;38;5;144:*CONTRIBUTORS.txt=0;38;5;139:*package-lock.json=0;38;5;239:*.CFUserTextEncoding=0;38;5;239'
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