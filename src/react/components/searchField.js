import React, { useState, createRef, useEffect } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchAutocomplete from "./searchAutocomplete";
import UseEscape from "../hooks/useEscape";
import UseOnClickOutside from "../hooks/useOnClickOutside";

const SearchField = React.forwardRef(
  (
    {
      onSubmit,
      onReset,
      onInput,
      autocompleteSuggestions,
      defaultValue,
      inputClasses,
      wrapperClasses,
      submitBtnClasses,
      clearBtnClasses,
      autocompleteLinkClasses,
      autocompleteLinkFocusClasses,
      autocompleteContainerClasses,
      placeholder,
      clearOnEscape,
    },
    ref
  ) => {
    const [query, setQuery] = useState(defaultValue || "");
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const inputWrapper = createRef();
    const inputRef = ref || createRef();

    const submitHandler = (e) => {
      e.preventDefault();
      setShowAutocomplete(false);
      onSubmit(query);
    };

    const inputHandler = (e) => {
      setQuery(e.target.value);
      onInput(e.target.value);
      setSelectedSuggestion(null);
      setShowAutocomplete(true);
    };

    const clearHandler = (e) => {
      if (e) {
        e.preventDefault();
      }
      setQuery("");
      setShowAutocomplete(false);
      setSelectedSuggestion(null);
      onReset();
    };

    const selectSuggestion = (e, suggestion) => {
      e.preventDefault();
      setQuery(suggestion);
      setShowAutocomplete(false);
      setSelectedSuggestion(null);
      onSubmit(suggestion);
    };

    useEffect(() => {
      setQuery(defaultValue);
    }, [defaultValue]);

    UseOnClickOutside(inputWrapper, () => {
      setShowAutocomplete(false);
    });

    const handleArrowKeys = (e) => {
      if (e.key === "ArrowDown") {
        if (
          selectedSuggestion === null || 
          selectedSuggestion === autocompleteSuggestions.length - 1
        ) {
          setSelectedSuggestion(0);
        } else {
          setSelectedSuggestion(selectedSuggestion + 1);
        }
      } else if (e.key === "ArrowUp") {
        if (selectedSuggestion === 0) {
          setSelectedSuggestion(autocompleteSuggestions.length - 1);
        } else {
          setSelectedSuggestion(selectedSuggestion - 1);
        }
      } else if (
        e.key === "Enter" &&
        autocompleteSuggestions[selectedSuggestion]
      ) {
        selectSuggestion(e, autocompleteSuggestions[selectedSuggestion].query);
      }
    };

    UseEscape(() => {
      if (clearOnEscape && document.activeElement === inputRef.current) {
        clearHandler();
      }
    });

    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="flex items-center">
            <div
              className={`algolia-search--search-field-wrapper flex w-full items-center relative ${wrapperClasses}`}
              ref={inputWrapper}
            >
              <label className="flex-grow max-w-full mt-0">
                <span className="sr-only">Search</span>
                <input
                  type="text"
                  role="combobox"
                  aria-controls="search-autocomplete-listbox"
                  aria-expanded={showAutocomplete ? "true" : "false"}
                  aria-activedescendant={
                    selectedSuggestion !== null
                    ? `search-autocomplete-listbox-${selectedSuggestion}`
                    : ""
                  }
                  aria-haspopup="listbox"
                  onChange={inputHandler}
                  onKeyDown={handleArrowKeys}
                  className={`algolia-search--search-input ${inputClasses}`}
                  placeholder={placeholder || ""}
                  value={query}
                  ref={inputRef}
                />
              </label>
              <button
                type="button"
                onClick={clearHandler}
                className={`algolia-search--clear-btn ${clearBtnClasses}`}
              >
                Clear
                <XIcon
                  className="inline-block ml-3 h-8 w-8"
                  aria-hidden="true"
                />
              </button>
              <SearchAutocomplete
                autocompleteSuggestions={autocompleteSuggestions}
                showAutocomplete={showAutocomplete}
                onSelect={selectSuggestion}
                selectedSuggestion={selectedSuggestion}
                setSelectedSuggestion={setSelectedSuggestion}
                autocompleteContainerClasses={autocompleteContainerClasses}
                autocompleteLinkClasses={autocompleteLinkClasses}
                autocompleteLinkFocusClasses={autocompleteLinkFocusClasses}
              />
            </div>
            <button type="submit" className={`algolia-search--search-btn ${submitBtnClasses}`}>
              <SearchIcon
                className="text-white w-8 h-8 absolute"
                aria-hidden="true"
              />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
);

export default SearchField;
