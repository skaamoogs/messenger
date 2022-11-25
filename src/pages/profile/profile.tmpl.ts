import ROUTES from "../../const";

const currentPath = window.location.pathname;

const profileTemplate = `
<div class="profile-page">
    <div class="back-button-container">
        <form action="${ROUTES.chat}">
            <button class="round-button" type="submit"><img src={{leftArrowImage}} alt="left arrow" /></button>
        </form>
    </div>
    <div class="profile-container">
        <div class="avatar-container">
            <img class="avatar-image" src={{emptyAvatarImage}} alt="empty avatar" />
            <div class="avatar-mask"><span>{{{changeAvatarText}}}</span></div>
        </div>
        {{#if ${currentPath === ROUTES.profile}}}
          <h3 class="user-name">Александр</h3>
        {{/if}}
        {{#if ${currentPath !== ROUTES.password}}}
            {{{ user }}}
            {{#if ${currentPath !== ROUTES.data}}}
                {{{ config }}}
            {{/if}}
        {{else}}
            {{{ password }}}
        {{/if}}
        {{#if ${currentPath !== ROUTES.profile}}}
            <form action="${ROUTES.profile}">
                {{{ saveButton }}}
            </form>
        {{/if}}
    </div>
</div>
`;

export default profileTemplate;
