import Handlebars from "handlebars";
import errorPageTemplate from "../template/error-page.tmpl";
import page404Data from "./page404.data";

const template = Handlebars.compile(errorPageTemplate);
const page404Content = template(page404Data);

export default page404Content;
