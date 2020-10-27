// Retrieve data from the CSV file and execute everything below
Plotly.d3.csv("./assets/data/oceantemps.csv", function(err, rows){

function unpack(rows, key) {
  return rows.map(function(row) {
    return row[key];
  });
}

var trace = {
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'Value'),
  marker: {},
  type: 'bar',
  xaxis: 'x',
  yaxis: 'y'
};

trace.marker.color = trace.y.map(function (v) {
    return v < 0 ? 'blue' : 'red'});

var data = [trace];

var layout = {
    title: {
        text:'Ocean Temperatures Over Time',
        font: {
          family: 'Arial',
          size: 22,
          align: 'center',
        }
      },
      yaxis: {
        title: {
          text: 'Temperatures in Celsius',
          font: {
            family: 'Arial',
            size: 16,
            color: '#7f7f7f'
          }
        }
      },
  dragmode: 'zoom',
  showlegend: false,
  xaxis: {
    rangeslider: {
		 visible: false
	 }
  }
};

Plotly.newPlot('plot', data, layout);

});

Plotly.d3.csv("./assets/data/c02.csv", function(err, rows){

    function unpack(rows, key) {
      return rows.map(function(row) {
        return row[key];
      });
    }
    
    var trace = {
      x: unpack(rows, 'year'),
      y: unpack(rows, 'monthly_average'),
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

    // var layout = {
        // autosize: false,
        // width: 500,
        // height: 500,
        // xaxis: {
            // title: 'Y-axis Title',
          //   ticktext: ['long label','Very long label','3','label'],
        //     tickvals: [1955, 1960, 1965],
        //     tickmode: 'array',
        //     automargin: true,
        //     titlefont: { size:30 },
        //   },
        // yaxis: {
        //   title: 'Y-axis Title',
        //   ticktext: ['long label','Very long label','3','label'],
        //   tickvals: [300, 350, 400, 450],
        //   tickmode: 'array',
        //   automargin: true,
        //   titlefont: { size:30 },
        // }}

    var layout = {
        title: `Carbon in the Atmosphere`,
        xaxis: {
            rangeslider: {range: ['1958.2027', '2020.7083']},
            type: "date"
        },
        yaxis: {
            title: 'Avg C02 in Atmosphere in Parts Per Million (PPM)',
            autorange: true,
            type: "linear"
        },
    }

    Plotly.newPlot('scatter', data, layout);
});
