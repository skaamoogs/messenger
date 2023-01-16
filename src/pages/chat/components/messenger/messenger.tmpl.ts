const messengerTemplate = `
<div class="messenger-container">
  <div class="messenger-main">
    <div class="empty-message"></div>
    {{#each messenger}}
      {{{this}}}
    {{/each}}
  </div>
  {{{sendMessage}}}
</div>
`;
export default messengerTemplate;
