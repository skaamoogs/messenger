const chatPageTemplate = `
<div class="chat-page">
  <div class="chat-list-container">
    {{{profileLink}}}
    {{{searchInput}}}
    <div class="chat-list">
      {{{chat}}}
    </div>
  </div>
  <div class="chat-area">
    <div class="chat-area-header">
      <div class="user-info">
        {{{userAvatar}}}
        <span class="bold-text user-info-name">{{user.name}}</span>
      </div>
      <div class="user-settings-icon">
        {{#times 3}}
          <span class="user-settings-symbol">&#8226;</span>
        {{/times}}
      </div>
    </div>
    <div class="chat-area-main">
    </div>
    <div class="chat-area-message-container">
      <img class="clip-icon" src="{{clipIcon}}" alt="" />
      {{{messageInput}}}
      <form class="send-message-form">
        {{{sendMessageButton}}}
      </form>
    </div>
  </div>
</div>`;

export default chatPageTemplate;
