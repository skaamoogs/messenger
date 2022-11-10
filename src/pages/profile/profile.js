import Handlebars from "handlebars";
import { configurationFieldsTemplate } from "./components/configuration-fields/configuration-fields.tmpl";
import { passwordFieldsTemplate } from "./components/password-fields/password-fields.tmpl";
import { userFieldsTemplate } from "./components/user-fields/user-fields.tmpl";
import { userNameTemplate } from "./components/user-name/user-name.tmpl";
import { ROUTES } from "../../const";
import { profileData } from "./profile.data";

const currentPath = window.location.pathname;

Handlebars.registerPartial("userFields", userFieldsTemplate);
Handlebars.registerPartial("userName", userNameTemplate);
Handlebars.registerPartial("configurationFields", configurationFieldsTemplate);
Handlebars.registerPartial("passwordFields", passwordFieldsTemplate);

const profileTemplate = `
<div class="profile-page">
    <div class="back-button-container">
        <form action="{{backButtonRoute}}">
            <button class="round-button" type="submit"><img src={{leftArrowImage}} alt="left arrow" /></button>
        </form>
    </div>
    <div class="profile-container">
        <div class="avatar-container">
            <img class="avatar-image" src={{emptyAvatarImage}} alt="empty avatar" />
            <div class="avatar-mask"><span>{{{changeAvatarText}}}</span></div>
        </div>
        {{#if ${currentPath === ROUTES.profile}}}
            {{> userName}}
        {{/if}}
        {{#if ${currentPath !== ROUTES.password}}}
            {{> userFields}}
            {{#if ${currentPath !== ROUTES.data}}}
                {{> configurationFields}}
            {{/if}}
        {{else}}
            {{> passwordFields }}
        {{/if}}
        {{#if ${currentPath !== ROUTES.profile}}}
            <form action="${ROUTES.profile}">
                <button class="primary-button profile-save-button" type="submit">{{saveButtonName}}</button>
            </form>
        {{/if}}
    </div>
</div>
`;

const template = Handlebars.compile(profileTemplate);
export const profileContent = template(profileData);
