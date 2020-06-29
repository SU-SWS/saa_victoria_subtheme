import React from "react";
import Autosuggest from "react-autosuggest";
import SearchResults from "../searchResults/SearchResults.jsx";
import "./search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: [],
      searchResults: []
    };

    this.escapeRegexCharacters = this.escapeRegexCharacters.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("\\b" + escapedValue, "i");
    return this.props.names.filter(person =>
      regex.test(this.getSuggestionValue(person))
    );
  }

  getSuggestionValue(suggestion) {
    let fullName = suggestion.entryTitle;

    let degrees = [];
    for (const key in suggestion.years) {
      let degree;
      degree = suggestion.years[key];
      // degrees.push(` ${degree}`);
      if (degree.slice(0, 2) !== "AB" && degree.slice(0, 2) !== "BS") {
        degrees.push(
          ` ${degree.slice(0, -4)} '${degree.substr(degree.length - 2)}`
        );
      } else {
        degrees.push(` '${degree.substring(5)}`);
      }
    }

    let resultingNames = [];
    resultingNames.push(`${fullName} ${degrees}`);
    this.setState({
      searchResults: resultingNames
    });
    return `${fullName} ${degrees} `;
  }

  renderSuggestion(suggestion) {
    let fullName = suggestion.entryTitle;
    let degrees = [];
    for (const key in suggestion.years) {
      let degree;
      degree = suggestion.years[key];
      // degrees.push(` ${degree}`);
      if (degree.slice(0, 2) !== "AB" && degree.slice(0, 2) !== "BS") {
        degrees.push(
          ` ${degree.slice(0, -4)} '${degree.substr(degree.length - 2)}`
        );
      } else {
        degrees.push(` '${degree.substring(5)}`);
      }
    }
    return <div>{`${fullName} ${degrees} `}</div>;
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value),
      searchResults: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search for a Name",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <SearchResults
          className="searchResults"
          results={this.state.searchResults}
          value={this.state.value}
        />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default Search;
