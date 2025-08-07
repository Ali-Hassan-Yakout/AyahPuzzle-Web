import React, { useState } from "react";
import "./MissingWordPuzzle.css";

export default function MissingWordPuzzle({ ayah, options, answer, onSuccess, onFail }) {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  function checkAnswer() {
    if (selected === answer) {
      setResult("success");
      onSuccess && onSuccess();
    } else {
      setResult("fail");
      onFail && onFail();
    }
  }

  return (
    <div className="missing-word-puzzle">
      <h3>Fill in the missing word</h3>
      <div className="ayah">
        {ayah.split("____").map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && <span className="blank">____</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="options">
        {options.map((opt, idx) => (
          <button
            key={idx}
            className={`option-btn${selected === opt ? " selected" : ""}`}
            onClick={() => setSelected(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <button className="check-btn" onClick={checkAnswer} disabled={!selected}>
        Check
      </button>
      {result === "success" && <div className="result success">🌟 Correct!</div>}
      {result === "fail" && <div className="result fail">❌ Try again!</div>}
    </div>
  );
}