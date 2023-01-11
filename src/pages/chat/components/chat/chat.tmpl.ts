const chatTemplate = `
<div class="chat-container {{#if selected}}selected-chat-container{{/if}} id={{id}}">
  {{#if last_message.user.avatar}}
    {{{avatar}}}
  {{else}}
    <div class="empty-circle">
    </div>
  {{/if}}
  <div class="chat-content">
    <div class="chat-header">
        <span class="bold-text message-author">{{title}}</span>
      <div class="chat-header-right-side">
        <span class="message-time">{{last_message.time}}</span>
        {{#if selected}}{{{delButton}}}{{/if}}
      </div>
    </div>
    <div class="message-container">
      <p class="message-text">{{last_message.content}}</p>
      {{#if unread_count}}
        <div class="unread-msg-count">
          <span>{{unread_count}}</span>
        </div>
      {{/if}}
    </div>
  </div>
</div>
`;

export default chatTemplate;
