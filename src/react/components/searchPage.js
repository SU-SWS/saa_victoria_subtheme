import React, { useState, useEffect, useRef } from "react"
import algoliasearch from "algoliasearch";
import {
  useQueryParam,
  NumberParam,
  StringParam,
  ArrayParam,
} from "use-query-params";
import Icon from "react-hero-icon";
import { Container, Heading, Button, Grid, GridCell } from "decanter-react";
import SearchField from './searchField'
import SearchResults from './searchResults'
import SearchPager from './searchPager'
import SearchFacet from './searchFacet'
import SearchNoResults from './searchNoResults'

const SearchPage = () => {
  // Set up query param variables
  const [queryParam, setQueryParam] = useQueryParam("q", StringParam);
  const [pageParam, setPageParam] = useQueryParam("page", NumberParam);
  const [siteParam, setSiteParam] = useQueryParam("site", ArrayParam);
  const [fileTypeParam, setFileTypeParam] = useQueryParam("type", ArrayParam);

  // Set up state variables.
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(queryParam || "");
  const [page, setPage] = useState(pageParam || 0);
  const [siteNameValues, setSiteNameValues] = useState(null);
  const [fileTypeValues, setFileTypeValues] = useState(null);
  const [selectedFacets, setSelectedFacets] = useState({
    siteName: siteParam || [],
    fileType: fileTypeParam || [],
  });
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const [opened, setOpened] = useState(false);

  // Set up other settings variables.
  const hitsPerPage = 16;
  const noResultsHeading = "No results were found for \"[query]\"";
  const noResultsBody = "No Results Body Placeholder";
  const noResultsAdditionalContent = "No Results Additional Content Placeholder";

  // Set up refs 
  const ref = useRef(null);
  const filterOpenRef = useRef(null);

  // Initialize Algolia Client.
  const client = algoliasearch(
    "IC2GX4TRIN",
    "ffb84e6d16a5754728b746e43ab3eadf"
  );

  const suggestionsIndex = client.initIndex(
    "crawler_federated-search_suggestions"
  );

  // Update autocomplete suggestions when search input changes.
  const updateAutocomplete = (queryText) => {
    suggestionsIndex
      .search(queryText, {
        hitsPerPage: 10,
      })
      .then((queryResults) => {
        setSuggestions(queryResults.hits);
      });
  };

  // Submit handler for search input.
  const submitSearchQuery = (queryText, action = "submit") => {
    if (!queryText.length) {
      if (action === "submit") {
        setShowEmptyMessage(true);
      } else {
        setShowEmptyMessage(false);
      }
    } else {
      setShowEmptyMessage(false);
      setPageParam(undefined);
      setQueryParam(queryText || undefined);
      setPage(0);
      setQuery(queryText);
    }
  };

  // Update page parameter when pager link is selected.
  const updatePage = (pageNumber) => {
    setPage(pageNumber);
    setPageParam(pageNumber);
    // scrollTo("#search-results");
  };

  // Update facet values when facet is selected.
  const updateSiteFacet = (values) => {
    const newFacets = { ...selectedFacets };
    newFacets.siteName = values;
    setSelectedFacets(newFacets);
    setPageParam(undefined);
    setPage(0);
    setSiteParam(values);
  };

  // Update facet values when facet is selected.
  const updateFileTypeFacet = (values) => {
    const newFacets = { ...selectedFacets };
    newFacets.fileType = values;
    setSelectedFacets(newFacets);
    setPageParam(undefined);
    setPage(0);
    setFileTypeParam(values);
  };

  const clearFilters = (e) => {
    const filters = document.getElementsByClassName("filters");
    if (filters) {
      Object.values(filters).forEach((set) => {
        Object.values(set.getElementsByTagName("input")).forEach((checkbox) => {
          // eslint-disable-next-line no-param-reassign
          checkbox.checked = false;
        });
      });
    }

    setSelectedFacets({
      siteName: [],
      fileType: [],
    });

    setPageParam(undefined);
    setPage(0);
    setFileTypeParam([]);
    setSiteParam([]);
  };

  // Fetch search results from Algolia. (Typically triggered by state changes in useEffect())
  const updateSearchResults = () => {
    const facetFilters = Object.keys(selectedFacets).map((attribute) =>
      selectedFacets[attribute].map((value) => `${attribute}:${value}`)
    );

    const siteNameFilters = [];
    Object.keys(selectedFacets).forEach((attribute) => {
      if (attribute !== "siteName") {
        const filters = selectedFacets[attribute].map(
          (value) => `${attribute}:${value}`
        );
        siteNameFilters.push(filters);
      }
    });

    const fileTypeFilters = [];
    Object.keys(selectedFacets).forEach((attribute) => {
      if (attribute !== "fileType") {
        const filters = selectedFacets[attribute].map(
          (value) => `${attribute}:${value}`
        );
        fileTypeFilters.push(filters);
      }
    });

    client
      .multipleQueries([
        // Query for search results.
        {
          indexName: "crawler_federated-search",
          query,
          params: {
            hitsPerPage,
            page,
            facets: ["siteName", "fileType"],
            facetFilters,
          },
        },
        // Disjunctive query for siteName facet values.
        {
          indexName: "crawler_federated-search",
          query,
          params: {
            facets: ["siteName", "fileType"],
            facetFilters: siteNameFilters,
          },
        },
        // Disjunctive query for fileType facet values.
        {
          indexName: "crawler_federated-search",
          query,
          params: {
            facets: ["siteName", "fileType"],
            facetFilters: fileTypeFilters,
          },
        },
      ])
      .then((queryResults) => {
        console.log('queryResults', queryResults)
        setResults(queryResults.results[0]);
        setSiteNameValues(queryResults.results[1].facets.siteName);
        setFileTypeValues(queryResults.results[2].facets.fileType);
      });
  };

  // Listen for changes to query, pager, or facets and update search results.
  useEffect(() => {
    updateSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page, selectedFacets]);


  const wrapperClasses = `flex-grow w-auto border-0 border-b border-solid border-black-60`;

  const clearBtnClasses = `flex items-center bg-transparent hocus:bg-transparent text-black-70 hocus:text-black hocus:underline text-m0 font-semibold border-none p-0 rs-mr-1 mt-03em`;

  const inputClasses = `border-0 text-m2 w-full flex-1 rs-px-1 py-10 outline-none focus:ring-0 focus:ring-transparent`;

  const submitBtnClasses = `flex items-center justify-center w-40 min-w-[4rem] h-40 md:children:w-20 md:children:h-20 rounded-full transition-colors bg-digital-red-light hocus:bg-cardinal-red-xdark ml-10`;

  const autocompleteLinkClasses = `cursor-pointer font-regular inline-block w-full text-white no-underline px-15 py-10 rounded-full hover:bg-digital-red hover:text-white`;

  const autocompleteLinkFocusClasses = `bg-digital-red`;

  const autocompleteContainerClasses = `absolute top-[100%] bg-cardinal-red-xxdark p-10 shadow-md w-full border border-digital-red-light rounded-b-[0.5rem]`;

  const facets = results.facets && (
    <React.Fragment>
      {siteNameValues && (
        <SearchFacet
          label="Sites"
          attribute="siteName"
          facetValues={siteNameValues}
          selectedOptions={selectedFacets.siteName}
          onChange={(values) => updateSiteFacet(values)}
          className={!!selectedFacets.siteName.length && "su-mb-[16px]"}
          exclude={["YouTube", "SoundCloud", "Apple Podcasts"]}
        />
      )}
      {fileTypeValues && (
        <SearchFacet
          label="Media"
          attribute="fileType"
          facetValues={fileTypeValues}
          selectedOptions={selectedFacets.fileType}
          onChange={(values) => updateFileTypeFacet(values)}
          optionClasses="su-capitalize"
          className="su-mb-[16px]"
          exclude={["html", "pdf"]}
        />
      )}
    </React.Fragment>
  );

  return (
    <div>
      <Container
          element="section"
          width="full"
          className="px-15 py-45 md:py-70 xl:py-108 text-center bg-foggy-light flex-wrap"
        >
        <Heading level={1} font="serif" weight="bold" className="mb-0">
          Search
        </Heading>
      </Container>
      <Container
        element="section"
        width="site"
        className="py-45 max-w-full w-full md:py-80"
      >
        <Grid gap xs={12} className="z-10 relative basefont-19">
          <GridCell
            xs={12}
            lg={results.nbHits > 0 ? 6 : 8}
            className={
              results.nbHits > 0 ? "lg:col-start-4" : "lg:col-start-3"
            }
          >
            <SearchField
              onInput={(queryText) => updateAutocomplete(queryText)}
              onSubmit={(queryText) => submitSearchQuery(queryText)}
              onReset={() => submitSearchQuery("", "reset")}
              defaultValue={query}
              autocompleteSuggestions={suggestions}
              clearBtnClasses={clearBtnClasses}
              inputClasses={inputClasses}
              wrapperClasses={wrapperClasses}
              submitBtnClasses={submitBtnClasses}
              autocompleteLinkClasses={autocompleteLinkClasses}
              autocompleteLinkFocusClasses={autocompleteLinkFocusClasses}
              autocompleteContainerClasses={autocompleteContainerClasses}
              clearOnEscape
            />
          </GridCell>
        </Grid>
        <Grid xs={12} className="filters rs-mt-7 lg:grid-gap">
            {results.nbHits > 0 && (
              <React.Fragment>
                <GridCell
                  xs={12}
                  lg={3}
                  className={`lg:hidden relative mb-[4rem] ${
                    opened ? "shadow-xl" : ""
                  }`}
                >
                  <div ref={ref}>
                    <button
                      type="button"
                      className={`group flex w-full justify-between border px-[20px] text-21 font-semibold items-center transition-colors
                        ${
                          opened
                            ? "border-digital-red text-white bg-digital-red"
                            : "border-black-30 text-digital-red-light hocus:bg-digital-red hocus:border-digital-red hocus:text-white hocus:shadow-lg"
                        }`}
                      aria-expanded={opened}
                      ref={filterOpenRef}
                      onClick={() => setOpened(!opened)}
                    >
                      <span className="py-[14px] flex">
                        {opened ? "Filters" : " Filter results"}
                      </span>
                      {opened ? (
                        <span className="ml-02em font-regular flex items-center text-18 group-hocus:underline">
                          Close
                          <Icon icon="x" className="w-14 ml-6" />
                        </span>
                      ) : (
                        <span className="flex items-center mt-0 text-digital-red-light group-hocus:text-white hocus:shadow-none">
                          <Icon icon="chevron-down" />
                        </span>
                      )}
                    </button>

                    {opened && (
                      <div className="absolute top-[100%] left-0 w-full z-10 bg-white shadow-2xl border border-solid border-black-10">
                        <div className="rs-p-0">{facets}</div>

                        <div className="flex justify-end rs-px-0 rs-pt-0 rs-pb-2 bg-foggy-light border-t border-black-20">
                          <Button
                            text="Clear all"
                            variant="unset"
                            onClick={() => clearFilters()}
                            className={{
                              "text-16": false,
                              "md:text-20": false,
                              "text-digital-red-light text-18 hocus:text-cardinal-red hocus:shadow-none": true,
                            }}
                          >
                            Clear all
                          </Button>

                          <Button
                            animate="right"
                            icon="more"
                            variant="solid"
                            size="default"
                            className={{
                              "text-16": false,
                              "md:text-20": false,
                              "text-18 hocus:bg-cardinal-red-xdark hocus:border-cardinal-red-xdark": true,
                            }}
                            onClick={() => setOpened(false)}
                          >
                            View Results
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </GridCell>

                <GridCell
                  xs={12}
                  lg={3}
                  className="mb-[4rem] hidden lg:flex"
                >
                  <h2 className="sr-only">Filter Search Results</h2>
                  <div>{facets}</div>
                </GridCell>
              </React.Fragment>
            )}
            <GridCell
              xs={12}
              lg={results.nbHits > 0 ? 9 : 8}
              xxl={8}
              className={
                results.nbHits > 0 ? "" : "lg:col-start-3 2xl:col-start-3"
              }
            >
              {results.nbHits > 0 && (
                <>
                  <SearchResults results={results} />
                </>
              )}

              {results.nbHits > hitsPerPage && (
                <SearchPager
                  activePage={page}
                  nbPages={results.nbPages}
                  maxLinks={6}
                  selectPage={updatePage}
                />
              )}

              {!results.nbHits && query && (
                <SearchNoResults
                  heading={noResultsHeading.replace("[query]", query)}
                  body={noResultsBody}
                  additionalContent={noResultsAdditionalContent}
                />
              )}
            </GridCell>
        </Grid>
      </Container>
    </div>
  )
}

export default SearchPage