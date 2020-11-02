d3.csv("../static/data/maxWind.csv", d3.autoType).then((data) => {
//d3.json("/api/v1.0/maxwind", d3.autoType).then((data) => {
    console.log(data);
//});

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
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31850.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41850.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51850.push(row.ID)
            }
        } else if (row.Year < 1870) {
            if (row.Status === ' TS') {
                stormTS1860.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1860.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11860.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21860.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31860.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41860.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51860.push(row.ID)
            }
        } else if (row.Year < 1880) {
            if (row.Status === ' TS') {
                stormTS1870.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1870.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11870.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21870.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31870.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41870.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51870.push(row.ID)
            }
        } else if (row.Year < 1890) {
            if (row.Status === ' TS') {
                stormTS1880.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1880.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11880.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21880.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31880.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41880.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51880.push(row.ID)
            }
        } else if (row.Year < 1900) {
            if (row.Status === ' TS') {
                stormTS1890.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1890.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11890.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21890.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31890.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41890.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51890.push(row.ID)
            }
        } else if (row.Year < 1910) {
            if (row.Status === ' TS') {
                stormTS1900.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1900.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11900.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21900.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31900.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41900.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51900.push(row.ID)
            }
        } else if (row.Year < 1920) {
            if (row.Status === ' TS') {
                stormTS1910.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1910.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11910.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21910.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31910.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41910.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51910.push(row.ID)
            }
        } else if (row.Year < 1930) {
            if (row.Status === ' TS') {
                stormTS1920.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1920.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11920.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21920.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31920.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41920.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51920.push(row.ID)
            }
        } else if (row.Year < 1940) {
            if (row.Status === ' TS') {
                stormTS1930.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1930.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11930.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21930.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31930.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41930.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51930.push(row.ID)
            }
        } else if (row.Year < 1950) {
            if (row.Status === ' TS') {
                stormTS1940.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1940.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11940.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21940.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31940.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41940.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51940.push(row.ID)
            }
        } else if (row.Year < 1960) {
            if (row.Status === ' TS') {
                stormTS1950.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1950.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11950.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21950.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31950.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41950.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51950.push(row.ID)
            }
        } else if (row.Year < 1970) {
            if (row.Status === ' TS') {
                stormTS1960.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1960.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11960.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21960.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31960.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41960.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51960.push(row.ID)
            }
        } else if (row.Year < 1980) {
            if (row.Status === ' TS') {
                stormTS1970.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1970.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11970.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21970.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31970.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41970.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51970.push(row.ID)
            }
        } else if (row.Year < 1990) {
            if (row.Status === ' TS') {
                stormTS1980.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1980.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11980.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21980.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31980.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41980.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51980.push(row.ID)
            }
        } else if (row.Year < 2000) {
            if (row.Status === ' TS') {
                stormTS1990.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD1990.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC11990.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC21990.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC31990.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC41990.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC51990.push(row.ID)
            }
        } else if (row.Year < 2010) {
            if (row.Status === ' TS') {
                stormTS2000.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD2000.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC12000.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC22000.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC32000.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC42000.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC52000.push(row.ID)
            }
        } else {
            if (row.Status === ' TS') {
                stormTS2010.push(row.ID)
            } else if (row.Status === ' TD') {
                stormTD2010.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 96) {
                stormC12010.push(row.ID)
            } else if (row.Status === ' HU' && row["Maximum Wind"] < 111) {
                stormC22010.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 131) {
                stormC32010.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] < 156) {
                stormC42010.push(row.ID)
            }else if (row.Status === ' HU' && row["Maximum Wind"] >= 156) {
                stormC52010.push(row.ID)
            }
        }

        },
    );
        console.log(stormTS1860);
        console.log(stormTD1850);
        console.log(stormC11850);
        console.log(stormC21850);
        console.log(stormC31850);
        console.log(stormC41850);
        console.log(stormC51850);

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
            x: 80,
            y: 10,
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
            series: [0, 1, 2, 3, 4, 5, 6], // The series which holds points to update
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
                    sequence: [stormTD1860.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormTD1870.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD1880.length1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormTD1890.length1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormTD1900.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormTD1910.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD1920.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormTD1930.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD1940.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormTD1950.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD1960.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD1970.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD1980.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD1990.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD2000.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTD2010.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        }, {
            name: 'Tropical Storm',
            data: [
                {
                    sequence: [stormTS1850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormTS1860.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormTS1870.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS1880.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormTS1890.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormTS1900.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormTS1910.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS1920.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormTS1930.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS1940.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormTS1950.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS1960.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS1970.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS1980.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS1990.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS2000.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormTS2010.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        }, {
            name: 'Category 1 Hurricane (Winds 75-95 mph)',
            data: [
                {
                    sequence: [stormC11850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC11860.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC11870.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC11880.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC11890.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC11900.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC11910.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC11920.length1]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC11930.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC11940.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC11950.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC11960.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC11970.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC11980.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC11990.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC12000.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC12010.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        }, {
            name: 'Category 2 Hurricane (Winds 96-110 mph)',
            data: [
                {
                    sequence: [stormC21850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC21860.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC21870.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC21880.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC21890.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC21900.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC21910.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC21920.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC21930.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC21940.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC21950.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC21960.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC21970.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC21980.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC21990.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC22000.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC22010.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        },
        {
            name: 'Category 3 Hurricane (Winds 111-130 mph)',
            data: [
                {
                    sequence: [stormC31850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC31860.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC31870.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC31880.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC31890.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC31900.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC31910.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC31920.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC31930.length4]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC31940.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC31950.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC31960.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC31970.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC31980.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC31990.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC32000.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC32010.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        },
        {
            name: 'Category 4 Hurricane (Winds 131-155 mph)',
            data: [
                {
                    sequence: [stormC41850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC41860.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC41870.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC41880.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC41890.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC41900.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC41910.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC41920.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC41930.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC41940.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC41950.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC41960.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC41970.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC41980.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC41990.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC42000.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC42010.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        },
        {
            name: 'Category 5 Hurricane (Winds 156+ mph)',
            data: [
                {
                    sequence: [stormC51850.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC51860.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC51870.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC51880.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC51890.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC51900.length]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC51910.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC51920.length]//, 5, 2, 7, 7, 1, 6, 9, 2, 5, 1]
                }, {
                    sequence: [stormC51930.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC51940.length9]//, 5, 7, 7, 3, 8, 9, 9, 1, 7, 3]
                }, {
                    sequence: [stormC51950.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC51960.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC51970.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC51980.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC51990.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC52000.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }, {
                    sequence: [stormC52010.length]//, 1, 9, 3, 7, 4, 3, 8, 7, 1, 4]
                }
            ]
        },
    ]
    });
});
