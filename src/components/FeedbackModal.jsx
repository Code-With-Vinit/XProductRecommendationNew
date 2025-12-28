import { useState } from "react";

export default function FeedbackModal({ onSubmit, onClose }) {
  const [text, setText] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Provide Additional Feedback</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="primary-btn"
          onClick={() => onSubmit(text)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
