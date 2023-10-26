#!/usr/bin/zsh
if [[ ! -e "/etc/apt/sources.list.d/gierens.list" ]]; then    
    wget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | sudo gpg --dearmor -o /etc/apt/keyrings/gierens.gpg
    echo "deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main" | sudo tee /etc/apt/sources.list.d/gierens.list
fi

sudo apt-get update && sudo apt-get install -y bat fd-find fzf ripgrep eza 
sudo ln -sf /usr/bin/fdfind /usr/bin/fd
sudo ln -sf /usr/bin/batcat /usr/bin/bat


mkdir -p $HOME/.zsh/plugins $HOME/.zsh/functions $HOME/.cache

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

if (( $+commands[kubectl] )); then
    kubectl completion zsh > "$HOME/.zsh/functions/_kubectl"
fi

cp zsh/.zshenv $HOME/.zshenv
cp zsh/*.zsh(D) $HOME/.zsh/
cp zsh/debian.zshrc $HOME/.zsh/.zshrc