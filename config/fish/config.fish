status is-interactive; or exit

if command -q /opt/homebrew/bin/brew
    /opt/homebrew/bin/brew shellenv | source

    abbr bu 'brew update && brew upgrade && brew cleanup'
    abbr bl 'brew leaves | xargs brew deps --formula --installed --for-each'
end

if command -q bat
    set -x BAT_THEME Nord
    set -x MANPAGER "sh -c 'col -bx | bat -l man -p'"

    abbr cat 'bat -pp'
end

if command -q eza
    # refer to https://github.com/eza-community/eza/blob/main/src/theme/lsc.rs, ui_styles.rs
    set -x EZA_COLORS 'uu=2;37:gu=2;37:uw=96:ur=96:ue=96:ux=96:gr=36:gw=36:gx=36:tr=34:tw=34:tx=34:nb=32:nk=32:nm=33:ng=31:nt=31:da=34'

    set -x LS_COLORS 'no=00:rs=0:fi=00:di=01;34:ln=36:mh=04;36:pi=04;01;36:so=04;33:do=04;01;36:bd=01;33:cd=33:or=31:mi=01;37;41:ex=01;36:su=01;04;37:sg=01;04;37:ca=01;37:tw=01;37;44:ow=01;04;34:st=04;37;44:*.7z=01;32:*.tar=01;32:*.gz=01;32:*.bz2=01;32:*.lz=01;32:*.xz=01;32:*.zip=01;32:*.jar=01;32:*.rar=01;32:*.aac=32:*.flac=32:*.mid=32:*.mp3=32:*.ogg=32:*.wav=32:*.doc=32:*.docx=32:*.pdf=32:*.ppt=32:*.pptx=32:*.xls=32:*.xlsx=32:*~=02;37:*.bak=02;37:*.log=02;37:*.old=02;37:*.orig=02;37:*.swo=02;37:*.swp=02;37:*.lock=02;37:*.DS_Store=02;37:*.gitignore=02;37:*.dockerignore=02;37:*.bmp=35:*.gif=35:*.jpeg=35:*.jpg=35:*.png=35:*.ps=35:*.svg=35:*.tif=35:*.tiff=35:*.avi=01;35:*.mkv=01;35:*.mov=01;35:*.mp4=01;35:*.mpeg=01;35:*.mpg=01;35:*.qt=01;35:*.webm=01;35:*.wmv=01;35'

    abbr l 'eza -la'
    abbr ls eza
    abbr ll 'eza -l'
    abbr lt 'eza -Ta --git-ignore'
end

set -x XDG_DATA_HOME $HOME/.local/share

set -x LESSHISTFILE $XDG_DATA_HOME/lesshst
set -x GRADLE_USER_HOME $XDG_DATA_HOME/gradle

set -x RUSTUP_HOME $XDG_DATA_HOME/rustup
set -x CARGO_HOME $XDG_DATA_HOME/cargo
fish_add_path -g $CARGO_HOME/bin

set -x CDPATH $HOME/depot $HOME/projects

abbr ... ../../
abbr .... ../../../

abbr lg lazygit
