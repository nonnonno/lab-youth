from geolite2 import geolite2
# import sys

def ip_convert(ip):
  print(ip)
  geo_r = geolite2.reader()
  res = geo_r.get(ip)
  # pairは緯度経度のペアのリスト
  pair = []
  if res is not None:
    for key,value in res.items():
      
      # print(ip)
      # keyはcity continent coutnry locationとか
      # print(key)
      # valueはgeonameidとか複数の国籍における国名
      for key2,value2 in value.items():  
        if "latitude" in key2 or "longitude" in key2:
          # print("{}: {}".format(key2,value2))
          pair.append(value2)
          if pair and len(pair)>=2:
            return pair
  else:
    return 0
        

if __name__ == '__main__':
  ip_convert("193.239.147.226")