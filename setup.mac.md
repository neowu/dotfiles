# setup macos

### brew
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git p7zip wget socat
brew install bat eza fd ripgrep httpie

brew install font-jetbrains-mono-nerd-font zed firefox
brew install intellij-idea
```

### macos options
```sh
defaults write com.apple.dock tilesize -float 48
defaults write com.apple.finder _FXShowPosixPathInTitle -bool true
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
defaults write com.apple.Dock autohide-delay -float 0     # show hidden dock faster
defaults write com.apple.dock springboard-columns -int 8
defaults write com.apple.dock springboard-rows -int 6
defaults write com.apple.dock ResetLaunchPad -bool true
# update highlight color
defaults write -g NSColorSimulateHardwareAccent -bool true
defaults write -g NSColorSimulatedHardwareEnclosureNumber -int 4
```

### sudo
```sh
sudo sed -i -e 's/^%admin\t.*/%admin\t\tALL = (ALL) NOPASSWD:ALL/' /etc/sudoers
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

echo "$(git config --get user.email) namespaces=\"git\" $(git config --get user.signingkey)" > ~/.ssh/allowed_signers
```

### rust
```sh
brew install rustup
/opt/homebrew/opt/rustup/bin/rustup-init --no-modify-path
rustup component add rust-analyzer
rustup toolchain install nightly
```

### ~/.ssh/config
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
