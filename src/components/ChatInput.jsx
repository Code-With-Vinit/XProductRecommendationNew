import { useState } from "react";


export default function ChatInput({ onSend }) {
const [value, setValue] = useState("");


return (
<form
className="chat-input"
onSubmit={(e) => {
e.preventDefault();
onSend(value);
setValue("");
}}
>
<input
placeholder="Please tell me about your query!"
value={value}
onChange={(e) => setValue(e.target.value)}
/>
<button type="submit">Ask</button>
<button type="submit">Save</button>
</form>
);
}