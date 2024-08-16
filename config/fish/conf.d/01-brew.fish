not command -q /opt/homebrew/bin/brew; and return

/opt/homebrew/bin/brew shellenv | source

if status is-interactive
    abbr bu 'brew update && brew upgrade && brew cleanup'
    abbr bl 'brew leaves | xargs brew deps --formula --installed --for-each'
end
