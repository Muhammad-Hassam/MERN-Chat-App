import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";

export default function ChatContainer() {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading) return <div>Loading...</div>;

  return (
    <div>
      <ChatHeader />
      <p>messages...</p>
      <MessageInput />
    </div>
  );
}
