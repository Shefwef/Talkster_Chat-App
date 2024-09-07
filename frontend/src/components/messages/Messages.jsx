import { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 150);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((__, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center  text-lg">
          Send a message to start the conversation!
        </p>
      )}
    </div>
  );
};

export default Messages;
