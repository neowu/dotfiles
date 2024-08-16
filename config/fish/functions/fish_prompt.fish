function fish_prompt
    set -l last_status $status

    # pwd
    set_color $fish_color_cwd
    printf (pwd | string replace $HOME '~')

    # git
    set -g __fish_git_prompt_show_informative_status true
    set -g __fish_git_prompt_showstashstate true
    set -g __fish_git_prompt_showupstream auto
    set -g __fish_git_prompt_char_stateseparator ' '
    set -g __fish_git_prompt_char_cleanstate ''
    set -g __fish_git_prompt_char_stagedstate '󰐕'
    set -g __fish_git_prompt_char_dirtystate '󰈅'
    set -g __fish_git_prompt_showcolorhints true
    set -g __fish_git_prompt_color_branch brblack
    set -g __fish_git_prompt_color_stagedstate yellow
    fish_git_prompt ' %s'

    # command duration
    if test $CMD_DURATION -ge 3000
        set_color yellow
        set elapsed (math -s0 "$CMD_DURATION/3600000"   # hours
                 math -s0 "$CMD_DURATION/60000"%60      # minutes
                 math -s2 "$CMD_DURATION/1000"%60)      # seconds
        if test $elapsed[1] != '0'
            printf " $elapsed[1]h$elapsed[2]m$elapsed[3]s"
        else if test $elapsed[2] != '0'
            printf " $elapsed[2]m$elapsed[3]s"
        else
            printf " $elapsed[3]s"
        end
    end

    # background jobs
    if jobs -q
        set_color yellow
        printf ' '
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
