#!/usr/bin/zsh
sudo apt-get update && sudo apt-get install -y bat fd-find fzf ripgrep
sudo ln -s /usr/bin/fdfind /usr/bin/fd

# lsd on debian bookworm is still 0.23 yet
wget 'https://github.com/lsd-rs/lsd/releases/download/v1.0.0/lsd_1.0.0_arm64.deb' -O '/tmp/lsd_1.0.0_arm64.deb' &&
    sudo dpkg --install /tmp/lsd_1.0.0_arm64.deb && rm /tmp/lsd_1.0.0_arm64.deb

mkdir -p $HOME/.zsh/plugins/lscolors $HOME/.zsh/functions $HOME/.cache

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
# ignore .config/git, vscode devcontainer/remote handles it 
cp -r .config/lsd ~/.config