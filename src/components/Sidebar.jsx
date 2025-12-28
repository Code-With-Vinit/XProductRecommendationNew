import { useNavigate } from "react-router-dom";

export default function Sidebar({ onNew }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="logo">💬</span>
        <h3>Want new suggestion?</h3>
        <button className="icon-btn" onClick={onNew}>＋</button>
      </div>

      <button
        className="primary-btn"
        onClick={() => navigate("/history")}
      >
        Previous Suggestions
      </button>
    </aside>
  );
}
