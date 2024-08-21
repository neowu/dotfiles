# support verbose git info on fish prompt, 30~50ms worth?

```fish
# check if working dir is dirty
git diff-index --quiet --no-ext-diff --cached HEAD --; and echo clean
# check upstream behind / ahead
git rev-list --count --left-right @{upstream}...HEAD 2>/dev/null | read behind ahead
```

# support python venv?

```fish
set -g VIRTUAL_ENV_DISABLE_PROMPT true

if set -q VIRTUAL_ENV
    set_color magenta
    printf (path basename (path dirname $VIRTUAL_ENV))' '
end
```
