#!/bin/zsh
mkdir -p $HOME/.zsh/plugins/lscolors $HOME/.zsh/functions

function zcompile_files() {
    local f
    for f; do zcompile -R -- "$f".zwc "$f"; done
}

function update_plugin() {
    local plugin="$1"
    local dir=${plugin##*/}
    if [[ ! -e "$HOME/.zsh/plugins/$dir" ]]; then
        git clone --depth=1 https://github.com/${plugin}.git $HOME/.zsh/plugins/${dir}        
    else
        git -C $HOME/.zsh/plugins/${dir} pull
    fi
}

update_plugin "romkatv/powerlevel10k"

update_plugin "zsh-users/zsh-syntax-highlighting"
zcompile_files $HOME/.zsh/plugins/zsh-syntax-highlighting/{zsh-syntax-highlighting.zsh,highlighters/*/*.zsh}

update_plugin "zsh-users/zsh-autosuggestions"
zcompile_files $HOME/.zsh/plugins/zsh-autosuggestions/{zsh-autosuggestions.zsh,src/**/*.zsh}

if [[ -e $HOME/.zsh/plugins/lscolors/lscolors.plugin.zsh ]]; then
    wget https://raw.githubusercontent.com/trapd00r/LS_COLORS/master/lscolors.sh -O $HOME/.zsh/plugins/lscolors/lscolors.plugin.zsh
    zcompile_files $HOME/.zsh/plugins/lscolors/lscolors.plugin.zsh
fi

cp zsh/.zshenv $HOME/.zshenv
cp zsh/.zshrc zsh/.p10k.zsh $HOME/.zsh/