# setup macos

### brew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git p7zip bat eza fd ripgrep node container sing-box
brew install font-jetbrains-mono-nerd-font zed ghostty
brew install intellij-idea
```

### fish

```sh
brew install fish
echo /opt/homebrew/bin/fish | sudo tee -a /etc/shells
chsh -s /opt/homebrew/bin/fish
```

### macos options

```sh
# defaults delete com.apple.dock tilesize; killall Dock     # reset tile size
defaults write com.apple.finder _FXShowPosixPathInTitle -bool true
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true
defaults write com.apple.Dock autohide-delay -float 0       # show hidden dock faster
defaults write -g ApplePressAndHoldEnabled -bool false      # hold will repeat keys
```

### sudo

```sh
sudo sed -i -e 's/^%admin\t.*/%admin\t\tALL = (ALL) NOPASSWD:ALL/' /etc/sudoers
```

### ssh

```sh
/usr/bin/ssh-add --apple-use-keychain ~/.ssh/id_github

mkdir -p ~/.cache/ssh
```

~/.ssh/config

```
Host github.com
  User git
  IdentitiesOnly yes
  IdentityFile ~/.ssh/id_github
  AddKeysToAgent yes
  ForwardAgent yes

Host *
  IdentityFile ~/.ssh/id_ed25519
  ForwardAgent yes
  ControlMaster auto
  ControlPath ~/.cache/ssh/%r@%h-%p
  ControlPersist 600
```

### git

```sh
git config --global user.name neo
git config --global user.email "1100909+neowu@users.noreply.github.com"
git config --global user.signingkey "$(cat ~/.ssh/id_github.pub)"

git config --global color.ui auto
git config --global core.autocrlf false
git config --global pull.rebase true

git config --global gpg.format ssh
git config --global gpg.ssh.allowedSignersFile ~/.ssh/allowed_signers
git config --global commit.gpgsign true

git config --global init.defaultBranch main

mkdir -p ~/.config/git
mv ~/.gitconfig ~/.config/git/config

echo "$(git config --get user.email) namespaces=\"git\" $(git config --get user.signingkey)" > ~/.ssh/allowed_signers
```

### rust

```sh
brew install rustup
rustup install stable
rustup component add rust-analyzer
rustup toolchain install nightly # install rustfmt
```

### setup apple container

```
sudo container system dns create test
```
