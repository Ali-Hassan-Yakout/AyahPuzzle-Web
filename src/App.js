import React, { useState } from "react";
import "./App.css";
import surahData from "../data/puzzles";
import OrderPuzzle from "./components/OrderPuzzle";
import MissingWordPuzzle from "./components/MissingWordPuzzle";
import MultipleChoicePuzzle from "./components/MultipleChoicePuzzle";
import "./components/OrderPuzzle.css";
import "./components/MissingWordPuzzle.css";
import "./components/MultipleChoicePuzzle.css";

const surahList = [
  { key: "al-fatiha", name: "Al-Fatiha" },
  { key: "al-ikhlas", name: "Al-Ikhlas" },
  { key: "an-nas", name: "An-Nas" },
];

export default function App() {
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [score, setScore] = useState(0);
  const [puzzleIdx, setPuzzleIdx] = useState(0);

  function handleSuccess() {
    setScore((s) => s + 10);
    setTimeout(() => {
      setPuzzleIdx((idx) => idx + 1);
    }, 1200);
  }
  function handleFail() {
    // Optionally: shake animation or sound
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>Quran Kids Puzzles</h1>
        <div className="score">Score: {score}</div>
      </header>
      <main>
        {!selectedSurah ? (
          <div className="surah-select">
            <h2>Choose a Surah</h2>
            <div className="surah-list">
              {surahList.map((surah) => (
                <button
                  key={surah.key}
                  className="surah-btn"
                  onClick={() => setSelectedSurah(surah.key)}
                >
                  {surah.name}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="puzzle-section">
            <button className="back-btn" onClick={() => { setSelectedSurah(null); setPuzzleIdx(0); }}>
              ← Back
            </button>
            <h2>{surahList.find((s) => s.key === selectedSurah).name}</h2>
            {(() => {
              const puzzles = surahData[selectedSurah];
              if (!puzzles || puzzleIdx >= puzzles.length) {
                return <div className="puzzle-placeholder"><p>🎉 You finished all puzzles for this Surah!</p></div>;
              }
              const puzzle = puzzles[puzzleIdx];
              if (puzzle.type === "order") {
                return <OrderPuzzle ayat={puzzle.ayat} correctOrder={puzzle.correctOrder} onSuccess={handleSuccess} onFail={handleFail} />;
              }
              if (puzzle.type === "missing-word") {
                return <MissingWordPuzzle ayah={puzzle.ayah} options={puzzle.options} answer={puzzle.answer} onSuccess={handleSuccess} onFail={handleFail} />;
              }
              if (puzzle.type === "multiple-choice") {
                return <MultipleChoicePuzzle question={puzzle.question} options={puzzle.options} answer={puzzle.answer} onSuccess={handleSuccess} onFail={handleFail} />;
              }
              return null;
            })()}
          </div>
        )}
      </main>
    </div>
  );
}