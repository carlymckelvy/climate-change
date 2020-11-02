// Retrieve data from the CSV file and execute everything below
Plotly.d3.json("/api/v1.0/ocean_temps", function(err, rows){

    console.log(rows);
  
  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }
  
  var trace = {
    x: unpack(rows, 'year'),
    y: unpack(rows, 'value'),
    marker: {},
    type: 'bar',
    xaxis: 'x',
    yaxis: 'y'
  };
  
  trace.marker.color = trace.y.map(function (v) {
      return v < 0 ? 'blue' : 'red'});
  
  var data = [trace];
  
  var layout = {
      plot_bgcolor: '#181A1B',
      paper_bgcolor: '#181A1B',
      title: {
          text:'Ocean Temperatures Over Time',
          font: {
            family: 'Arial',
            size: 22,
            align: 'center',
            color: '#D1CDC7'
          }
        },
        yaxis: {
          linecolor: '#D1CDC7',
          zerolinecolor: '#D1CDC7',
          gridcolor: '#D1CDC7',
          color: "#D1CDC7",
          title: {
            text: 'Temperature Change (°C)',
            font: {
              family: 'Arial',
              size: 16,
              color: '#D1CDC7'
            }
          }
        },
        xaxis: {
          linecolor: '#D1CDC7',
          gridcolor: '#D1CDC7',
          color: "#D1CDC7"
        },
    dragmode: 'zoom',
    showlegend: false,
  };
  
  Plotly.newPlot('bar', data, layout);  
  });