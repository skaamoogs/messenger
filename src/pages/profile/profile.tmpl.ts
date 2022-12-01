import ROUTES from "../../const";

const currentPath = window.location.pathname;

const profileTemplate = `
<div class="profile-page">
    <div class="back-button-container">
        <form action="${ROUTES.chat}">
          {{{backButton}}}        
        </form>
    </div>
    <div class="profile-container">
        {{{avatar}}}
        {{#if ${currentPath === ROUTES.profile}}}
          <h3 class="user-name">Александр</h3>
        {{/if}}
        {{{profileForm}}}
        {{{config}}}
    </div>
    {{{popup}}}
</div>
`;

export default profileTemplate;
