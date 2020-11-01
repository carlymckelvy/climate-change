d3.csv("../data/maxWind.csv", d3.autoType).then((data) => {
    console.log(data);
//});
    // var status = data.Status;
    //     console.log(status);

    //     var defaultID = status[0];
    //         console.log(defaultID);
    var stormTS = [];
    var stormTD = [];
    var stormC1 = [];
    var stormC2 = [];
    var stormC3 = [];
    var stormC4 = [];
    var stormC5 = [];

        var x_axis = data.map(row => {
            
            if (row.Year < 1860) {
                if (row.Status === ' TS') {
                    stormTS.push(row.ID)
                } else if (row.Status === ' TD') {
                    stormTD.push(row.ID)
                } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                    stormC1.push(row.ID)
                } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                    stormC2.push(row.ID)
                }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                    stormC3.push(row.ID)
                }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                    stormC4.push(row.ID)
                }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                    stormC5.push(row.ID)
                }
            }
            else if (row.Status === ' TD')
                stormTD.push(row.ID)
            
        });
        console.log(stormTS);
        console.log(stormTD);
        console.log(stormC1);
        console.log(stormC2);
        console.log(stormC3);
        console.log(stormC4);
        console.log(stormC5);
        console.log(stormTS.length);


        // var corrs = [];
        // for (var i = 0; i < arr1.length - windowPeriod; i++) {
        //     // windows of data to perform correlation on
        //     var win1 = [];
        //     var win2 = [];
        //     for (var j = 0; j < windowPeriod; j++) {
        //     win1.push(arr1[i + j]);
        //     win2.push(arr2[i + j]);
        //     }
        //     // calculate correlation between two arrays
        //     corrs.push(ss.sampleCorrelation(win1, win2));
        // }


    Highcharts.chart('windrace', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Storm Intensity Over Time'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 300,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                "1850-1859", "1860-1869", "1870-1879", "1880-1889",
                "1890-1899", "1900-1909", "1910-1919", "1920-1929",
                "1930-1939", "1940-1949", "1950-1959", "1960-1969",
                "1970-1979", "1980-1989", "1990-1999", "2000-2009",
                "2010-2015"
            ],
            // plotBands: [{ // visualize the weekend
            //     from: 4.5,
            //     to: 6.5,
            //     color: 'rgba(68, 170, 213, .2)'
            // }]
        },
        yAxis: {
            title: {
                text: 'Storm Counts'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ''
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        motion: {
            enabled: true,
            axisLabel: 'Year',
            labels: [
                "1850-1859", "1860-1869", "1870-1879", "1880-1889",
                "1890-1899", "1900-1909", "1910-1919", "1920-1929",
                "1930-1939", "1940-1949", "1950-1959", "1960-1969",
                "1970-1979", "1980-1989", "1990-1999", "2000-2009",
                "2010-2015"
            ],
            series: [0, 1, 2, 3, 4], // The series which holds points to update
            updateInterval: 17,
            magnet: {
                round: 'floor', // ceil / floor / round
                step: 0.02
            }
        },
        series: [{
            name: 'Tropical Depression',
            data: [
                {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        }, {
            name: 'Tropical Storm',
            data: [
                {
                    sequence: [stormTS.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [2]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [9]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [7]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [2]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [3]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [6]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [9]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [2]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        }, {
            name: 'Category 1 Hurricane',
            data: [
                {
                    sequence: [stormC1.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        }, {
            name: 'Category 2 Hurricane',
            data: [
                {
                    sequence: [stormC2.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [5]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [7]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        },
        {
            name: 'Category 3 Hurricane',
            data: [
                {
                    sequence: [stormC3.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [2]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [9]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [7]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [2]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [3]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [6]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [9]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [2]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        },
        {
            name: 'Category 4 Hurricane',
            data: [
                {
                    sequence: [stormC4.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [2]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [9]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [7]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [2]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [3]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [6]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [9]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [2]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        },
        {
            name: 'Category 5 Hurricane',
            data: [
                {
                    sequence: [stormC5.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [2]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [9]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [7]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [2]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [3]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [6]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [9]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [2]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        },

        // , {
        //     name: 'Jane, average',
        //     data: [1, 3, 4, 3, 3, 5, 4]
        // }, {
        //     name: 'John, average',
        //     data: [3, 4, 3, 5, 4, 10, 12]
        //}
    ]
    });
});
