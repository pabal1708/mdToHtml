import React, { useEffect, useState } from "react";
import MarkdownViewer from "../components/markdown";
import Dropdown from "../components/dropdown";

type ConversorType = {
  markdownValue: String;
};

const Conversor = ({ markdownValue }: ConversorType) => {
  const [dataToMd, setDataToMd] = useState("");
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDataToMd(event.target.value);
  };

  useEffect(() => {
    setDataToMd(dataToMd + markdownValue);
  }, [markdownValue]);

  return (
    <>
      <div className="flex w-full ">
        <textarea
          className="w-6/12 h-screen p-2 m-3 text-black border border-black rounded-md"
          onChange={handleInputChange}
          placeholder="Ingrese Texto"
          value={dataToMd}
        />

        <div className="w-6/12 h-screen p-2 m-3 overflow-auto text-black bg-white border border-black rounded-md">
          <MarkdownViewer currentDoc={dataToMd} />
        </div>
      </div>
    </>
  );
};

export default Conversor;
