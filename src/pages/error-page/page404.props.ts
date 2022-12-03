import { ROUTES } from "../../const";

const page404Props = {
  errorCode: "404",
  errorDescription: "Не туда попали",
  linkProps: {
    text: "Назад к чатам",
    route: ROUTES.chat,
    className: "anchor error-page-link",
  },
};

export default page404Props;
