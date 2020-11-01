// Retrieve data from the CSV file and execute everything below
Plotly.d3.csv("./assets/data/oceantemps.csv", function(err, rows){

    console.log(rows);
  
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
  
  Plotly.d3.csv("./data/co2_annmean_mlo.csv", function(err, rows){
  
      function unpack(rows, key) {
        return rows.map(function(row) {
          return row[key];
        });
      }
      
      var trace = {
        x: unpack(rows, 'year'),
        y: unpack(rows, 'mean'),
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
          // xaxis: {
          //     rangeslider: {range: ['1958.2027', '2020.7083']},
          //     type: "date"
          // },
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
  
      Plotly.newPlot('scatter', data, layout);
  });
  
    // function makeChart(players) {
      Promise.all([d3.csv("./data/perchangeCo2.csv"), d3.csv("./data/stormpercentChange.csv")]).then(([co2, storms]) => {

        // d3.csv("./assets/data/data.csv").then(healthData => {

          // parse data
          co2.forEach(data => {
            data.year = +data.year;
            data.co2change = +data.co2change;
          });

          storms.forEach(data2 => {
            data2.year = +data2.year;
            data2.stormchange = +data2.stormchange;
          });

        var playerLabels = co2.map(function(d) {
          return d.year;
        });
        var weeksData = co2.map(function(d) {
          return d.co2change;
        });
    
        var playerLabels2 = storms.map(function(d) {
          return d.year;
        });
        var weeksData2 = storms.map(function(d) {
          return d.stormchange;
        });
    
      var chart = new Chart('myChart', {
        type: "line",
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        },
        data: {
          labels: playerLabels,
          datasets: [
            {
              data: weeksData,
              backgroundColor: "pink",
              // fill: false
            }
          ]
        }
      })
      var chart2 = new Chart('myChart2', {
        type: "line",
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        },
        data: {
          labels: playerLabels2,
          datasets: [
            {
              data: weeksData2,
              backgroundColor: "pink",
              // fill: false
            }
          ]
        }
      });

      // function makeChart(players) {
        Promise.all([d3.csv("./data/oceantemps.csv"), d3.csv("./data/co2_annmean_mlo.csv")]).then(([oceantemps, co2]) => {
  
            // parse data
            oceantemps.forEach(data => {
              data.Year = +data.Year;
              data.Value = +data.Value;
            });
  
            co2.forEach(data2 => {
              data2.year = +data2.year;
              data2.mean = +data2.mean;
            });
  
          var playerLabels = oceantemps.map(function(d) {
            return d.Year;
          });
          var weeksData = oceantemps.map(function(d) {
            return d.Value;
          });
      
          var playerLabels2 = co2.map(function(d) {
            return d.year;
          });
          var weeksData2 = co2.map(function(d) {
            return d.mean;
          });

      Highcharts.chart('container', {

        chart: {
          type: 'line'
        },
      
        yAxis: {
          title: {
            text: 'Number of Employees'
          }
        },  yAxis: [{ // Primary yAxis
          labels: {
            format: '°C',
            style: {
              color: Highcharts.getOptions().colors[2]
            }
          },
          title: {
            text: 'Temperature',
            style: {
              color: Highcharts.getOptions().colors[2]
            }
          },
          opposite: true
      
        }, 
        
        { // Secondary yAxis
          gridLineWidth: 0,
          title: {
            text: 'CO2',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          labels: {
            format: 'CO2',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          }
      
        }, { // Tertiary yAxis
          gridLineWidth: 0,
          title: {
            text: 'Ocean Temps',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          labels: {
            format: weeksData,
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          opposite: true
        }],
      
        xAxis: {
          categories: [playerLabels2]
          },

        motion: {
          enabled: true, // bool. Defaults to true
          // labels: playerLabels,
          series: 0, // [int] or int. The series which holds points to update. Defaults to 0
          // startIndex: 1900, // int. The sequence index to start with. Defaults to the last sequence index.
          axisLabel: 'year', // string. Name-attribute of motion slider. Defaults to 'year'
          autoPlay : true, // bool. Defaults to false
          updateInterval: 10, // int. Defaults to 10
          magnet: {
              round: 'floor', // string. Math.round type. ceil / floor / round. Defaults to 'round'
              step: 0.02 // number. Defaults to 0.01
          },
        },

        series: [{
          name: 'CO2',
          yaxis: 1,
          data: weeksData,
        },
        {
          name: 'Ocean Temps',
          type: 'spline',
          yAxis: 2,
          data: weeksData2,
          marker: {
            enabled: false
          },
          dashStyle: 'shortdot',
          tooltip: {
            valueSuffix: ' mb'
          }
        }
      ],
      
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              },
             
            }
          }]
        }
      
      }
    )
    })
  });