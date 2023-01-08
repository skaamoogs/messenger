import clipIconImg from "../../../../images/clip-icon.svg";
import rightArrowImg from "../../../../images/arrow-right.svg";

const messengerProps = {
  messageInputProps: {
    className: "message-input-container",
    type: "text",
    inputClassName: "chat-area-message-input",
    placeholder: "Сообщение",
    name: "message",
  },
  clipIcon: clipIconImg,
  sendMessageButtonProps: {
    type: "submit",
    image: rightArrowImg,
    className: "round-button",
    alt: "right arrow",
  },
};

export default messengerProps;
