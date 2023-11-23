import React, { ReactNode } from "react";

export const H1 = ({ children, ...props }: { children: [string] }) => (
  <h1 {...props} className="mb-4 font-medium text-black text-t-h1 leading-12">
    {children.map((child) => child.toString().trim())}
  </h1>
);

export const H2 = ({ children, ...props }: { children: [string] }) => (
  <h2
    {...props}
    className="pt-10 mb-2 text-2xl font-medium text-black leading-12"
  >
    {children.map((child) => child.toString().trim())}
  </h2>
);

export const H3 = ({ children, ...props }: { children: ReactNode }) => (
  <h3
    {...props}
    className="pt-6 pb-2 text-3xl font-medium leading-10 text-black"
  >
    {children}
  </h3>
);

export const H4 = ({ children, ...props }: { children: ReactNode }) => (
  <h4 {...props} className="pt-4 pb-2 text-base text-gray-200 font-titles">
    {children}
  </h4>
);

export const P = ({ children, ...props }: { children: ReactNode }) => (
  <p {...props} className="mb-4 text-base leading-7 text-black">
    {children}
  </p>
);

export const UL = ({ children, ...props }: { children: ReactNode }) => (
  <ul {...props} className="pl-6 mt-4 mb-6 text-base list-disc">
    {children}
  </ul>
);

export const OL = ({ children, ...props }: { children: ReactNode }) => (
  <ol
    {...props}
    className="pl-6 mt-4 mb-6 text-sm list-decimal marker:font-semibold marker:ml-2"
  >
    {children}
  </ol>
);

export const SUBTITLE = ({ children, ...props }: { children: ReactNode }) => (
  <p {...props} className="mb-2 text-2xl font-normal leading-7 text-black">
    {children}
  </p>
);

export const A = ({ children, ...props }: { children: ReactNode }) => (
  <a
    {...props}
    className="font-medium leading-6 text-primary-500 hover:text-primary-300"
  >
    {children}
  </a>
);
