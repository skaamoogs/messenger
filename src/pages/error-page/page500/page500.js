import Handlebars from "handlebars";
import { errorPageTemplate } from "../template/error-page.tmpl";
import { page500Data } from "./page500.data";

const template = Handlebars.compile(errorPageTemplate);
export const page500Content = template(page500Data);