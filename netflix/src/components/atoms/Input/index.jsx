import React from "react";

export const Input = ({ label, type }) => {
  if (type === "search") {
    return ( 
      <label htmlFor={label}>
        {label}
        <input id={label} type="search" />
      </label>
    );
  }

  return (
    <label htmlFor={label}>
      {label}
      <input id={label} type="text" />
    </label>
  );
};

const DefaultExport = () => {
  return <>Default Export</>;
};

export default DefaultExport;
