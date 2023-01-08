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
};

export default chatListProps;
