import React, { useState } from "react";
import "./MultipleChoicePuzzle.css";

export default function MultipleChoicePuzzle({ question, options, answer, onSuccess, onFail }) {
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
    <div className="mc-puzzle">
      <h3>Choose the correct answer</h3>
      <div className="question">{question}</div>
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
      {result === "success" && <div className="result success">⭐ Correct!</div>}
      {result === "fail" && <div className="result fail">❌ Try again!</div>}
    </div>
  );
}