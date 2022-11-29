const chatTemplate = `
<div class="chat-container">
  {{{avatar}}}
  <div class="chat-content">
    <div class="chat-header">
      <span class="bold-text message-author">{{author}}</span>
      <span class="message-time">{{time}}</span>
    </div>
    <div class="message-container">
      <span class="message-text">{{text}}</span>
      <div class="unread-msg-count">
        <span>{{unreadCount}}</span>
      </div>
    </div>
  </div>
</div>
`;

export default chatTemplate;
