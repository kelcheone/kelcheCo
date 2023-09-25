// A link component that can be used to open a URL in a new tab.
import { useEffect, useRef, useState } from "react";

const TableOfContents = ({ headings }) => {
  const itemOffsets = useRef([]);
  const [activeId, setActiveId] = useState(undefined);

  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("article :is(h1, h2, h3, h4)");
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };

    getItemOffsets();
    window.addEventListener("resize", getItemOffsets);

    return () => window.removeEventListener("resize", getItemOffsets);
  }, []);

  return (
    <>
      <h2 className="text-xl font-bold">Table of Contents</h2>
      <ul className="pl-2">
        {headings.map((heading) => (
          <li
            key={heading.slug}
            className={`${
              heading.depth === 2
                ? "ml-2"
                : heading.depth === 3
                ? "ml-4"
                : heading.depth === 4
                ? "ml-6"
                : ""
              // remove dot
            } text-blue-500 dark:text-blue-400 text-sm hover:text-gray-500 hover:underline no-underline mb-1 border-l-2 border-transparent hover:border-gray-200`}
          >
            <a
              href={`#${heading.slug}`}
              className={`${
                activeId === heading.slug ? "font-bold" : ""
              } inline-block`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(heading)
                  .scrollIntoView({ behavior: "smooth" });
                setActiveId(heading.slug);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TableOfContents;
