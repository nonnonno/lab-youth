const geoip = require('/Users/ayano/lab-youth/log_visualization/node_modules/geoip-country/lib/geoip');
let country = geoip.lookup('133.65.65.35');
let range = geoip.pretty(country.range);
//change ip address range format
console.log(country);
console.log(range);
