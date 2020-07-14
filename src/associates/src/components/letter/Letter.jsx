import React from "react";
import "./letter.css";

const Letter = props => {
  return (
    <div>
      {props.names.map((person, index) => {
        
        let degrees = [];
        for (const key in person.years) {
          let degree;
          degree = person.years[key];
          if (degree.slice(0, 2) !== "AB" && degree.slice(0, 2) !== "BS") {
            degrees.push(
              `${degree.slice(0, -4)} '${degree.substr(degree.length - 2)}`
            );
          } else {
            degrees.push(`'${degree.substring(5)}`);
          }
        }

        if (person.yearAdded === props.recentlyAdded) {
          return (
            <div key={index}>
              <b>
                <div className="name">{`${person.entryTitle}`}</div>
                <div className="degrees">{`${degrees.join(", ")}`}</div>
              </b>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div className="name">{`${person.entryTitle}`}</div>
              <div className="degrees">{`${degrees.join(", ")}`}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Letter;
