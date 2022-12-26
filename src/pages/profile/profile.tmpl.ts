import { ROUTES } from "../../const";
import router from "../../utils/route/router";

const pathname = router.getCurrentPathname();

const profileTemplate = `
<div class="profile-page">
    <div class="back-button-container">
      {{{backButton}}}        
    </div>
    <div class="profile-container">
        {{{avatar}}}
        {{#if ${pathname === ROUTES.profile}}}
          <h3 class="user-name">Александр</h3>
        {{/if}}
        {{{profileForm}}}
        {{{config}}}
    </div>
    {{{popup}}}
</div>
`;

export default profileTemplate;
