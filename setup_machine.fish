#!/usr/bin/env fish
cp -r config/fish $HOME/.config/

sudo chsh $USER -s /usr/bin/fish

# sync ssh
mkdir -p /home/$USER/.cache/ssh
ln -s /Users/$USER/.ssh ~/.ssh
