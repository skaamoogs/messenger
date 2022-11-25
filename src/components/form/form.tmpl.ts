import ROUTES from "../../const";

const formTemplate = `
<div class="form-container">
    <form class="registration-form" action="${ROUTES.chat}" id="registration-form">
        <h2 class="registration-form-title">{{ title }}</h2>
        {{#each inputs}}
            {{{ this }}}
        {{/each}}
    </form>
    <div class="button-container">    
        {{{ button }}}
        {{{ link }}}
    </div>
</div>
`;

export default formTemplate;
