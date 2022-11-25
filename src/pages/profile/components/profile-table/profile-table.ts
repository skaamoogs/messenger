import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import ProfileField from "../profile-field/profile-field";
import profileTableTemplate from "./profile-table.tmpl";

export default class ProfileTable extends Block {
  init() {
    const { profileFields } = this.props;

    this.children.fields = profileFields.map(
      (field: Record<string, unknown>) => new ProfileField(field),
    );
  }

  render() {
    console.log(this.props, this.children);
    const template = Handlebars.compile(profileTableTemplate);
    return this.compile(template, this.props);
  }
}
