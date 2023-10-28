ZSH_COMPDUMP="${XDG_CACHE_HOME:-$HOME/.cache}/zcompdump"
autoload -Uz compinit && compinit -i -d "${ZSH_COMPDUMP}"
[[ "$ZSH_COMPDUMP.zwc" -nt "$ZSH_COMPDUMP" ]] || zcompile -R -- "$ZSH_COMPDUMP.zwc" "$ZSH_COMPDUMP" 

# refer to https://github.com/sharkdp/vivid, "vivid -m 8-bit generate nord"
export LS_COLORS='ln=1;38;5;144:no=0;38;5;240:tw=0:di=1;38;5;109:ca=0:or=1;38;5;255;48;5;131:pi=1;38;5;222;48;5;239:fi=0;38;5;240:so=1;38;5;139;48;5;239:sg=0:su=0:mh=0:bd=1;38;5;222;48;5;239:ex=1;38;5;173:do=1;38;5;139;48;5;239:*~=0;38;5;239:st=0:mi=1;38;5;255;48;5;131:rs=0;38;5;240:cd=1;38;5;222;48;5;239:ow=0:*.d=0;38;5;144:*.c=0;38;5;144:*.z=1;38;5;109:*.m=0;38;5;144:*.p=0;38;5;144:*.a=0;38;5;173:*.o=0;38;5;239:*.r=0;38;5;144:*.h=0;38;5;144:*.t=0;38;5;144:*.bz=1;38;5;109:*.sh=0;38;5;144:*.di=0;38;5;144:*.fs=0;38;5;144:*.gz=1;38;5;109:*.as=0;38;5;144:*.el=0;38;5;144:*.py=0;38;5;144:*.hh=0;38;5;144:*.js=0;38;5;144:*.td=0;38;5;144:*.bc=0;38;5;239:*.ps=0;38;5;139:*.xz=1;38;5;109:*.hi=0;38;5;239:*.la=0;38;5;239:*.ll=0;38;5;144:*.go=0;38;5;144:*.ui=0;38;5;139:*.cp=0;38;5;144:*.rb=0;38;5;144:*.cs=0;38;5;144:*.cc=0;38;5;144:*.7z=1;38;5;109:*.rm=0;38;5;139:*.ml=0;38;5;144:*.vb=0;38;5;144:*.pp=0;38;5;144:*.hs=0;38;5;144:*.cr=0;38;5;144:*.kt=0;38;5;144:*.rs=0;38;5;144:*.gv=0;38;5;144:*.ex=0;38;5;144:*.jl=0;38;5;144:*.ko=0;38;5;173:*.pl=0;38;5;144:*.md=0;38;5;139:*.lo=0;38;5;239:*.pm=0;38;5;144:*.mn=0;38;5;144:*.nb=0;38;5;144:*css=0;38;5;144:*.so=0;38;5;173:*.ts=0;38;5;144:*.wv=0;38;5;139:*.tar=1;38;5;109:*.dot=0;38;5;144:*.iso=1;38;5;109:*.pro=0;38;5;144:*.rpm=1;38;5;109:*.tex=0;38;5;144:*.bin=1;38;5;109:*.dmg=1;38;5;109:*.htm=0;38;5;139:*.inl=0;38;5;144:*.ppt=0;38;5;139:*.pod=0;38;5;144:*.aif=0;38;5;139:*.mp3=0;38;5;139:*.rst=0;38;5;139:*.gvy=0;38;5;144:*.swf=0;38;5;139:*.ico=0;38;5;139:*.awk=0;38;5;144:*.pyc=0;38;5;239:*.ind=0;38;5;239:*.rar=1;38;5;109:*.xls=0;38;5;139:*.clj=0;38;5;144:*.gif=0;38;5;139:*.deb=1;38;5;109:*.cgi=0;38;5;144:*.bsh=0;38;5;144:*.pkg=1;38;5;109:*.cxx=0;38;5;144:*.mpg=0;38;5;139:*.sxw=0;38;5;139:*.epp=0;38;5;144:*.bcf=0;38;5;239:*.asa=0;38;5;144:*.odp=0;38;5;139:*.pgm=0;38;5;139:*.def=0;38;5;144:*.kts=0;38;5;144:*.zst=1;38;5;109:*.arj=1;38;5;109:*.lua=0;38;5;144:*.blg=0;38;5;239:*.erl=0;38;5;144:*.fsx=0;38;5;144:*.mid=0;38;5;139:*.pbm=0;38;5;139:*.mov=0;38;5;139:*.log=0;38;5;239:*.sty=0;38;5;239:*.ppm=0;38;5;139:*.zsh=0;38;5;144:*.pyd=0;38;5;239:*.toc=0;38;5;239:*.xcf=0;38;5;139:*.fls=0;38;5;239:*.bst=0;38;5;139:*.ilg=0;38;5;239:*.png=0;38;5;139:*.bib=0;38;5;139:*.m4a=0;38;5;139:*.pyo=0;38;5;239:*.nix=0;38;5;139:*.ini=0;38;5;139:*.mir=0;38;5;144:*.odt=0;38;5;139:*.sbt=0;38;5;144:*.fon=0;38;5;139:*.otf=0;38;5;139:*.svg=0;38;5;139:*.pid=0;38;5;239:*.apk=1;38;5;109:*.idx=0;38;5;239:*.bz2=1;38;5;109:*.csx=0;38;5;144:*.ps1=0;38;5;144:*.h++=0;38;5;144:*.wav=0;38;5;139:*.psd=0;38;5;139:*.wmv=0;38;5;139:*.bat=0;38;5;173:*.bmp=0;38;5;139:*.aux=0;38;5;239:*.dpr=0;38;5;144:*.htc=0;38;5;144:*.ltx=0;38;5;144:*.doc=0;38;5;139:*.img=1;38;5;109:*.xlr=0;38;5;139:*.ttf=0;38;5;139:*.sxi=0;38;5;139:*.tgz=1;38;5;109:*TODO=1;38;5;139:*.m4v=0;38;5;139:*.elm=0;38;5;144:*.hxx=0;38;5;144:*.bbl=0;38;5;239:*.php=0;38;5;144:*.yml=0;38;5;139:*.exs=0;38;5;144:*.sql=0;38;5;144:*.tml=0;38;5;139:*.zip=1;38;5;109:*.vim=0;38;5;144:*.c++=0;38;5;144:*.tbz=1;38;5;109:*.exe=0;38;5;173:*.flv=0;38;5;139:*.mkv=0;38;5;139:*.vob=0;38;5;139:*.ics=0;38;5;139:*.hpp=0;38;5;144:*.ipp=0;38;5;144:*.tsx=0;38;5;144:*.dll=0;38;5;173:*.git=0;38;5;239:*hgrc=0;38;5;144:*.jar=1;38;5;109:*.rtf=0;38;5;139:*.bak=0;38;5;239:*.eps=0;38;5;139:*.ods=0;38;5;139:*.fnt=0;38;5;139:*.pdf=0;38;5;139:*.vcd=1;38;5;109:*.csv=0;38;5;139:*.com=0;38;5;173:*.kex=0;38;5;139:*.dox=0;38;5;144:*.tcl=0;38;5;144:*.txt=0;38;5;139:*.bag=1;38;5;109:*.mp4=0;38;5;139:*.fsi=0;38;5;144:*.xmp=0;38;5;139:*.xml=0;38;5;139:*.cpp=0;38;5;144:*.cfg=0;38;5;139:*.pps=0;38;5;139:*.wma=0;38;5;139:*.ogg=0;38;5;139:*.mli=0;38;5;144:*.swp=0;38;5;239:*.inc=0;38;5;144:*.jpg=0;38;5;139:*.avi=0;38;5;139:*.tmp=0;38;5;239:*.out=0;38;5;239:*.pas=0;38;5;144:*.tif=0;38;5;139:*.make=0;38;5;144:*.toml=0;38;5;139:*.purs=0;38;5;144:*.psm1=0;38;5;144:*.docx=0;38;5;139:*.lock=0;38;5;239:*.xlsx=0;38;5;139:*.jpeg=0;38;5;139:*.fish=0;38;5;144:*.epub=0;38;5;139:*.diff=0;38;5;144:*.rlib=0;38;5;239:*.h264=0;38;5;139:*.psd1=0;38;5;144:*.java=0;38;5;144:*.conf=0;38;5;139:*.hgrc=0;38;5;144:*.dart=0;38;5;144:*.yaml=0;38;5;139:*.bash=0;38;5;144:*.less=0;38;5;144:*.tbz2=1;38;5;109:*.opus=0;38;5;139:*.tiff=0;38;5;139:*.json=0;38;5;139:*.webm=0;38;5;139:*.orig=0;38;5;239:*.html=0;38;5;139:*.pptx=0;38;5;139:*.lisp=0;38;5;144:*.mpeg=0;38;5;139:*.flac=0;38;5;139:*.shtml=0;38;5;139:*.swift=0;38;5;144:*.cabal=0;38;5;144:*.cache=0;38;5;239:*passwd=0;38;5;139:*.xhtml=0;38;5;139:*.scala=0;38;5;144:*.toast=1;38;5;109:*.patch=0;38;5;144:*README=0;38;5;139:*.mdown=0;38;5;139:*.cmake=0;38;5;144:*shadow=0;38;5;139:*.ipynb=0;38;5;144:*.class=0;38;5;239:*.dyn_o=0;38;5;239:*LICENSE=0;38;5;139:*TODO.md=1;38;5;139:*.flake8=0;38;5;144:*.ignore=0;38;5;144:*.groovy=0;38;5;144:*.gradle=0;38;5;144:*INSTALL=0;38;5;139:*.dyn_hi=0;38;5;239:*COPYING=0;38;5;139:*.matlab=0;38;5;144:*.config=0;38;5;139:*Makefile=0;38;5;144:*setup.py=0;38;5;144:*.desktop=0;38;5;139:*TODO.txt=1;38;5;139:*.gemspec=0;38;5;144:*Doxyfile=0;38;5;144:*COPYRIGHT=0;38;5;139:*.DS_Store=0;38;5;239:*.rgignore=0;38;5;144:*.fdignore=0;38;5;144:*configure=0;38;5;144:*README.md=0;38;5;139:*.kdevelop=0;38;5;144:*.cmake.in=0;38;5;144:*.markdown=0;38;5;139:*.gitignore=0;38;5;144:*SConscript=0;38;5;144:*CODEOWNERS=0;38;5;144:*.gitconfig=0;38;5;144:*Dockerfile=0;38;5;139:*INSTALL.md=0;38;5;139:*SConstruct=0;38;5;144:*.localized=0;38;5;239:*.scons_opt=0;38;5;239:*README.txt=0;38;5;139:*Makefile.am=0;38;5;144:*.gitmodules=0;38;5;144:*.travis.yml=0;38;5;144:*.synctex.gz=0;38;5;239:*INSTALL.txt=0;38;5;139:*Makefile.in=0;38;5;239:*MANIFEST.in=0;38;5;144:*LICENSE-MIT=0;38;5;139:*CONTRIBUTORS=0;38;5;139:*.fdb_latexmk=0;38;5;239:*configure.ac=0;38;5;144:*.applescript=0;38;5;144:*appveyor.yml=0;38;5;144:*.clang-format=0;38;5;144:*LICENSE-APACHE=0;38;5;139:*CMakeCache.txt=0;38;5;239:*.gitattributes=0;38;5;144:*CMakeLists.txt=0;38;5;144:*CONTRIBUTORS.md=0;38;5;139:*CONTRIBUTORS.txt=0;38;5;139:*requirements.txt=0;38;5;144:*.sconsign.dblite=0;38;5;239:*package-lock.json=0;38;5;239:*.CFUserTextEncoding=0;38;5;239'
PS1='%B[%n@%m:%~]%# %b'

# refer to https://zsh.sourceforge.io/Doc/Release/Options.html
# directory
setopt CD_SILENT            # Never print the working directory after a cd (whether explicit or implied with the AUTO_CD option set)
setopt AUTO_PUSHD           # Push the old directory onto the stack on cd.
setopt PUSHD_IGNORE_DUPS    # Do not store duplicates in the stack.
setopt PUSHD_SILENT         # Do not print the directory stack after pushd or popd.
setopt PUSHD_TO_HOME        # Push to home directory when no argument is given.

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

zstyle ':completion:*' matcher-list 'r:|[._-]=* r:|=*' 'l:|=* r:|=*'    # Case-insensitive (all), partial-word, and then substring completion.
zstyle ':completion:*' special-dirs true

zstyle ':completion:*:*:*:*:*' menu select

zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*:cd:*' tag-order local-directories directory-stack path-directories