const chatTemplate = `
<div class="chat-container {{#if selected}}selected-chat-container{{/if}}">
  {{#if messageAvatar}}
    {{{messageAvatar}}}
  {{else}}
    <div class="empty-circle" id="change_chat_avatar">
    </div>
  {{/if}}
  <div class="chat-content">
    <div class="chat-header">
        <span class="bold-text message-author">{{title}}</span>
      <div class="chat-header-right-side">
        <span class="message-time">{{message.time}}</span>
        {{#if selected}}
          {{#if isDeleteAllowed}}
            {{{delButton}}}
          {{/if }}
        {{/if}}
      </div>
    </div>
    <div class="message-container">
      <p class="message-text">
        {{#if isLastMessageMine}}
          <span class="bold-black-text">Вы:</span>
        {{/if}}
        {{message.content}}
      </p>
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
