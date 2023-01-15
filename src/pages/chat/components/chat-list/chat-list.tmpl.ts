const chatListTemplate = `
  <div class="chat-list-container">
    <div class="chat-list">
      {{#each chatList}}
        {{{this}}}
      {{/each}}
    </div>
    <div class="add-chat-button">{{{addButton}}}</div>
  </div>
`;

export default chatListTemplate;
