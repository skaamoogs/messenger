const messengerTemplate = `
<div class="messenger-container">
  <div class="messenger-main">
    {{#each messenger}}
      {{{this}}}
    {{/each}}
  </div>
  <div class="send-message-container">
    <img class="clip-icon" src="{{clipIcon}}" alt="" />
    {{{messageInput}}}
    {{{sendMessageButton}}}
  </div>
</div>
`;
export default messengerTemplate;
