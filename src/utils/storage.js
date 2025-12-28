const KEY = "pastConversations";

export function saveConversation(messages) {
  if (!messages || messages.length === 0) return;

  const existing =
    JSON.parse(localStorage.getItem(KEY)) || [];

  existing.push({
    id: Date.now(),
    messages: messages.map(m => ({
      sender: m.sender,
      text: m.text
    }))
  });

  localStorage.setItem(KEY, JSON.stringify(existing));
}

export function getConversations() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}
