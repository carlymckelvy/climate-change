With increasing attention being given to climate change, an analysis of those potential relationships between ocean water temperature changes, carbon dioxide levels and changes over time of all the various categories of storms in the Atlantic Ocean provide an opportunity to frame the data visually. With data from NOAA (National Oceanic and Atmospheric Administration) going back to the 1850's for both ocean temperatures and storm/hurricane data, it provides a unique opportunity to explore such a surprisingly rich and thorough resource. The addition of the carbon dioxide readings starting in the 1950's further layers the assumptions of the effects of those changes on increasing climate variability. 

Various departments from NOAA provided the raw data, and 3 csv files were ultimately used as our source data from which we explored in our Jupyter Notebook. Our data wrangling ultimately involved creating six cleaned and reformatted dataframes that we then loaded into a sqlite database. Our Python Flask-powered API then created six API endpoints.
Javascript was used for our visuals. Made use of Leaflet/Mapbox, Plotly and the Highcharts libraries. Python used for Jupyter Notebook and Flask-powered API.

![landfall map](https://github.com/carlymckelvy/climate-change/blob/main/static/images/Screenshot%20(140).png)
