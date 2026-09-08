#!/usr/bin/env fish
container build -t dev .
container machine create dev --name dev
container machine create dev --name prod
