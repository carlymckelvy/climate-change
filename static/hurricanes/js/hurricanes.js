d3.csv("../data/maxWind.csv", d3.autoType).then((data) => {
    console.log(data);
//});
    // var status = data.Status;
    //     console.log(status);

    //     var defaultID = status[0];
    //         console.log(defaultID);

    // Create empty arrays to hold the storms that match its respective criteria
    var stormTS1850 = [];
    var stormTD1850 = [];
    var stormC11850 = [];
    var stormC21850 = [];
    var stormC31850 = [];
    var stormC41850 = [];
    var stormC51850 = [];

    var stormTS1860 = [];
    var stormTD1860 = [];
    var stormC11860 = [];
    var stormC21860 = [];
    var stormC31860 = [];
    var stormC41860 = [];
    var stormC51860 = [];

    var stormTS1870 = [];
    var stormTD1870 = [];
    var stormC11870 = [];
    var stormC21870 = [];
    var stormC31870 = [];
    var stormC41870 = [];
    var stormC51870 = [];

    var stormTS1880 = [];
    var stormTD1880 = [];
    var stormC11880 = [];
    var stormC21880 = [];
    var stormC31880 = [];
    var stormC41880 = [];
    var stormC51880 = [];

    var stormTS1890 = [];
    var stormTD1890 = [];
    var stormC11890 = [];
    var stormC21890 = [];
    var stormC31890 = [];
    var stormC41890 = [];
    var stormC51890 = [];

    var stormTS1900 = [];
    var stormTD1900 = [];
    var stormC11900 = [];
    var stormC21900 = [];
    var stormC31900 = [];
    var stormC41900 = [];
    var stormC51900 = [];

    var stormTS1910 = [];
    var stormTD1910 = [];
    var stormC11910 = [];
    var stormC21910 = [];
    var stormC31910 = [];
    var stormC41910 = [];
    var stormC51910 = [];

    var stormTS1920 = [];
    var stormTD1920 = [];
    var stormC11920 = [];
    var stormC21920 = [];
    var stormC31920 = [];
    var stormC41920= [];
    var stormC51920 = [];

    var stormTS1930 = [];
    var stormTD1930 = [];
    var stormC11930 = [];
    var stormC21930 = [];
    var stormC31930 = [];
    var stormC41930 = [];
    var stormC51930 = [];

    var stormTS1940 = [];
    var stormTD1940 = [];
    var stormC11940 = [];
    var stormC21940 = [];
    var stormC31940 = [];
    var stormC41940 = [];
    var stormC51940 = [];

    var stormTS1950 = [];
    var stormTD1950 = [];
    var stormC11950 = [];
    var stormC21950 = [];
    var stormC31950 = [];
    var stormC41950 = [];
    var stormC51950 = [];

    var stormTS1960 = [];
    var stormTD1960 = [];
    var stormC11960 = [];
    var stormC21960 = [];
    var stormC31960 = [];
    var stormC41960 = [];
    var stormC51960 = [];

    var stormTS1970 = [];
    var stormTD1970 = [];
    var stormC11970 = [];
    var stormC21970 = [];
    var stormC31970 = [];
    var stormC41970 = [];
    var stormC51970 = [];

    var stormTS1980 = [];
    var stormTD1980 = [];
    var stormC11980 = [];
    var stormC21980 = [];
    var stormC31980 = [];
    var stormC41980 = [];
    var stormC51980 = [];

    var stormTS1990 = [];
    var stormTD1990 = [];
    var stormC11990 = [];
    var stormC21990 = [];
    var stormC31990 = [];
    var stormC41990 = [];
    var stormC51990 = [];

    var stormTS2000 = [];
    var stormTD2000 = [];
    var stormC12000 = [];
    var stormC22000 = [];
    var stormC32000 = [];
    var stormC42000 = [];
    var stormC52000 = [];

    var stormTS2010 = [];
    var stormTD2010 = [];
    var stormC12010 = [];
    var stormC22010 = [];
    var stormC32010 = [];
    var stormC42010 = [];
    var stormC52010 = [];

    // Loop through each row to determine which array that storm should be added to
    var x_axis = data.map(row => {
        
        if (row.Year < 1860) {
            if (row.Status === ' TS') {
                stormTS1850.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1850.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11850.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21850.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31850.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41850.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51850.push(row.ID)
            }
        }
        // else if (row.Status === ' TD')
        //     stormTD.push(row.ID)
            
        });
        console.log(stormTS1850);
        console.log(stormTD1850);
        console.log(stormC11850);
        console.log(stormC21850);
        console.log(stormC31850);
        console.log(stormC41850);
        console.log(stormC51850);
       // console.log(stormTS.length);


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
                    sequence: [stormTD1850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
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
                    sequence: [stormTS1850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
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
                    sequence: [stormC11850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
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
                    sequence: [stormC21850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
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
                    sequence: [stormC31850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
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
                    sequence: [stormC41850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
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
                    sequence: [stormC51850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
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
