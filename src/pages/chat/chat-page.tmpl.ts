const chatPageTemplate = `
<div class="chat-page">
  {{{chatList}}}
  <div class="chat-area">
    <div class="chat-area-header">
      <div class="user-info">
        {{{userAvatar}}}
        <span class="bold-text user-info-name">{{userProps.name}}</span>
      </div>
      {{{settingsButton}}}
    </div>
    {{{settings}}}
    {{{messenger}}}
  </div>
  {{{popup}}}
</div>`;

export default chatPageTemplate;
