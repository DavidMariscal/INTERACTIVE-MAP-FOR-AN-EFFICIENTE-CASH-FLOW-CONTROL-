// Create a map object
var myMap = L.map("map", {
  center: [19.431371,-99.1326349],
  zoom: 4
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);



// importamos la basede datos
var data = "proveedores.json"
var clientes = "clientes.json"

d3.json(data, function(response) {
  //console.log(response);
    // Loop through data
  for (var i = 0; i < response.length; i++) {
    //console.log(response[i].NO);
    //var marker = L.marker([response[i].Lat,response[i].Lon], {
    //  draggable: true,
    //  color:"red",
    //  title: response[i].Nombre
    //}).addTo(myMap);
    
    var marker = L.circle([response[i].Lat,response[i].Lon], {
      color: "red",
      fillColor: "red",
      fillOpacity: 0.25,
      radius: (response[i].MONTO1/7)
    }).addTo(myMap);

    marker.bindPopup(response[i].Nombre+" "+ response[i].MONTO)
  }

  d3.json(clientes, function(response) {
    //console.log(response);
      // Loop through data
    for (var i = 0; i < response.length; i++) {
      //console.log(response[i].NO);
      //var marker = L.marker([response[i].Lat,response[i].Lon], {
      //  draggable: true,
      //  color:"red",
      //  title: response[i].Nombre
      //}).addTo(myMap);
      
      var marker = L.circle([response[i].Lat,response[i].Lon], {
        color: "blue",
        fillColor: "blue",
        fillOpacity: 0.25,
        radius: (response[i].MONTO/20)
      }).addTo(myMap);
  
      marker.bindPopup(response[i].Nombre+" "+ response[i].MONTO)
    }
  
  });

});



