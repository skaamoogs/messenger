const configFieldsTemplate = `
<nav class="config-links">
  <ul class="config-link-list">
  {{#each fields}}
    <li class="link-item">{{{ this }}}</li>
  {{/each}}
  </ul>
</nav>
`;

export default configFieldsTemplate;
