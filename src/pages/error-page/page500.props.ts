import ROUTES from "../../const";

const page500Props = {
  errorCode: "500",
  errorDescription: "Мы уже работаем над этим",
  linkProps: {
    text: "Назад к чатам",
    route: ROUTES.chat,
    className: "anchor error-page-link",
  },
};

export default page500Props;
