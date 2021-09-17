import React from "react";
import { Heading } from "decanter-react";

const SearchFacet = ({
  label,
  facetValues,
  attribute,
  selectedOptions,
  onChange,
  className,
  optionClasses,
  exclude = [],
}) => {
  const handleCheckboxChange = (e) => {
    const values = [];
    const checkboxes = document.getElementsByName(e.target.name);

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        values.push(checkbox.value);
      }
    });

    onChange(values);
  };

  let preparedFacetValues = Object.keys(facetValues).map((value) => {
    if (exclude.includes(value)) {
      return null;
    }
    return {
      name: value,
      count: facetValues[value],
    };
  });

  preparedFacetValues = preparedFacetValues.filter((el) => el != null);
  if (preparedFacetValues.length === 0) {
    return null;
  }

  return (
    <div
      className={`${
        className ||
        "algolia-search--facet-wrapper mb-8 lg:mb-16 rs-pb-3 lg:pb-0 border-b lg:border-0 border-black-20"
      }`}
    >
      <h3 className="algolia-search--facet-group-heading font-semibold">
        {label}
      </h3>

      {preparedFacetValues.map((option, index) => (
        <label
          key={option.name}
          className={`algolia-search--facet-label flex items-center cursor-pointer text-19 hover:text-digital-red-xlight mt-8`}
        >
          <input
            type="checkbox"
            value={option.name}
            name={attribute}
            defaultChecked={selectedOptions.includes(option.name)}
            className="algolia-search--facet-checkbox mr-4 cursor-pointer"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <span
            className={`text-16 lg:text-19 peer-hover:text-digital-red-light peer-focus:text-digital-red-light peer-hover:underline peer-focus:underline hover:underline hover:text-digital-red-light ${
              optionClasses || ""
            }`}
          >
            {option.name}
            <span> ({option.count.toLocaleString("en-us")})</span>
          </span>
        </label>
      ))}
    </div>
  );
};

export default SearchFacet;
