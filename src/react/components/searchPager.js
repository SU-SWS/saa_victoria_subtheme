import React from "react";
import { buildPager, buildMobilePager } from "../utilities/buildPager";

const SearchPager = ({ activePage, nbPages, maxLinks, selectPage }) => {
  if (activePage === undefined || nbPages === undefined) {
    return <div />;
  }

  const linkClasses = "text-digital-red-light hover:border-b-4";
  const activeLinkClasses =
    "active border-b-4 cursor-default pointer-events-none";

  const desktopPagerLinks = buildPager(nbPages, maxLinks, activePage);
  const mobilePagerLinks = buildMobilePager(nbPages, activePage);

  const linkHandler = (e, page) => {
    e.preventDefault();
    selectPage(page);
  };

  const Pager = ({ pagerLinks, className }) => (
    <nav aria-label="Search results pagination" className={className}>
      <div className="flex my-20 lg:my-40 justify-center md:space-x-36">
        <ul className="list-none flex items-baseline space-x-10 md:space-x-15 p-0 font-serif font-bold">
          {activePage > 0 && (
            <li className="mb-0">
              <a
                className={`${linkClasses} algolia-search--pager-prev text-20 no-underline font-normal self-center mr-9 md:mr-11`}
                href={`?page=${activePage - 1}`}
                onClick={(e) => linkHandler(e, activePage - 1)}
              >
                Previous
              </a>
            </li>
          )}
          {pagerLinks.map((i) => {
            if (i === "...") {
              return <li className="mb-0 px-9 md:px-11">...</li>;
            }
            return (
              <li className="mb-0" key={`search-pager-link-${i}`}>
                <a
                  className={`algolia-search--pager-link px-9 md:px-11 no-underline
                      ${activePage === i ? activeLinkClasses : linkClasses}
                    `}
                  href={`?page=${i}`}
                  onClick={(e) => linkHandler(e, i)}
                >
                  {i + 1}
                  {activePage === i && (
                    <span className="sr-only">, current page</span>
                  )}
                </a>
              </li>
            );
          })}

          {activePage < nbPages - 1 && (
            <li className="mb-0">
              <a
                className={`${linkClasses} algolia-search--pager-next text-20 no-underline font-normal self-center ml-9 md:ml-11`}
                href={`?page=${activePage + 1}`}
                onClick={(e) => linkHandler(e, activePage + 1)}
              >
                Next
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );

  return (
    <div>
      <Pager className="algolia-search--pager hidden md:block" pagerLinks={desktopPagerLinks} />
      <Pager className="algolia-search--pager md:hidden" pagerLinks={mobilePagerLinks} />
    </div>
  );
};

export default SearchPager;
