# setup macos

## brew
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git p7zip wget
brew install bat eza fd fzf ripgrep 
brew install arc visual-studio-code
brew install orbstack intellij-idea
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
## update highlight color
defaults write -g NSColorSimulateHardwareAccent -bool YES
defaults write -g NSColorSimulatedHardwareEnclosureNumber -int 4
```
