import React from "react";
import sanitize from "sanitize-html";
import HeroIcon from './heroIcon'

const SearchResults = ({ results }) => {
  if (!results.hits) {
    return <div />;
  }

  return (
    <div id="search-results" className="su-sans">
      <div 
        className="algolia-search--results-count lg:mb-16"
        aria-live="polite"
        aria-atomic="true"
        tabIndex={0}
        id="number-search-results"
      >
        <span className="font-semibold">{results.nbHits}</span> results:
      </div>
      {results.hits.map((result) => (
        <div
        key={`autocomplete-item-${new Buffer(result.objectID).toString('base64')}`}
          className="algolia-search--result-item px-0 py-16 md:px-16 border-b"
        >
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="md:flex-1 w-full">
              <div className="algolia-search--result-domain mb-4">{result.domain}</div>
              <h3 className="algolia-search--result-title mb-6 su-serif font-bold">
                <a
                  className="transition-colors hover:underline focus:underline"
                  href={result.url}
                >
                  {result.fileType === "video" && (
                    <HeroIcon
                      iconType="video"
                      className="inline-block mr-2"
                      srText="Video: "
                    />
                  )}
                  {result.fileType === "audio" && (
                    <HeroIcon
                      iconType="podcast"
                      className="inline-block -ml-1"
                      srText="Podcast: "
                    />
                  )}
                  <span
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      // eslint-disable-next-line no-underscore-dangle
                      __html: sanitize(result.title, { decodeEntities: false }),
                    }}
                  />
                  <HeroIcon
                    iconType={
                      result.domain == window.location.hostname
                        ? "arrow-right"
                        : "external"
                    }
                    className={`inline-block ml-2
                     ${result.domain == window.location.hostname
                        ? 'right-arrow'
                        : 'external-arrow'
                      }
                    `}
                    isAnimate
                    srText={
                      result.domain == window.location.hostname
                        ? ""
                        : " (external link)"
                    }
                  />
                </a>
              </h3>
              {/* eslint-disable-next-line no-underscore-dangle */}
              {result._snippetResult.body.value && (
                <p
                  className="card-paragraph leading-snug mb-0"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    // eslint-disable-next-line no-underscore-dangle
                    __html: sanitize(result._snippetResult.body.value),
                  }}
                />
              )}
            </div>
            {result.image && (
              <div className="algolia-search-results__image-wrapper md:ml-30">
                <img
                  className="block object-cover object-center h-full w-full"
                  src={result.image}
                  alt={result.title}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchResults;
