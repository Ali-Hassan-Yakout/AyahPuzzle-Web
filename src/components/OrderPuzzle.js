import React, { useState } from "react";
import "./OrderPuzzle.css";

export default function OrderPuzzle({ ayat, correctOrder, onSuccess, onFail }) {
  const [order, setOrder] = useState(shuffle([...ayat]));
  const [draggedIdx, setDraggedIdx] = useState(null);
  const [result, setResult] = useState(null);

  function shuffle(arr) {
    return arr
      .map((v) => [Math.random(), v])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  function handleDragStart(idx) {
    setDraggedIdx(idx);
  }

  function handleDrop(idx) {
    if (draggedIdx === null) return;
    const newOrder = [...order];
    const [removed] = newOrder.splice(draggedIdx, 1);
    newOrder.splice(idx, 0, removed);
    setOrder(newOrder);
    setDraggedIdx(null);
  }

  function checkOrder() {
    const userOrder = order.map((a) => ayat.indexOf(a));
    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
      setResult("success");
      onSuccess && onSuccess();
    } else {
      setResult("fail");
      onFail && onFail();
    }
  }

  return (
    <div className="order-puzzle">
      <h3>Arrange the Ayat in order</h3>
      <div className="ayat-list">
        {order.map((a, idx) => (
          <div
            key={idx}
            className="ayat-card"
            draggable
            onDragStart={() => handleDragStart(idx)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(idx)}
          >
            {a}
          </div>
        ))}
      </div>
      <button className="check-btn" onClick={checkOrder}>Check</button>
      {result === "success" && <div className="result success">🎉 Correct!</div>}
      {result === "fail" && <div className="result fail">❌ Try again!</div>}
    </div>
  );
}