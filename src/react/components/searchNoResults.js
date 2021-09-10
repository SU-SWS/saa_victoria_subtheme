import { Heading } from "decanter-react";
import React from "react";

const SearchNoResults = ({ heading, body, additionalContent }) => (
  <div>
    <Heading level={2} size={3} font="serif">
      {heading}
    </Heading>
    <p>{body}</p>
    <div>
      {additionalContent}
    </div>
  </div>
);

export default SearchNoResults;
