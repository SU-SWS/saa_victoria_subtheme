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
      baseStyle: "w-8 -mt-2",
      animate: "",
    },
    play: {
      heroicon: PlayIcon,
      baseStyle: "w-8 ml-7 -mt-3",
      animate: "",
    },
    podcast: {
      heroicon: MicrophoneIcon,
      baseStyle: "w-8 -mt-2",
      animate: "",
    },
    external: {
      heroicon: ArrowRightIcon,
      baseStyle: "w-8 ml-02em -rotate-45 group-hover:-rotate-45 group-focus:-rotate-45",
      animate: "",
    },
    "arrow-right": {
      heroicon: ArrowRightIcon,
      baseStyle: "w-8 ml-03em -mt-2",
      animate: "",
    },
    download: {
      heroicon: DownloadIcon,
      baseStyle: "w-8 ml-4 -mt-3",
      animate: "",
    },
    email: {
      heroicon: MailIcon,
      baseStyle: "w-8 ml-7 -mt-2",
      animate: "",
    },
    "chevron-down": {
      heroicon: ChevronDownIcon,
      baseStyle: "w-[1.1em] ml-4 -mt-3",
      animate: "",
    },
    "chevron-right": {
      heroicon: ChevronRightIcon,
      baseStyle: "w-1em ml-02em -mt-4",
      animate: "",
    },
  };

  const Icon = heroIconMap[iconType].heroicon;
  let animateStyle = "";

  if (isAnimate) {
    animateStyle = dcnb("transform", heroIconMap[iconType].animate);
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
