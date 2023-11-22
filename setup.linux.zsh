#!/usr/bin/zsh

if [[ -e "/etc/debian_version" ]]; then
    if [[ ! -e "/etc/apt/sources.list.d/gierens.list" ]]; then    
        wget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | sudo gpg --dearmor -o /etc/apt/keyrings/gierens.gpg
        echo "deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main" | sudo tee /etc/apt/sources.list.d/gierens.list
    fi

    sudo apt-get update && sudo apt-get install -y bat fd-find fzf ripgrep eza 
    sudo ln -sf /usr/bin/fdfind /usr/bin/fd
    sudo ln -sf /usr/bin/batcat /usr/bin/bat
elif [[ -e "/etc/alpine-release" ]]; then
    apk add eza --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community
    sudo apk update && sudo apk add bat fd fzf ripgrep eza 
fi

mkdir -p $HOME/.zsh/plugins $HOME/.cache

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

cp zsh/.zshenv $HOME/.zshenv
cp zsh/*.zsh(D) $HOME/.zsh/
cp zsh/debian.zshrc $HOME/.zsh/.zshrc

# setup git signing
git config --global gpg.ssh.allowedSignersFile ~/.ssh/allowed_signers
echo "$(git config --get user.email) namespaces=\"git\" $(git config --get user.signingkey)" > ~/.ssh/allowed_signers