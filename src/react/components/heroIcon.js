import React from "react";
import { dcnb } from "cnbuilder";
import { VideoCameraIcon, MicrophoneIcon } from "@heroicons/react/outline";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
  MailIcon,
  PlayIcon,
} from "@heroicons/react/solid";

const HeroIcon = ({ iconType, srText, isAnimate, className, ...props }) => {
  const heroIconMap = {
    video: {
      heroicon: VideoCameraIcon,
      baseStyle: "w-8 mt-[-0.2em]",
      animate: "group-hocus:translate-x-02em",
    },
    play: {
      heroicon: PlayIcon,
      baseStyle: "w-8 ml-7 -mt-3",
      animate: "group-hocus:translate-x-02em",
    },
    podcast: {
      heroicon: MicrophoneIcon,
      baseStyle: "w-8 mt-[-0.25em]",
      animate: "group-hocus:translate-x-02em",
    },
    external: {
      heroicon: ArrowRightIcon,
      baseStyle: "w-8 ml-02em -rotate-45 group-hocus:-rotate-45",
      animate:
        "group-hocus:translate-x-01em group-hocus:-translate-y-01em",
    },
    "arrow-right": {
      heroicon: ArrowRightIcon,
      baseStyle: "w-8 ml-03em -mt-02em",
      animate: "group-hocus:translate-x-02em",
    },
    download: {
      heroicon: DownloadIcon,
      baseStyle: "w-8 ml-4 -mt-3",
      animate: "group-hocus:translate-y-02em",
    },
    email: {
      heroicon: MailIcon,
      baseStyle: "w-8 ml-7 -mt-2",
      animate: "group-hocus:translate-x-02em",
    },
    "chevron-down": {
      heroicon: ChevronDownIcon,
      baseStyle: "w-[1.1em] ml-4 -mt-3",
      animate: "group-hocus:translate-y-02em",
    },
    "chevron-right": {
      heroicon: ChevronRightIcon,
      baseStyle: "w-1em ml-02em -mt-4",
      animate: "group-hocus:translate-x-02em",
    },
  };

  const Icon = heroIconMap[iconType].heroicon;
  let animateStyle = "";

  if (isAnimate) {
    animateStyle = dcnb("transform-gpu", heroIconMap[iconType].animate);
  }

  const heroIconStyle = dcnb(
    "transition",
    heroIconMap[iconType].baseStyle,
    animateStyle
  );

  return (
    <>
      <Icon
        aria-hidden="true"
        className={dcnb(heroIconStyle, className)}
        {...props}
      />
      {srText && <span className="sr-only">{srText}</span>}
    </>
  );
};

export default HeroIcon;
