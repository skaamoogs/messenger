const profileTableTemplate = `
<div class="profile-table {{ className }}">
  {{#each fields}}
    {{{ this }}}
  {{/each}}
</div>
`;

export default profileTableTemplate;
