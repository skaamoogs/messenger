import Handlebars from "handlebars";
import { errorPageTemplate } from "../template/error-page.tmpl";
import { page404Data } from "./page404.data";

const template = Handlebars.compile(errorPageTemplate);
export const page404Content = template(page404Data);