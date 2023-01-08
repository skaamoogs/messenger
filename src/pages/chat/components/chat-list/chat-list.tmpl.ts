const chatListTemplate = `
  <div class="chat-list-container">
    <nav class="profile-nav">
      {{{profileLink}}}
    </nav>
    {{{searchInput}}}
    <div class="chat-list">
      {{#each chatList}}
        {{{this}}}
      {{/each}}
    </div>
  </div>
`;

export default chatListTemplate;
