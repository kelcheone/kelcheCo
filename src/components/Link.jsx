// A link component that can be used to open a URL in a new tab.

import React from "react";

const Link = ({ url, children }) => {
  return (
    <a
      className="font-bold inline-block hover:underline"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
