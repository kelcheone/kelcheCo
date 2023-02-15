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
      <span
        style={{
          display: "inline-block",
          width: "0.5rem",
          height: "0.5rem",
          overflow: "hidden",
          position: "relative",
          top: "0.125rem",
          left: "0.125rem",
        }}
      >
        {/* Ensure a space here */}
        <span aria-hidden="true"> {` - `} </span>
      </span>
    </a>
  );
};

export default Link;
