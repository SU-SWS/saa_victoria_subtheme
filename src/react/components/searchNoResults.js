import { Heading } from "decanter-react";
import React from "react";

const SearchNoResults = ({ heading, body }) => (
  <div className="algolia-search--no-results">
    <h2 className="algolia-search--no-results-heading">
      {heading}
    </h2>
    <p className="algolia-search--no-results-body">{body}</p>
  </div>
);

export default SearchNoResults;
