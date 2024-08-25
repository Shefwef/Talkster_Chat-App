import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://www.flaticon.com/free-icon/user"
            alt="Tailwind CSS chat bubble component"
          />
        </div>
      </div>

      <div className="chat-bubble text-white bg-sky-500">.</div>
      <div className="chat-footer text-xs flex gap-1 items-center">12:59</div>
    </div>
  );
};

export default Message;
