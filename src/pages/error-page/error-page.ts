import Handlebars from "handlebars";
import Link from "../../components/link/link";
import ROUTES from "../../const";
import Block from "../../modules/block";
import errorPageTemplate from "./error-page.tmpl";
import page404Props from "./page404.props";
import page500Props from "./page500.props";

const { pathname } = window.location;
const errorPageProps =
  pathname === ROUTES.page404 ? page404Props : page500Props;

export default class ErrorPage extends Block {
  constructor() {
    super(errorPageProps);
  }

  init() {
    const { linkProps } = this.props;

    this.children.link = new Link(linkProps);
  }

  render() {
    const template = Handlebars.compile(errorPageTemplate);
    return this.compile(template, this.props);
  }
}
