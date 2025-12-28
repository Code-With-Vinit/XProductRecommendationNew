import RatingStars from "./RatingStars";


export default function ChatMessage({ message }) {
return (
<div className={`message ${message.sender}`}>
<p>{message.text}</p>


{message.sender === "bot" && (
<div className="hover-actions">
<button>👍</button>
<button>👎</button>
</div>
)}


{message.suggestions && (
<ul>
{message.suggestions.map((s) => (
<li key={s.name}>
<a href={s.link} target="_blank">{s.name}</a>
</li>
))}
</ul>
)}

{message.rating !== null && <RatingStars rating={message.rating} />}
</div>
);
}