const KEY = "conversations";

export function saveConversation(messages) {
  if (!messages || messages.length === 0) return;

  const prev = JSON.parse(localStorage.getItem(KEY)) || [];

  prev.push({
    id: Date.now(),
    messages,
    createdAt: new Date().toISOString()
  });

  localStorage.setItem(KEY, JSON.stringify(prev));
}

export function getConversations() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}
