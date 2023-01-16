import clipIconImg from "../../../../images/clip-icon.svg";
import rightArrowImg from "../../../../images/arrow-right.svg";

const sendMessageProps = {
  messageInputProps: {
    className: "message-input-container",
    type: "text",
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

export default sendMessageProps;
