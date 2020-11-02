# Group-Project-2

Project Description

1. Task - tell a story with data visualizations

2. Focus on providing users an interactive means to explore the data themselves

3. 10 min presentation lays out theme, coding approach, data munging techniques and final visualizations (Our website is our presentation!)

Instructions to create website locally:

1. Create a new virtual environment and install the requirements.txt file for packages required  
    - requirements.txt should be in the directory where command will be executed or specify path
    - use "pip install -r requirements.txt" command to install

2. Run the app.py file and have a localhost port open for the HTML to display 

Theme - With increasing attention being given to climate change, an analysis of those potential relationships between ocean water temperature changes, carbon dioxide levels and changes over time of all the various categories of storms in the Atlantic Ocean provide an opportunity to frame the data visually. With data from NOAA (National Oceanic and Atmospheric Administration) going back to the 1850's for both ocean temperatures and storm/hurricane data, it provides a unique opportunity to explore such a surprisingly rich and thorough resource. The addition of the carbon dioxide readings starting in the 1950's further layers the assumptions of the effects of those changes on increasing climate variability. 

Data Munging - Various departments from NOAA provided the raw data, and 3 csv files were ultimately used as our source data from which we explored in our Jupyter Notebook. Our data wrangling ultimately involved creating six cleaned and reformatted dataframes that we then loaded into a sqlite database. Our Python Flask-powered API then created six API endpoints.

Coding Approach - NEED SOME INSPIRATION!!!

Visualizations - actual visuals and text

Carbon Data - Background (from NOAA website//https://www.esrl.noaa.gov/gmd/ccgg/trends/mlo.html)

    Data are reported as a dry air mole fraction defined as the number of molecules of carbon dioxide divided by the number of all molecules in air, including CO2 itself, after water vapor has been removed. The mole fraction is expressed as parts per million (ppm). Example: 0.000400 is expressed as 400 ppm.
    The Mauna Loa data are being obtained at an altitude of 3400 m in the northern subtropics, and may not be the same as the globally averaged CO2 concentration at the surface.
    Monthly mean carbon dioxide measured at Mauna Loa Observatory, Hawaii. The carbon dioxide data on Mauna Loa constitute the longest record of direct measurements of CO2 in the atmosphere. They were started by C. David Keeling of the Scripps Institution of Oceanography in March of 1958 at a facility of the National Oceanic and Atmospheric Administration [Keeling, 1976]. NOAA started its own CO2 measurements in May of 1974, and they have run in parallel with those made by Scripps since then [Thoning, 1989].

    CO2 HISTORICAL CONTEXT - (from website //https://350.org/science/)

    Human beings are causing climate change, largely by burning fossil fuels.

    Rising temperatures correlate almost exactly with the release of greenhouse gases.

    Before the 18th century, when humans in the industrial west began to burn coal, oil and gas, our atmosphere typically contained about 280 parts per million of carbon dioxide. Those are the conditions “on which civilization developed and to which life on earth is adapted.”

    Now, as the use of fossil fuels spreads through the world, the amount of carbon in the atmosphere is skyrocketing — we’re now well over 415 parts per million of CO2 in the atmosphere. We need to get levels back below 350 ppm.

    An overwhelming 97% of scientists agree that climate change is being caused by human greenhouse gas emissions. There is no meaningful debate about the basic science of climate change. 

    An overwhelming 97% of scientists agree that climate change is being caused by human greenhouse gas emissions. There is no meaningful debate about the basic science of climate change. The finding that more CO2 in the atmosphere will warm the climate dates back to the 1890s.

Ocean Temps/Warming - Background - (from website //https://350.org/science/)

    While record-breaking warming is being felt on land, most of the extra heat energy being trapped in our atmosphere is being stored deep into our oceans.

    Since 1955, more than 90 percent of the energy trapped by the atmosphere as a result of increased greenhouse gasses has been absorbed into the oceans.

    Warmer oceans = More sea level rise
    As water heats up, it expands. This simple phenomena, alongside the influx of water into the oceans from melting ice in the polar regions and the world’s glaciers, is driving rapid sea level rise.

Storms - Background - (from website //https://350.org/science/)

    Extreme Storms + Flooding
    Storms and extreme rainfall events have always happened, but with the added heat in the atmosphere and oceans due to greenhouse gas emissions, storms now occur with increasing accumulated energy and higher moisture loading.

    The storms, cyclones, hurricanes and typhoons we see today are bringing noticeably heavier rainfall, causing more flooding, blowing with stronger winds and causing bigger storm surges.

    WE DON'T HAVE 2016 DATA FOR STORMS - CONTEXT!!!
    The unusually warm waters (attributable to global warming) in the Caribbean in September, 2016 lead to the incredibly rapid intensification of Hurricane Matthew, consistent with the trend of rapidly intensifying tropical hurricanes. In just 36 hours Hurricane Matthew went from a tropical storm to a Category 5 hurricane, causing havoc in Haiti, Cuba, the Bahamas and the Southeastern United States as it progressed.

    From website: https://climate.nasa.gov/news/2837/warming-seas-may-increase-frequency-of-extreme-storms/#:~:text=They%20also%20found%20that%2C%20based,increase%20in%20a%20warmer%20environment.

    They found that extreme storms - those producing at least 0.12 inches (3 millimeters) of rain per hour over a 16-mile (25-kilometer) area - formed when the sea surface temperature was higher than about 82 degrees Fahrenheit (28 degrees Celsius). They also found that, based on the data, 21 percent more storms form for every 1.8 degrees Fahrenheit (1 degree Celsius) that ocean surface temperatures rise.






     









