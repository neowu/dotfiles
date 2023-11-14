#!/bin/bash
_terminate() { 
    echo "shutdown tart vm"
    ssh -tt debian sudo shutdown now
}

trap _terminate SIGTERM

/opt/homebrew/bin/tart run --no-graphics --dir=neo:/Users/neo debian & 

rm -f /Users/neo/.tart/vms/debian/docker.sock
ssh -N -L /Users/neo/.tart/vms/debian/docker.sock:/var/run/docker.sock debian & 

child=$! 
wait "$child"
