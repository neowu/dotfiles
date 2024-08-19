status is-interactive; or return

function multicd
    echo cd (string repeat -n (math (string length -- $argv[1]) - 1) ../)
end
abbr --add dotdot --regex '^\.\.+$' --function multicd

# alt+up
bind \e\e\[A 'cd ..; commandline -f repaint'
# alt+left
bind \eb 'prevd; commandline -f repaint'
# alt+right
bind \ef 'nextd; commandline -f repaint'
