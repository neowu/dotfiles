#!/bin/bash
echo "$(date -Iseconds) add ssh keys to agent"
/usr/bin/ssh-add --apple-load-keychain