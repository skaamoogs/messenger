import { ROUTES } from "../../../../const";

const chatListProps = {
  profileLinkProps: {
    text: "Профиль >",
    className: "anchor profile-link",
    route: ROUTES.profile,
  },
  searchInputProps: {
    className: "search-input-container",
    type: "search",
    inputClassName: "chat-search-input",
    placeholder: "Поиск",
  },
  addButtonProps: {
    className: "round-button control-button control-button-chats",
    type: "button",
    label: "+",
    id: "create_chat",
  },
};

export default chatListProps;
