import React from "react";
import elementsMd from "./elementsMd";

type DropdownType = {
  addValue: (content: string) => void;
};

const Dropdown = ({ addValue }: DropdownType) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    addValue(event.target.value);
  };

  return (
    <div className="flex flex-col text-black borde">
      <label className="m-1" htmlFor="element">
        Seleccione un elemento Markdown
      </label>
      <select
        className="p-1 border border-black rounded-md hover:border-monochrome-200"
        name="element"
        id="element"
        onChange={handleChange}
      >
        {elementsMd.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
