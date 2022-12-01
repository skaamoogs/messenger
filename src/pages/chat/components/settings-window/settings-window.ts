import Handlebars from "handlebars";
import Button from "../../../../components/button/button";
import Block from "../../../../modules/block";
import settingsWindowProps from "./settings-window.props";
import settingsWindowTemplate from "./settings-window.tmpl";

export default class SettingsWindow extends Block {
  constructor(props) {
    super({ ...settingsWindowProps, ...props });
  }

  init() {
    const { addButtonProps, delButtonProps } = this.props;

    this.children.addButton = new Button({
      ...addButtonProps,
    });

    this.children.delButton = new Button({
      ...delButtonProps,
    });
  }

  render() {
    const template = Handlebars.compile(settingsWindowTemplate);
    return this.compile(template, this.props);
  }
}
