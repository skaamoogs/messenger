import Handlebars from "handlebars";
import Block from "../../modules/block";
import router from "../../utils/route/router";
import linkTemplate from "./link.tmpl";

export interface LinkProps {
  text: string;
  className?: string;
  route: string;
  events?: { click: () => void };
}

export default class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.goToRoute(),
      },
    });
  }

  goToRoute() {
    router.go(this.props.route);
  }

  render() {
    const template = Handlebars.compile(linkTemplate);
    return this.compile(template, this.props);
  }
}
