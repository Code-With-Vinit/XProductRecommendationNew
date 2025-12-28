import { Link } from "react-router-dom";

export default function Sidebar({ onNew }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Want new suggestion?</h3>
        <button type="button" onClick={onNew}>＋</button>
      </div>

      {/* MUST be an anchor */}
      <Link to="/history" className="primary-btn">
        Previous Suggestions
      </Link>

      {/* Cypress expects this */}
      <Link to="/" className="secondary-btn">
        New Suggestion
      </Link>
    </aside>
  );
}
