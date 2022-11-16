import Handlebars from "handlebars";
import { formTemplate } from "../../components/form/form.tmpl";
import { signInData } from "./sign-in.data";

const template = Handlebars.compile(formTemplate);
export const signInContent = template(signInData);


