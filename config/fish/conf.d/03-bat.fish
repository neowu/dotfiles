not status is-interactive; or not command -q bat; and return

set -gx BAT_THEME 'Nord'
set -gx MANPAGER "sh -c 'col -bx | bat -l man -p'"

abbr cat 'bat -p'
