import React from "react";

export const Input = ({ label, onChange, type, className, placeholder }) => {
  if (type === "search") {
    return (
      <label htmlFor={label}>
        {label}
        <input
          id={label}
          type="search"
          className={className}
          onChange={onChange}
        />
      </label>
    );
  }

  if (type === "email") {
    return (
      <label htmlFor={label}>
        {label}
        <input
          id={label}
          type="email"
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
      </label>
    );
  }

  return (
    <label htmlFor={label}>
      {label}
      <input id={label} type="text" className={className} onChange={onChange} />
    </label>
  );
};

const DefaultExport = () => {
  return <>Default Export</>;
};

export default DefaultExport;
