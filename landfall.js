unction createMap(landfall) {

    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
      });
    

// Create a baseMaps object to hold the maplayer
var baseMaps = {
    "Map": streetmap
};

// Create an overlayMaps object to hold the landfalls layer
var overlayMaps = {
    "Landfall Locations": landfall
};

// Create the map object with options
var map = L.map("map", {
    center: [25.03, -77.39],
    zoom: 4,
    layers: [streetmap, landfall]
});

// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(map);

var legend = L.control({
        position: "bottomright"
    });

    legend.onAdd = function() {

        var div = L.DomUtil.create('div', 'info legend'),

        decade = [0, 1900,1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < decade.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(decade[i] + 1) + '"></i> ' +
                decade[i] + (decade[i + 1] ? '&ndash;' + decade[i + 1] + '<br>' : '+');
        }

        return div;
    };
    legend.addTo(map);
 
}
function createMarkers(response) {

// Pull the response data
var locs = response;

// console.log(locs);

// Initialize an array to hold coordinates
var coords = [];

// Loop through the json dictionary
locs.forEach(loc => {
    // For each landfall, create a marker and bind a popup with info
    var coord = L.circle([loc.latitude, loc.longitude],{
    radius: loc.maxwind*300,
    //   opacity: .9,
    color: "white",
    fillColor: getColor(loc.year),
    stroke: false,
    //   weight: 2,
    fillOpacity: 0.7,
} )
    .bindPopup("<h3>Storm Name: " + loc.name +
    "</h3><hr><p>Date: " + loc.date + "</p><p>Max Wind Speed: " + loc.maxwind + 
        "</p><p>Time: " + loc.time + "</p><p>Status: " + loc.status + "</p>");

    // Add the coordinates to the array
    coords.push(coord);
})
  
    // Create a layer group made from the coordinates, pass it into the createMap function
    createMap(L.layerGroup(coords));
  
} 
// Create color function
function getColor(d) {
    return  d > 2010 ? "blue" :
            d > 2000 ? "red" :
            d > 1990 ? "green" :
            d > 1980 ? "orange" :
            d > 1970 ? "purple" :
            d > 1960 ? "darkkhaki" :
            d > 1950 ? "yellow" :
            d > 1940 ? "yellowgreen" :
            d > 1930 ? "chartreuse" :
            d > 1920 ? "darkseagreen" :
            d > 1910 ? "turquoise" :
            d > 1900 ? "cornflowerblue" :
            d > 1950 ? "mediuslateblue" :
            d > 1920 ? "mediumpurple" :
            d > 1910 ? "orchid" :
            d > 1900 ? "paleviolet" :
                    "lightgrey" ;
}

    
  
// Perform an API call to get landfall information. Call createMarkers when complete
d3.json("http://127.0.0.1:5000/api/v1.0/landfall").then(data => createMarkers(data));