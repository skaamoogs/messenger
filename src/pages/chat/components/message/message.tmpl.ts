const messageTemplate = `
<div class="main-message-container {{#if isMine}}my-message{{/if}}">
  <p class="main-message-text">
    {{content}}
  </p>
  <div class="message-meta-info">
    {{#ifCond is_read '&&' isMine}}
      <img class="read-mark-image" src="{{readMarkImage}}" alt="read mark" />
    {{/ifCond}}
    <span class="send-time {{#if isMine}}ny-message-time{{/if}}">{{time}}</span>
  </div>
</div>
`;

export default messageTemplate;
