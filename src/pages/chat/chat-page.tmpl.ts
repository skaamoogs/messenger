const chatPageTemplate = `
<div class="chat-page">
  <aside class="aside-container">
    <nav class="profile-nav">
      {{{profileLink}}}
    </nav>
    {{{searchInput}}}
    {{{chatList}}}
  </aside>
  <div class="chat-area">
    {{#if selectedChat}}
      <div class="chat-area-header">
        <div class="user-info">
        {{#if selectedChat.avatar}}
          {{{userAvatar}}}
        {{else}}
          <div class="empty-circle">
          </div>
        {{/if}}
          <span class="bold-text user-info-name">{{selectedChat.title}}</span>
        </div>
        {{{settingsButton}}}
      </div>
      {{{settings}}}
      {{{messenger}}}
    {{else}}
      <div class="chat-plug">
        <p>{{plugText}}</p>
      </div>
    {{/if}}
  </div>
  {{{popup}}}
</div>`;

export default chatPageTemplate;
