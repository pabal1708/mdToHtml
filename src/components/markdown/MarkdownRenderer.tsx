import React from "react";
import Markdown from "markdown-to-jsx";
import { DocsContentType } from "../markdown/gitServiceTypes";

import { H1, H2, H3, H4, P, UL, OL } from "./MarkdownWrapper";

const MarkdownRenderer = ({ docsData }: DocsContentType) => (
  <div className="block w-full p-3 m-auto">
    {docsData ? (
      <Markdown
        options={{
          overrides: {
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            p: P,
            ul: UL,
            ol: OL,
          },
          wrapper: "article",
        }}
      >
        {docsData}
      </Markdown>
    ) : (
      <p>No Data</p>
    )}
  </div>
);
export default MarkdownRenderer;
