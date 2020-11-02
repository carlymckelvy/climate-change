import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
from flask_cors import CORS

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///hurricanes.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

print(Base.classes.keys())

# Save references to the tables
HurrCount = Base.classes.hurrcount
Hurricanes = Base.classes.hurricanes
Landfall = Base.classes.landfall
MaxWind = Base.classes.maxwind
MeanCo2 = Base.classes.meanco2
Ocean = Base.classes.ocean_temps


#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app)


#################################################
# Flask Routes
#################################################

@app.route("/api")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"<a href='/api/v1.0/hurricanes'>hurricanes</a><br/>"
        f"<a href='/api/v1.0/hurrCount'>hurrCount</a><br/>"
        f"<a href='/api/v1.0/landfall'>landfall</a><br/>"
        f"<a href='/api/v1.0/meanco2'>meanco2</a><br/>"
        f"<a href='/api/v1.0/ocean_temps'>ocean_temps</a><br/>"
        f"<a href='/api/v1.0/maxwind'>maxwind</a>"
    )


# Landing page
@app.route("/")
def homepage():
    return render_template("index.html")


# Hurricane page
@app.route("/api/v1.0/hurricanes")
def hurricanes():
    session = Session(engine)

    results = session.query(Hurricanes.stormid, Hurricanes.name, Hurricanes.date, Hurricanes.time, Hurricanes.event, Hurricanes.status, Hurricanes.latitude, Hurricanes.longitude, Hurricanes.maxwind, Hurricanes.year).all()

    session.close()

    all_hurricanes = []
    for stormid, name, date, time, event, status, latitude, longitude, maxwind, year in results:
        hurricanes_dict = {}
        hurricanes_dict["stormid"] = stormid
        hurricanes_dict["name"] = name
        hurricanes_dict["date"] = date
        hurricanes_dict["time"] = time
        hurricanes_dict["event"] = event
        hurricanes_dict["status"] = status
        hurricanes_dict["latitude"] = latitude
        hurricanes_dict["longitude"] = longitude
        hurricanes_dict["maxwind"] = maxwind
        hurricanes_dict["year"] = year
        all_hurricanes.append(hurricanes_dict)

    print(all_hurricanes)

    return jsonify(all_hurricanes)

@app.route("/api/v1.0/hurrCount")
def hurrCount():
    session = Session(engine)

    results = session.query(HurrCount.year, HurrCount.value).all()

    session.close()

    all_hurrCount = []
    for year, value in results:
        hurrCount_dict = {}
        hurrCount_dict["year"] = year
        hurrCount_dict["value"] = value
        all_hurrCount.append(hurrCount_dict)

    print(all_hurrCount)

    return jsonify(all_hurrCount)

@app.route("/api/v1.0/landfall")
def landfall():
    session = Session(engine)

    results = session.query(Landfall.stormid, Landfall.name, Landfall.date, Landfall.time, Landfall.event, Landfall.status, Landfall.latitude, Landfall.longitude, Landfall.maxwind, Landfall.year).all()

    session.close()

    all_landfall = []
    for stormid, name, date, time, event, status, latitude, longitude, maxwind, year in results:
        landfall_dict = {}
        landfall_dict["stormid"] = stormid
        landfall_dict["name"] = name
        landfall_dict["date"] = date
        landfall_dict["time"] = time
        landfall_dict["event"] = event
        landfall_dict["status"] = status
        landfall_dict["latitude"] = latitude
        landfall_dict["longitude"] = longitude
        landfall_dict["maxwind"] = maxwind
        landfall_dict["year"] = year
        all_landfall.append(landfall_dict)

    print(all_landfall)

    return jsonify(all_landfall)

@app.route("/api/v1.0/maxwind")
def maxwind():
    session = Session(engine)

    results = session.query(MaxWind.stormid, MaxWind.name, MaxWind.date, MaxWind.time, MaxWind.event, MaxWind.status, MaxWind.latitude, MaxWind.longitude, MaxWind.maxwind, MaxWind.year).all()

    session.close()

    all_maxwind = []
    for stormid, name, date, time, event, status, latitude, longitude, maxwind, year in results:
        maxwind_dict = {}
        maxwind_dict["stormid"] = stormid
        maxwind_dict["name"] = name
        maxwind_dict["date"] = date
        maxwind_dict["time"] = time
        maxwind_dict["event"] = event
        maxwind_dict["status"] = status
        maxwind_dict["latitude"] = latitude
        maxwind_dict["longitude"] = longitude
        maxwind_dict["maxwind"] = maxwind
        maxwind_dict["year"] = year
        all_maxwind.append(maxwind_dict)

    print(all_maxwind)

    return jsonify(all_maxwind)


# Oceans page
# @app.route("/oceans")
#     return render_template("oceans.html")

@app.route("/api/v1.0/ocean_temps")
def oceanData():
    session = Session(engine)

    results = session.query(Ocean.year, Ocean.value).all()

    session.close()

    all_oceanData = []
    for year, value in results:
        oceanData_dict = {}
        oceanData_dict["year"] = year
        oceanData_dict["value"] = value
        all_oceanData.append(oceanData_dict)

    print(all_oceanData)

    return jsonify(all_oceanData)

# #Carbon dioxide page
# @app.route("/co2")
#       return render_template("co2.html")

@app.route("/api/v1.0/meanco2")
def co2Data():
    session = Session(engine)

    results = session.query(MeanCo2.year, MeanCo2.value).all()

    session.close()

    all_co2Data = []
    for year, value in results:
        co2Data_dict = {}
        co2Data_dict["year"] = year
        co2Data_dict["value"] = value
        all_co2Data.append(co2Data_dict)

    print(all_co2Data)

    return jsonify(all_co2Data)


if __name__ == "__main__":
    app.run(debug=True)
