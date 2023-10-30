# setup macos

## brew
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git p7zip wget
brew install bat eza fd fzf ripgrep 
brew install docker docker-buildx docker-compose colima
brew install arc visual-studio-code
brew install intellij-idea
```

## macos options
```sh
defaults write com.apple.dock tilesize -float 48
defaults write com.apple.finder _FXShowPosixPathInTitle -bool true
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
defaults write com.apple.Dock autohide-delay -float 0     # show hidden dock faster
defaults write com.apple.dock springboard-columns -int 8
defaults write com.apple.dock springboard-rows -int 6
defaults write com.apple.dock ResetLaunchPad -bool true
# update highlight color
defaults write -g NSColorSimulateHardwareAccent -bool YES
defaults write -g NSColorSimulatedHardwareEnclosureNumber -int 4
```

### macos sudo
sudo visudo, add sudo password tiemout in mins
```
Defaults        timestamp_timeout=120
```

### git
```sh
git config --global user.name neo
git config --global user.email "1100909+neowu@users.noreply.github.com"
git config --global user.signingkey "$(cat ~/.ssh/id_github_signing.pub)"

git config --global color.ui auto
git config --global core.autocrlf false

git config --global gpg.format ssh
git config --global gpg.ssh.allowedSignersFile ~/.ssh/allowed_signers
git config --global commit.gpgsign true

echo "$(git config --get user.email) namespaces=\"git\" $(cat $(git config --get user.signingkey))" > ~/.ssh/allowed_signers
```
