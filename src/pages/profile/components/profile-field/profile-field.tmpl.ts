const profileFieldTemplate = `
<div class="field {{ className }}">
  {{#ifEqual type "user"}}
    <span class="profile-table-cell">{{ userText }}</span>
    <span class="profile-table-cell">
      {{#if change}}
        {{{ userInput }}}
      {{else}}
        user data
      {{/if}}
    </span>
  {{/ifEqual}}
  {{#ifEqual type "config"}}
    <span class="profile-table-cell">
      {{{ link }}}
    </span>
  {{/ifEqual}}
  {{#ifEqual type "password"}}
    <span class="profile-table-cell">{{ passwordText }}</span>
    <span class="profile-table-cell">{{{ passwordInput }}}></span>
  {{/ifEqual}}
</div>
`;

export default profileFieldTemplate;
