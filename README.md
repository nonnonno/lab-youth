# lab-youth
 This is a tool for visualising security log.

## securelog/ip.sh

```
"usage: ./ip.sh [SECURELOG_FILENAME]"
```
Using ip.sh, you can extract IP addresses, remove the null data and count the number of accesses from one IP from securelog.  
ip.sh makes ip_[SECURELOG_FILENAME].txt, ip_[SECURELOG_FILENAME]_nullremoved.txt and ip_[SECURELOG_FILENAME]_sorted.txt in the same directory.

## securelog/username.sh

```
"usage: ./username.sh [SECURELOG_FILENAME]"
```
Using username.sh, you can extract the usernames and count how many times the username was used.


## server-test/simpleserver.py

```
python simpleserver.py
```
standup local server showing index.html.

## index.html

This is a map has pins indicating the number of accesses.

## geoip.py

This program processes sshd_logs to translate ip_addresses into latitude and longitude using ip_to_lati_longi.py.  
ip_addresses data are pre-proceeded by ```/securelog/ip.sh```.   
ip.sh extracts the number of accesses from same ip-addresses and omit duplicates.

## ip_to_lati_longi.py

This just changes ip addresses into latitude and longitude.
