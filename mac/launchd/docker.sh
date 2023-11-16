#!/bin/bash
VM=debian
SOCK=/Users/neo/.tart/vms/$VM/docker.sock

_term() { 
    echo "$(date -Iseconds) shutdown vm, name=$VM"
    ssh -tt $VM sudo poweroff
    if [ "$PID" ]; then
        wait $PID
        echo "$(date -Iseconds) vm stopped"
    fi
}

trap _term SIGTERM

echo "$(date -Iseconds) start vm, name=$VM"
/opt/homebrew/bin/tart run --no-graphics --dir=neo:/Users/neo $VM & 
PID=$!

wait $PID
echo "$(date -Iseconds) docker service ended"
