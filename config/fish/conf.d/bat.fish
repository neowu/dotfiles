status is-interactive; and command -q bat; or return

set -gx BAT_THEME 'Nord'
set -gx MANPAGER "sh -c 'col -bx | bat -l man -p'"

abbr cat 'bat -p'
