# lab-youth
 This is a tool for visualising security log.

## simpleserver.py

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
