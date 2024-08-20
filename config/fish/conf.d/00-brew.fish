status is-interactive; and command -q /opt/homebrew/bin/brew; or return

/opt/homebrew/bin/brew shellenv | source

abbr bu 'brew update && brew upgrade && brew cleanup'
abbr bl 'brew leaves | xargs brew deps --formula --installed --for-each'
