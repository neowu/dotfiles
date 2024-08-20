function fish_prompt
    set -l last_status $status

    # pwd
    set -l git_root (command -q git; and command git --no-optional-locks rev-parse --show-toplevel 2>/dev/null)
    set -l cwd
    if string length -q -- $git_root
        set cwd (string replace -- $git_root (path dirname $git_root)'/:' $PWD)
        set cwd (prompt_pwd --full-length-dirs=2 -- $cwd | string replace -- ':' (set_color magenta)(path basename $git_root)(set_color $fish_color_cwd))
    else
        set cwd (prompt_pwd --full-length-dirs=2)
    end

    set_color $fish_color_cwd
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
        printf ' '

        set -l hours (math --scale=0 $CMD_DURATION/3600000)
        set -l mins (math --scale=0 $CMD_DURATION/60000 % 60)
        set -l secs (math --scale=1 $CMD_DURATION/1000 % 60)

        test $hours -gt 0; and printf $hours'h'
        test $mins -gt 0; and printf $mins'm'
        test $secs -gt 0; and printf $secs's'
    end

    # background jobs
    if jobs -q
        set_color yellow
        printf ' ✦'
    end

    printf '\n'

    # prompt char
    if test $last_status -eq 0
        set_color magenta
    else
        set_color $fish_color_error
    end
    printf '❯ '

    set_color normal
end
