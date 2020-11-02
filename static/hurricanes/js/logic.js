// Creating map object
var myMap = L.map("map", {
  center: [37.09, -65.71],
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/satellite-v9",
        accessToken: API_KEY
}).addTo(myMap);


var link = "../data/map.geojson"; //"../data/atlData.json";

// Perform a GET request to the query URL
d3.json(link).then(data => {
  console.log(data);
 
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);

});

// function(geoJsonPoint, latlng) {
//   return L.marker(latlng);
// }

var myIcon = L.icon({
  iconUrl: '../images/cat2.png',
  iconSize: [38, 38],
  //iconAnchor: [22, 94],
 // popupAnchor: [-3, -76],
  //shadowUrl: 'my-icon-shadow.png',
   //shadowSize: [68, 95],
  //shadowAnchor: [22, 94]
});

// //L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
L.marker([37.09, -65.71], {icon: myIcon}).addTo(myMap);

function createFeatures(hurricaneData) {

//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake


  var hurricane = L.geoJson(hurricaneData, {
    //if (feature.properties.Event === " L") {
     onEachFeature: function (feature, layer) {
      console.log(feature.geometry.coordinates);
      if (feature.properties.Event === " L") {

        //L.marker(feature.geometry.coordinates, {icon: myIcon});
        console.log(feature.geometry.coordinates);
       layer.bindPopup(feature.properties.Name);
      };

      //layer.bindPopup(feature.properties.Name);
    }
  });
hurricane.addTo(myMap);
};

//   var stormTracks = function(tracks) {
//     for (var i = 0; i < hurricaneData.length; i++) {
//       var track = tracks[0][i];
//     }
//   };
//   var routeLine = new L.polyline(step.points, options);
//   routeLine.addTo(map);
// };
//   function onEachFeature(feature, layer) {
//     console.log(feature.properties.Status);
//     layer.bindPopup(`<p>Name: ${feature.properties.Name}</p><p>Status: 
//     ${feature.properties.Status}</p>`);
//   };

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   // var hurricanes = L.geoJSON(hurricaneData, {
//   //     onEachFeature: onEachFeature,
//   // });

//     var landfall = L.geoJSON(hurricaneData, {
//       onEachFeature: onEachFeature,
//       pointToLayer: (feature, latlng) => {
//         return new L.point(latlng, {
//     //           // radius: feature.properties.mag*30000,
//     //           //   opacity: .9,
//           color: "white",
//     //           // fillColor: getColor(feature.geometry.coordinates[2]),
//     //           // stroke: false,
//     //           // //   weight: 2,
//     //           // fillOpacity: 0.7,
//         });
//       }
//     });

//   // Sending our earthquakes layer to the createMap function
//   createMap(landfall);
// }

// function createMap(landfall) {

//   // Define streetmap and darkmap layers
//   var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/satellite-v9",
//     accessToken: API_KEY
// });

//   var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "dark-v10",
//     accessToken: API_KEY
//   });

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Satellite": satellite,
//     "Dark Map": darkmap
//   };

//   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Hurricanes: landfall
//     // Magnitudes: mags
//   };

//   // Create our map, giving it the satellite and paths layer to display on load
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 3,
//     layers: [satellite, landfall]
//   });

//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);
// }
