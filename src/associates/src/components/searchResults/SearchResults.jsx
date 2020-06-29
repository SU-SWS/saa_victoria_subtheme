import React from "react";
import "./searchResults.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.search = this.search.bind(this);
  }

  search() {
    let resultingNames = [];
    if (this.props.results) {
      resultingNames = this.props.results.map((person, index) => {
        let fullName = "";
        if (typeof person === "object") {
          if (person.name.middle !== undefined) {
            fullName += `${person.name.first} ${person.name.middle} ${
              person.name.last
            }`;
          } else {
            fullName += `${person.name.first} ${person.name.last}`;
          }
        } else {
          fullName += person;
        }

        let degrees = [];
        for (const key in person.years) {
          let degree;
          degree = person.years[key];
          // degrees.push(` ${degree}`);
          if (degree.slice(0, 2) !== "AB" && degree.slice(0, 2) !== "BS") {
            degrees.push(
              ` ${degree.slice(0, -4)} '${degree.substr(degree.length - 2)}`
            );
          } else {
            degrees.push(` '${degree.substring(5)}`);
          }
        }

        return <div key={index}>{`${fullName} ${degrees.join(", ")}`}</div>;
      });
      if (this.props.value.includes(" ")) {
        this.setState({
          results: this.props.value
        });
      } else {
        this.setState({
          results: resultingNames
        });
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.search}>SEARCH</button>
        <div className="resultsContainer">{this.state.results}</div>
      </div>
    );
  }
}

export default SearchResults;
