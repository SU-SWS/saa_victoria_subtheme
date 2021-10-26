import React from "react";

const columns = [
  {
    heading: 'Popular Topics',
    links: [
      {title: 'Reunion 2021', url: 'https://reunion.stanford.edu/'},
      {title: 'Programs & Resources for Students', url: 'https://students.alumni.stanford.edu/'},
      {title: 'Request your official Stanford transcript', url: 'https://registrar.stanford.edu/students/transcripts/transcripts-alumni'},
      {title: 'Stanford Alumni Email', url: 'https://alumni.stanford.edu/perks/email/'},
      {title: 'Alumni Membership', url: 'https://alumni.stanford.edu/membership/'},
    ]
  },
  {
    heading: 'Contact Information',
    links: [
      {title: 'SAA Customer Service', url: 'https://alumni.stanford.edu/goto/snowcs'},
      {title: 'Stanford University Contact Information', url: 'https://www.stanford.edu/contact/'},
      {title: 'SAA Departments', url: 'https://alumni.stanford.edu/about/departments/'},
    ]
  }
]

const listClasses = "algolia-search--no-results-list list-none pl-0 children:leading-none";
const listItemClasses = "algolia-search--no-results-list-item block text-left mb-6";
const linkClasses = "algolia-search--no-results-link flex w-fit transition-colors no-underline underline-offset hover:underline focus:underline";

const SearchNoResults = ({ heading, body }) => (
  <div className="algolia-search--no-results">
    <h2 className="algolia-search--no-results-heading">
      {heading}
    </h2>
    <p className="algolia-search--no-results-body">{body}</p>
    <div>
      <h3 className="algolia-search--no-results-suggestions-heading mt-40 mb-12 md:mb-20">Consider Browsing by Category:</h3>
      <div className="w-full grid">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-y-16 md:gap-x-8 xl:gap-x-12 justify-items-start grid-gap items-start">
          {columns.map((column, colIndex) => (
            <div key={`no-results-column-${`no-results-col-${colIndex}`}`}>
              <h4 className="algolia-search--no-results-suggestions-subheading mb-16">
                {column.heading}
              </h4>
              <ul className={listClasses}>
                {column.links.map((item, linkIndex) => (
                  <li className={listItemClasses} key={`no-results-suggestion-${colIndex}-${linkIndex}`}>
                    <a href={item.url} className={linkClasses}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SearchNoResults;
