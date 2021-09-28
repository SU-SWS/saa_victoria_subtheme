import React from "react";
import sanitize from "sanitize-html";

const searchAutocomplete = ({
  autocompleteSuggestions,
  showAutocomplete,
  onSelect,
  selectedSuggestion,
  setSelectedSuggestion,
  autocompleteContainerClasses,
  autocompleteLinkClasses,
  autocompleteLinkFocusClasses,
}) => (
  <div
    className={`algolia-search--autocomplete-container ${autocompleteContainerClasses}
    ${showAutocomplete && autocompleteSuggestions.length ? "" : "hidden"}`}
  >
    {Array.isArray(autocompleteSuggestions) && (
      <ul className="list-unstyled pl-0" role="listbox" id="search-autocomplete-listbox">
        {autocompleteSuggestions.map((suggestion, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li
            key={`autocomplete-item-${new Buffer(suggestion.objectID).toString('base64')}`}
            role="option"
            tabIndex={index === selectedSuggestion ? 0 : -1}
            className={`algolia-search--autocomplete-item mb-0
                        ${autocompleteLinkClasses}
                        ${
                          index === selectedSuggestion
                            ? "focused"
                            : ""
                        }
                      `}
            onClick={(e) => onSelect(e, suggestion.query)}
            onKeyDown={(e) => {
              // On Enter or Spacebar
              if (e.key === "Enter" || e.key === " ") {
                onSelect(e, suggestion.query);
              }
            }}
            onFocus={(e) => setSelectedSuggestion(index)}
            aria-selected={selectedSuggestion === index ? "true" : "false"}
            id={`search-autocomplete-listbox-${index}`}
          >
            {
              // eslint-disable-next-line no-underscore-dangle
              suggestion._highlightResult && (
                <span
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: sanitize(
                      // eslint-disable-next-line no-underscore-dangle
                      suggestion._highlightResult.query.value
                    ),
                  }}
                />
              )
            }
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default searchAutocomplete;
