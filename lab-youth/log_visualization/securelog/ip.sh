#!/bin/sh

if [ $# != 1 ]; then
    echo "usage: ./ip.sh [FILENAME]" >&2
    exit 1
fi
grep Invalid $1 | sed -n '/Invalid user/p' | awk '{print $10}'|sed -e 's/[^0-9+.]//g' >> ip_$1.txt

sort ip_$1.txt| uniq -c | sort -r -n >> ip_$1_sorted.txt
