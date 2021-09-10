import React from "react";
import { Button } from "decanter-react";
import { SearchIcon } from "@heroicons/react/solid";

const OpenSearchModalButton = ({ modalOpen, setModalOpen }) => (
  <>
    <Button
      type="button"
      className={{
        "su-leading-display": false,
        "hocus:su-bg-transparent": false,
        "search-button su-flex-shrink-0 su-w-40 su-h-40 su-ml-auto su-items-center su-justify-content-center lg:su-w-auto lg:su-h-auto lg:su-pl-16 lg:su-pr-13 lg:su-pt-2 su-rounded-full lg:su-text-18 su-text-white su-leading-none su-border-2 su-border-solid su-border-digital-red-xlight su-transition-colors hocus:su-bg-cardinal-red-xxdark xl:hocus:su-bg-cardinal-red-xdark lg:hocus:su-no-underline": true,
      }}
      variant="unset"
      size="minimal"
      aria-label="Search Stanford Alumni sites"
      onClick={(e) => setModalOpen(true)}
    >
      <span className="su-sr-only lg:su-not-sr-only su-leading-none">
        Search
      </span>
      <SearchIcon
        aria-hidden="true"
        className="su-inline-block su-w-[2.2rem] lg:su-w-20 lg:su-ml-6"
      />
    </Button>
  </>
);

export default OpenSearchModalButton;
