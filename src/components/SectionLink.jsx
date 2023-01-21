// A component that can be used to share the a link to the current section of the page.

import React from "react";

import { AiOutlineLink } from "react-icons/ai/index";

const SectionLink = ({ id }) => {
  return (
    <a
      className="font-bold inline-block hover:underline"
      href={`#${id}`}
      aria-label={`Link to section ${id}`}
    >
      <AiOutlineLink className="inline-block" />
    </a>
  );
};

export default SectionLink;
