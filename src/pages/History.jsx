import { getConversations } from "../utils/storage";
import { useState } from "react";

export default function History() {
  const [filter, setFilter] = useState("all");
  const conversations = getConversations();

  const filtered = conversations.filter((c) =>
    filter === "all" ? true : c.rating === Number(filter)
  );

  return (
    <div className="history-page">
      <h1>Previous Suggestions</h1>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
      </select>
      {filtered.map((c, i) => (
        <div key={i} className="history-card">
          {c.messages.map((m, j) => (
            <p key={j}>{m.text}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
