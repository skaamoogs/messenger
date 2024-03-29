import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import userFieldsTemplate from "./user-fields.tmpl";
import userFieldsProps from "./user-fields.props";
import InputField from "../../../../components/input-field/input-field";
import withStore from "../../../../hocs/with-store";
import { State } from "../../../../utils/interfaces";

class UserFieldsBase extends Block<typeof userFieldsProps> {
  init() {
    const { fields, inputFieldClassName, validation } = this.props;

    this.children.inputs = fields.map(
      (field) => new InputField({ ...field, inputFieldClassName, validation })
    );
  }

  render() {
    const template = Handlebars.compile(userFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}

function mapUserToProps(state: State) {
  if (!state.user) {
    return {};
  }

  const { fields } = userFieldsProps;

  Object.entries(state.user).forEach(([k, v]) => {
    const targetIndex = fields.findIndex(
      (field) => field.inputProps.name === k
    );
    if (targetIndex !== -1) {
      fields[targetIndex].inputProps.value = v as string;
    }
  });

  return { fields };
}

const withUser = withStore(mapUserToProps);
const UserFields = withUser(UserFieldsBase as typeof Block);

export default UserFields;
