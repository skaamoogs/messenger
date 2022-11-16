import Handlebars from "handlebars";
import { formTemplate } from "../../components/form/form.tmpl";
import { loginData } from "./login.data";

const template = Handlebars.compile(formTemplate);
export const loginContent = template(loginData);


