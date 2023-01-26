// A component that can be used to share the a link to the current section of the page.

import React from "react";

import { AiOutlineLink } from "react-icons/ai/index";

const SectionLink = ({ id }) => {
  // on click, copy the link to the clipboard
  const copyLink = () => {
    const rawLink = window.location.href;
    const link = rawLink.split("#")[0] + `#${id}`;
    navigator.clipboard.writeText(link);
  };

  return (
    <a
      className="font-bold inline-block hover:underline"
      href={`#${id}`}
      aria-label={`Link to section ${id}`}
    >
      <AiOutlineLink
        onClick={copyLink}
        title="Copy section link to clipboard"
        className="inline-block"
      />
    </a>
  );
};

export default SectionLink;
