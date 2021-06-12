import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikanns",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "hindi",
    value: "hi",
  },
  {
    label: "Traditional Chinese",
    value: "zh-TW",
  },
  {
    label: "Japanese",
    value: "ja",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text You want to translate</label>
          <input
            className=""
            type="text"
            value={text}
            onChange={(evt) => {
              setText(evt.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} debouncedText={debouncedText} />
    </div>
  );
};

export default Translate;
