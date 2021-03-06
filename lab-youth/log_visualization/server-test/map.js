const HEADERS = {
    "Content-Type": "application/json; charset=utf-8",
  }
  const URL = 'http://localhost:8000/'
  var js = {}
  const onAdd = (d) => {
    var js = {
      'date':d
    }
    fetch(URL + 'get_pos', {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(js)
    }).then(res => res.json())
    .then(js => {
      GetMap([js['pos']],[js['count']]);//呼び出してピンに反映
    })
    .catch(err => console.error(err))
  }
  
  let infobox,map;
  function GetMap(lati_longi,count) {
    if(!lati_longi){
      return 
    }
      //Map init
      map = new Microsoft.Maps.Map('#myMap', {
          center: new Microsoft.Maps.Location(47.6149, 122.1941),
          zoom: 2
      });
      let center = map.getCenter();
  
      //********************************************************************
      //infobox
      //********************************************************************
      infobox = new Microsoft.Maps.Infobox(center, {
          visible: false
      });
      infobox.setMap(map);//Add infobox to Map
  
      //********************************************************************
      //PushPin
      //********************************************************************
      //* Create test data *
      //* Create test data * Microsoft.Maps.TestDataGenerator.getLocations(Number of array, Display range)**
  
      lati_longi_cnt=lati_longi[0].length
      console.log("latilongi_length")
      console.log(lati_longi_cnt)
      console.log("cnt_length")
      console.log(count[0].length)
      console.log(count[0][19])
      for (let i=0; i<lati_longi_cnt;i++) {
          //pushpin: Set location
  
          var location = new Microsoft.Maps.Location(lati_longi[0][i][0],lati_longi[0][i][1]);
          let pin = new Microsoft.Maps.Pushpin(location);
          //PushuPin:Create display character for each
          pin.metadata = {
              title: 'Pin ' + i,
              description: '緯度経度[' + lati_longi[0][i] + ']' + '回数' + count[0][i]
          };
  
          Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);        
          map.entities.push(pin); // Add Pushpin to Map
      }
  }
  
  //Pushpin click event
  function pushpinClicked(e) {
      if (e.target.metadata) {
          //Set information of clicked Pushpin
          infobox.setOptions({
              location: e.target.getLocation(),
              title: e.target.metadata.title,
              description: e.target.metadata.description,
              visible: true
          });
      }
  }