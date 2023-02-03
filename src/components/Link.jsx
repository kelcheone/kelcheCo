// A link component that can be used to open a URL in a new tab.

import React from "react";

const Link = ({ url, children }) => {
  return (
    <a
      className="font-bold inline-block hover:underline"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${url} in a new tab`}
    >
      {children}
      {/*  add space to the end*/}
      <span className="sr-only">
        {/* Ensure a space here */}
        <span aria-hidden="true"> {` - `} </span>
      </span>
    </a>
  );
};

export default Link;
