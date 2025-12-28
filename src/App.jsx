import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import History from "./pages/History";
import { ThemeProvider } from "./context/ThemeContext";


export default function App() {
return (
<ThemeProvider>
<BrowserRouter>
<Routes>
<Route path="/" element={<Chat />} />
<Route path="/history" element={<History />} />
</Routes>
</BrowserRouter>
</ThemeProvider>
);
}