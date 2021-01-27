#!/bin/sh

if [ $# != 1 ]; then
    echo "usage: ./username.sh [FILENAME]" >&2
    exit 1
fi

grep Invalid $1 | sed -n '/Invalid user/p' | awk '{print $8}' >> username_$1.txt

sort username_$1.txt| uniq -c | sort -nr >> username_$1_sorted.txt

