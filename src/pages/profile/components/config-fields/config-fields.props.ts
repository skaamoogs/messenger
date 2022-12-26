import { ROUTES } from "../../../../const";
import AuthController from "../../../../controllers/auth.controller";

const configFieldsProps = {
  className: "configuration-link",
  buttonProps: {
    label: "Выйти",
    className: "logout-button",
    events: {
      click: () => AuthController.logout(),
    },
  },
  fields: [
    { text: "Изменить данные", route: ROUTES.data },
    { text: "Изменить пароль", route: ROUTES.password },
  ],
};

export default configFieldsProps;
