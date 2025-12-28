import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function ChatHeader() {

  return (
    <header className="chat-header">
      <h1>Product Recommendation AI</h1>
      <ThemeToggle />
    </header>
  );
}
