export const buildPager = (nbPages, maxLinks, activePage) => {
  const pagerLinks = [];

  // If nbPages is less or equal to maxlinks, just show pager links for all pages.
  if (nbPages <= maxLinks) {
    for (let i = 0; i < nbPages; i += 1) {
      pagerLinks.push(i);
    }
  } else {
    const nbMiddleLinks = maxLinks - 2;

    // Case #1: 1 [2 _3_ 4 5] ... 9
    let middleLinksStart = 0;
    let middleLinksEnd = nbMiddleLinks;

    // Case #2: 1 ...[4 _5_ 6 7]... 9
    if (activePage >= nbMiddleLinks && activePage < nbPages - nbMiddleLinks) {
      const offset = Math.floor((nbMiddleLinks - 1) / 2);
      middleLinksStart = activePage - offset;
      middleLinksEnd = middleLinksStart + nbMiddleLinks - offset;
    }
    // Case #3: 1 ...[5 _6_ 7 8] 9
    else if (activePage >= nbPages - nbMiddleLinks) {
      middleLinksStart = nbPages - nbMiddleLinks;
      middleLinksEnd = nbPages - 1;
    }

    // Pack array of page numbers which will be included.
    for (let i = 0; i < nbPages; i += 1) {
      if (
        i === 0 ||
        i === nbPages - 1 ||
        (i >= middleLinksStart && i <= middleLinksEnd)
      ) {
        pagerLinks.push(i);
      }
    }

    // Splice in the first ellipsis if applicable.
    if (pagerLinks.indexOf(middleLinksEnd) < pagerLinks.length - 1) {
      pagerLinks.splice(pagerLinks.indexOf(middleLinksEnd) + 1, 0, "...");
    }
    // Splice in the second ellipsis if applicable.
    if (middleLinksStart > 1) {
      pagerLinks.splice(pagerLinks.indexOf(middleLinksStart), 0, "...");
    }
  }
  return pagerLinks;
};

export const buildMobilePager = (nbPages, activePage) => {
  let pagerLinks;

  // If last page is active...
  if (activePage === nbPages - 1) {
    pagerLinks = [0, "...", nbPages - 1];
  } else {
    pagerLinks = [activePage, "...", nbPages - 1];
  }

  return pagerLinks;
};
