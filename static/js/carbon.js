Plotly.d3.json("/api/v1.0/meanco2", function(err, rows){
  
      function unpack(rows, key) {
        return rows.map(function(row) {
          return row[key];
        });
      }
      console.log(rows)
      
      var trace = {
        x: unpack(rows, 'year'),
        y: unpack(rows, 'value'),
        mode: 'markers',
        marker: {
          size: 5,
          color: 'purple'
        },
        type: 'scatter',
        xaxis: 'x',
        yaxis: 'y'
      };
  
      var data = [trace];
  
      var layout = {
          plot_bgcolor: '#181A1B',
          paper_bgcolor: '#181A1B',
          title: {
            text:'Carbon in the Atmosphere',
            font: {
              family: 'Arial',
              size: 22,
              align: 'center',
              color: '#D1CDC7'
            }
          },

          yaxis: {
              linecolor: '#D1CDC7',
              gridcolor: '#D1CDC7',
              color: "#D1CDC7",
              title: 'Avg C02 in Atmosphere in Parts Per Million (PPM)',
              autorange: true,
              type: "linear"
          },
          xaxis: {
            linecolor: '#D1CDC7',
            gridcolor: '#D1CDC7',
            color: "#D1CDC7"
          }
      }
  
      Plotly.newPlot('myChart', data, layout);
  });