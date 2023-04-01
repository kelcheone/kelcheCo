// A link component that can be used to open a URL in a new tab.

import React from "react";

const Link = ({ url, children }) => {
  return (
    <a
      // remove underline
      className="inline-block text-blue-500 hover:text-blue-600 hover:underline no-underline"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${url} in a new tab`}
    >
      {children}
      <span className="sr-only">
        {/*  add space to the end*/}
        {/* Ensure a space here */}
        <span aria-hidden="true"> {` - `} </span>
      </span>
    </a>
  );
};

export default Link;
