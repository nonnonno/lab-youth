# lab-youth
 
 This is a tool for visualising security log.
 Data used in this tool is supposed to be CentOS in /var/log/secure.

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


## geoip.py

This program processes sshd_logs to translate ip_addresses into latitude and longitude using ip_to_lati_longi.py.  
ip_addresses data are pre-proceeded by ```/securelog/ip.sh```.   
Please rename the file name in line10, 55.

## ip_to_lati_longi.py

This just changes ip addresses into latitude and longitude and is not necessary for this tool.

## server-test/simpleserver.py

```
python simpleserver.py
```
standup local server showing index.html.

## index.html

This is a map has pins indicating the number of accesses.
