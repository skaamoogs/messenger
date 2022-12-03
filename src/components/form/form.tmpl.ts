import { ROUTES } from "../../const";

const formTemplate = `
<div class="form-container">
    <form class="registration-form" id="registration-form" action="${ROUTES.chat}">
      <h2 class="registration-form-title">{{ title }}</h2>
      {{{error}}}
      {{#each inputFields}}
          {{{ this }}}
      {{/each}}
      {{{errorPassword}}}
      <div class="button-container">{{{ button }}}</div>
    </form>
    <nav>
      <ul class="link-list">
        <li>{{{ link }}}</li>
        <li>{{{ linkToChat }}}</li>
      </ul>
    </nav>
</div>
`;

export default formTemplate;
