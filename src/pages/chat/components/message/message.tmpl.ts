const messageTemplate = `
<div class="main-message-container {{#if user}}user-message{{/if}}">
  <p class="main-message-text">
    {{messageText}}
  </p>
  {{#if isRead}}
    <img class="read-mark-image" src="{{readMarkImg}}" alt="read mark" />
  {{/if}}
  <span class="send-time {{#if user}}user-message-time{{/if}}">{{sendTime}}</span>
</div>
`;

export default messageTemplate;
