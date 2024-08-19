function fish_prompt
    set -l last_status $status

    # pwd
    set_color $fish_color_cwd

    set -l git_root (command git --no-optional-locks rev-parse --show-toplevel 2>/dev/null)
    set -l cwd
    if string length -q -- $git_root
        set -l segments (string split -r -m1 -- / $git_root)
        set cwd (string replace -- $git_root "$segments[1]/:" $PWD)
        set cwd (prompt_pwd --full-length-dirs=2 -- $cwd | string replace -- : "$(set_color magenta)$segments[2]$(set_color $fish_color_cwd)")
    else
        set cwd (prompt_pwd --full-length-dirs=2)
    end
    printf $cwd

    # git
    set -g __fish_git_prompt_show_informative_status true
    set -g __fish_git_prompt_char_cleanstate ''
    set -g __fish_git_prompt_char_stateseparator ' '
    set -g __fish_git_prompt_char_upstream_prefix ' '
    set -g __fish_git_prompt_char_stagedstate '󰐕'
    set -g __fish_git_prompt_char_dirtystate '󰈅'

    set -g __fish_git_prompt_showcolorhints true
    set -g __fish_git_prompt_color_branch --dim white
    set -g __fish_git_prompt_color_upstream yellow
    fish_git_prompt ' %s'

    # command duration
    if test $CMD_DURATION -ge 3000
        set_color yellow

        set -l hours (math --scale=0 $CMD_DURATION/3600000)
        set -l mins (math --scale=0 $CMD_DURATION/60000 % 60)
        set -l secs (math --scale=1 $CMD_DURATION/1000 % 60)

        set -l elapsed
        test $hours -gt 0 && set -a elapsed $hours"h"
        test $mins -gt 0 && set -a elapsed $mins"m"
        test $secs -gt 0 && set -a elapsed $secs"s"

        printf ' %s' $elapsed
    end

    # background jobs
    if jobs -q
        set_color yellow
        printf ' 󰒓'
    end

    printf '\n'

    # prompt char
    if test $last_status -eq 0
        set_color magenta
    else
        set_color red
    end
    printf '❯ '

    set_color normal
end
