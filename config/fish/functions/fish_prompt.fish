function fish_prompt
    set -l last_status $status

    # pwd / git
    set -l git_info (command -q git; and command git rev-parse --show-toplevel --abbrev-ref HEAD 2>/dev/null)
    if string length -q -- $git_info
        set -l repo_path $git_info[1]
        set -l rev $git_info[2]

        set -l cwd (string replace -- $repo_path (path dirname $repo_path)'/'(set_color magenta)(path basename $repo_path)(set_color $fish_color_cwd) $PWD)
        set_color $fish_color_cwd
        printf (prompt_pwd --dir-length=0 $cwd)

        set_color --dim white
        printf " $rev"
        set_color normal
    else
        set_color $fish_color_cwd
        printf (prompt_pwd --dir-length=0)
    end

    # background jobs
    if jobs -q
        set_color yellow
        printf ' ✦'
    end

    # command duration
    if test $CMD_DURATION -ge 1000
        set_color yellow
        printf ' '

        set -l hours (math --scale=0 $CMD_DURATION/3600000)
        set -l mins (math --scale=0 $CMD_DURATION/60000 % 60)
        set -l secs (math --scale=1 $CMD_DURATION/1000 % 60)

        test $hours -gt 0; and printf $hours'h'
        test $mins -gt 0; and printf $mins'm'
        test $secs -gt 0; and printf $secs's'
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
