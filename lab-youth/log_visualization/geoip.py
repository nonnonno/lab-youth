from geolite2 import geolite2
 
geo_r= geolite2.reader()
res = geo_r.get("2.2.2.2")
for key,value in res.items():
  print(key)
  for key2,value2 in value.items():
    if key2 == "names":
      for n_key,n_value in value2.items():
        print(" - {}: {}".format(n_key,n_value.encode('utf-8')))
    else:   
      print(" - {}: {}".format(key2,value2))
