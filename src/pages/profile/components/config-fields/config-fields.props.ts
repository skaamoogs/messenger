import { ROUTES } from "../../../../const";

const configFieldsProps = {
  className: "configuration-link",
  fields: [
    { text: "Изменить данные", route: ROUTES.data },
    { text: "Изменить пароль", route: ROUTES.password },
    { text: "Выйти", route: ROUTES.login },
  ],
};

export default configFieldsProps;
