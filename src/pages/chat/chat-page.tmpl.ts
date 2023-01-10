const chatPageTemplate = `
<div class="chat-page">
  {{{chatList}}}
  <div class="chat-area">
    {{#if selectedChat}}
      <div class="chat-area-header">
        <div class="user-info">
          {{{userAvatar}}}
          <span class="bold-text user-info-name">{{userProps.name}}</span>
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
