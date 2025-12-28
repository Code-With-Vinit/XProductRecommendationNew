import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { getBotReply } from "../utils/getBotReply";
import { saveConversation } from "../utils/storage";


export default function Chat() {
const [messages, setMessages] = useState([]);
const [step, setStep] = useState(0);
const [context, setContext] = useState({});

function sendMessage(text) {
const userMsg = { id: Date.now(), sender: "user", text };
const reply = getBotReply(text, step, context);


const botMsg = {
id: Date.now() + 1,
sender: "bot",
text: reply.text,
suggestions: reply.suggestions || null,
rating: null,
feedback: ""
};


setMessages([...messages, userMsg, botMsg]);
setStep(reply.nextStep ?? step);
setContext({ product: reply.product ?? context.product });
}

function resetChat() {
saveConversation(messages);
setMessages([]);
setStep(0);
setContext({});
}


return (
<div className="app-container">
<Sidebar onNew={resetChat} />


<div className="chat-area">
<h1>Product Recommendation AI</h1>


{messages.length === 0 && (
<div className="empty-state">Hi, Please tell me what you want?</div>
)}


{messages.map((msg) => (
<ChatMessage key={msg.id} message={msg} />
))}

<ChatInput onSend={sendMessage} />
</div>
</div>
);
}