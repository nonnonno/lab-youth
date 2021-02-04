from geolite2 import geolite2
 
geo_r= geolite2.reader()
res = geo_r.get("2.2.2.2")
for key,value in res.items():
  # print(key)
  for key2,value2 in value.items():  
      if "latitude" in key2 or "longitude" in key2:
        print("{}: {}".format(key2,value2))
