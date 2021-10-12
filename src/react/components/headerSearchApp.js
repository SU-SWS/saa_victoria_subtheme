import React, { useState, useEffect, createRef } from "react"
import algoliasearch from "algoliasearch";
import SearchAutocomplete from "./searchAutocomplete";
import UseOnClickOutside from "../hooks/useOnClickOutside";

const HeaderSearchApp = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const inputWrapper = createRef();
  const autocompleteLinkClasses = `cursor-pointer inline-block w-full no-underline px-6 py-4 rounded-full`;
  const autocompleteLinkFocusClasses = ``;
  const autocompleteContainerClasses = `absolute p-4 shadow-md w-full border`;

  // Initialize Algolia Client.
  const client = algoliasearch(
    "IC2GX4TRIN",
    "ffb84e6d16a5754728b746e43ab3eadf"
  );

  const suggestionsIndex = client.initIndex(
    "crawler_federated-search_suggestions"
  );

  useEffect(() => {
    updateAutocomplete();
  }, [query]);

  const onInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setShowAutocomplete(true);
  }

  // Update autocomplete suggestions when search input changes.
  const updateAutocomplete = () => {
    suggestionsIndex
      .search(query, {
        hitsPerPage: 10,
      })
      .then((queryResults) => {
        setSuggestions(queryResults.hits);
      });
  };

  const selectSuggestion = (e, suggestion) => {
    e.preventDefault();
    setQuery(suggestion);
    setShowAutocomplete(false);
    setSelectedSuggestion(null);
    redirectWithQuery(suggestion);
  }

  UseOnClickOutside(inputWrapper, () => {
    setShowAutocomplete(false);
  });

  const handleArrowKeys = (e) => {
    if (e.key === "ArrowDown") {
      if (
        selectedSuggestion === null || 
        selectedSuggestion === suggestions.length - 1
      ) {
        setSelectedSuggestion(0);
      } else {
        setSelectedSuggestion(selectedSuggestion + 1);
      }
    } else if (e.key === "ArrowUp") {
      if (selectedSuggestion === 0) {
        setSelectedSuggestion(suggestions.length - 1);
      } else {
        setSelectedSuggestion(selectedSuggestion - 1);
      }
    } else if (
      e.key === "Enter" &&
      suggestions[selectedSuggestion]
    ) {
      selectSuggestion(e, suggestions[selectedSuggestion].query);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    redirectWithQuery(query);
  }

  const redirectWithQuery = (query) => {
    const url = `${window.location.origin}/search?q=${query}`
    window.location.href = url
  }

  return (
    <form action="/search" method="get" acceptCharset="UTF-8" _lpchecked="1" onSubmit={submitForm}>
      <label className="su-site-search__sr-label" htmlFor="key">Search this site</label>
      <div ref={inputWrapper}>
        <input 
          type="text" 
          id="key" 
          name="key" 
          className="su-site-search__input" 
          placeholder="Search this site" 
          maxLength="128" 
          onChange={onInput}
          onKeyDown={handleArrowKeys}
          role="combobox"
          aria-controls="search-autocomplete-listbox"
          aria-expanded={showAutocomplete ? "true" : "false"}
          aria-activedescendant={
            selectedSuggestion !== null
            ? `search-autocomplete-listbox-${selectedSuggestion}`
            : ""
          }
          aria-haspopup="listbox"
          autocomplete="off"
        />
        <SearchAutocomplete
          autocompleteSuggestions={suggestions}
          showAutocomplete={showAutocomplete}
          onSelect={selectSuggestion}
          selectedSuggestion={selectedSuggestion}
          setSelectedSuggestion={setSelectedSuggestion}
          autocompleteContainerClasses={autocompleteContainerClasses}
          autocompleteLinkClasses={autocompleteLinkClasses}
          autocompleteLinkFocusClasses={autocompleteLinkFocusClasses}
        />
      </div>
      <button type="submit" name="search" className="su-site-search__submit su-sr-only-text" aria-label="Search">Submit Search</button>
    </form>
  )
}

export default HeaderSearchApp