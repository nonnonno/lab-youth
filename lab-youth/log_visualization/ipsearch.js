/**
 * ipsearch.js
 */
/* const geoip = require('geoip-country');*/
const geoip = require('/Users/ayano/lab-youth/log_visualization/node_modules/geoip-country/lib/geoip');
const fs = require('fs');

let buff = fs.readFileSync("./ip.txt", {encoding: "utf-8"}).split(/\n/);
console.log(buff);
console.log(buff.length);
for(let i=0; i<buff.length; i++){
  console.log(i);
  let [count,ip] = buff[i].split(/\t/);
  //console.log("count:"+count);
  let geo = geoip.lookup(ip);
  let country = ( (geo!== null) && ("country" in geo) )?  geo.country:null;
  console.log(country);

  console.log([count, ip, country].join("\t"));
}

