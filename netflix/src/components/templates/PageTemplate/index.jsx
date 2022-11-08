import React from "react";

export const PageTemplate = ({ header, footer, children }) => {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
};