from geolite2 import geolite2
import sys
# IPから緯度経度検索プログラム
import ip_to_lati_longi

# shell scriptによって並び替えられたsecureデータからIPを配列に格納
ip=[]
ip_splited=[]
fp = open('./securelog/ip_secure_sorted.txt', 'r')
for line in fp.readlines():
  line = line.strip() #前後空白削除
  # line = line.replace('\n','') #末尾の\nの削除
  # line.split()
  line = line.split(",") #分割
  ip.append(line)
fp.close()
# これで出現回数とIPがipの配列に入った
# print(ip)
# print(ip[1][0])

# カンマ区切りの配列を、区切り文字でsplitして配列に格納
add=0
for add in range(len(ip)):
  # print(ip[add][0])
  ip_splited.append(ip[add][0].split())

ip_add=0
# これでIPだけ取れる
# print(ip_splited[4][1])

# IPから緯度経度情報
# geo_r= geolite2.reader()
# res = geo_r.get(ip_splited[4][1])
geo_r= geolite2.reader()

# IPの分だけ緯度経度情報が欲しい
# lati_longは緯度経度情報リスト
lati_long=[]
for ip_add in range(len(ip_splited)):
  # res = geo_r.get(ip_splited[ip_add][1])
  # ip_addはIPアドレスの個数
  # 空の配列はスキップ
  if not len(ip_splited[ip_add])==2:
    ip_add+=1
  lati_long_pair=ip_to_lati_longi.ip_convert(ip_splited[ip_add][1])
  # Noneと返ってくる緯度経度情報は無視
  if lati_long_pair!='None':
    lati_long.append(lati_long_pair)

  ip_add+=1
print(lati_long)

