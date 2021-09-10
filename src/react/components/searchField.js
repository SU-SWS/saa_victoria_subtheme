import React, { useState, createRef, useEffect } from "react";
import { X, Search } from "react-hero-icon/solid";
import SearchAutocomplete from "./searchAutocomplete";
//import UseEscape from "../../hooks/useEscape";
//import UseOnClickOutside from "../../hooks/useOnClickOutside";

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
      setShowAutocomplete(true);
    };

    const clearHandler = (e) => {
      e.preventDefault();
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

    // UseOnClickOutside(inputWrapper, () => {
    //   setShowAutocomplete(false);
    // });

    const handleArrowKeys = (e) => {
      if (e.key === "ArrowDown") {
        setSelectedSuggestion(selectedSuggestion + 1);
      } else if (e.key === "ArrowUp") {
        setSelectedSuggestion(selectedSuggestion - 1);
      } else if (
        e.key === "Enter" &&
        autocompleteSuggestions[selectedSuggestion]
      ) {
        selectSuggestion(e, autocompleteSuggestions[selectedSuggestion].query);
      }
    };

    // UseEscape(() => {
    //   if (clearOnEscape && document.activeElement === inputRef.current) {
    //     clearHandler();
    //   }
    // });

    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="flex items-center">
            <span className="" />
            <div
              className={`flex w-full items-center relative ${wrapperClasses}`}
              ref={inputWrapper}
            >
              <label className="flex-grow max-w-full">
                <span className="sr-only">Search</span>
                <input
                  type="text"
                  role="combobox"
                  aria-controls="search-autocomplete-listbox"
                  aria-expanded={showAutocomplete ? "true" : "false"}
                  onChange={inputHandler}
                  onKeyDown={handleArrowKeys}
                  className={inputClasses}
                  placeholder={placeholder || ""}
                  value={query}
                  ref={inputRef}
                />
              </label>
              <button
                type="button"
                onClick={clearHandler}
                className={clearBtnClasses}
              >
                Clear
                <X
                  className="inline-block ml-3 h-[1.1em] w-[1.1em]"
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
            <button type="submit" className={submitBtnClasses}>
              <Search
                className="text-white w-20 h-20"
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
