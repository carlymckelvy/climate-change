import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask_cors import CORS

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///climateDB.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

print(Base.classes.keys())

# Save references to the tables
# HurrCount = Base.classes.hurrCount
# Hurricanes = Base.classes.hurricanes
# Landfall = Base.classes.landfall
# MaxWind = Base.classes.maxWind
# MeanCo2 = Base.classes.meancomplete_co2_df
Ocean = Base.classes.ocean_temps



#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"<a href='/api/v1.0/ocean_temps'>names</a><br/>"
        # f"<a href='/api/v1.0/passengers'>passengers</a>"
    )



# @app.route("/hurricanes")
#       return render_template("hurricanes.html")

# @app.route("/api/v1.0/hurricanes")
# def hurricanesData():
#     return jsonify(hurricanes)

# @app.route("/api/v1.0/hurrCount")
# def hurricanesData():
#     return jsonify(hurrCount)

# @app.route("/api/v1.0/landfall")
# def hurricanesData():
#     return jsonify(landfall)


# @app.route("/oceans")
#     return render_template("oceans.html")

@app.route("/api/v1.0/ocean_temps")
def oceanData():
    session = Session(engine)

    results = session.query(Ocean.Year, Ocean.Value).all()

    session.close()

    all_oceanData = []
    for Year, Value in results:
        oceanData_dict = {}
        oceanData_dict["Year"] = Year
        oceanData_dict["Value"] = Value
        all_oceanData.append(oceanData_dict)

    print(all_oceanData)

    return jsonify(all_oceanData)


# @app.route("/co2")
#       return render_template("co2.html")

# @app.route("/api/v1.0/meancomplete_co2_df")
# def co2Data():
#     return jsonify(meancomplete_co2_df)


if __name__ == "__main__":
    app.run(debug=True)
