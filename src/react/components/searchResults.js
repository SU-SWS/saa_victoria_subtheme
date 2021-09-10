import React from "react";
import sanitize from "sanitize-html";
import { Heading } from "decanter-react";
import HeroIcon from './heroIcon'

const SearchResults = ({ results }) => {
  if (!results.hits) {
    return <div />;
  }

  return (
    <div id="search-results">
      <div className="text-21 lg:mb-[4rem]">
        <span className="font-semibold">{results.nbHits}</span> results:
      </div>
      {results.hits.map((result) => (
        <div
          key={result.objectID}
          className="px-0 rs-py-2 md:rs-px-2 border-b border-black-40"
        >
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="md:flex-1 w-full">
              <div className="text-16 mb-10">{result.domain}</div>
              <Heading level={3} size={1} font="serif">
                <a
                  className="text-digital-red-light group transition-colors hocus:underline"
                  href={result.url}
                >
                  {result.fileType === "video" && (
                    <HeroIcon
                      iconType="video"
                      className="inline-block mr-02em"
                      srText="Video: "
                    />
                  )}
                  {result.fileType === "audio" && (
                    <HeroIcon
                      iconType="podcast"
                      className="inline-block ml-01em"
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
                      result.domain.match(/^alumni.stanford.edu/)
                        ? "arrow-right"
                        : "external"
                    }
                    className="inline-block group-hocus:text-cardinal-red"
                    isAnimate
                    srText={
                      result.domain.match(/^alumni.stanford.edu/)
                        ? ""
                        : " (external link)"
                    }
                  />
                </a>
              </Heading>
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
              <div className="rs-mt-0 w-[15rem] h-[10rem] md:w-[22.5rem] md:h-[15rem] md:ml-30">
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
