export const chatTemplate = `
<div class="chat-page">
  <div class="chat-list-container">
    <a class="profile-link" href={{profileRoute}}>Профиль &gt;</a>
    <input class="chat-search-field" type="search" placeholder="Поиск" />
    <div class="chat-list">
      <div class="chat-container">
        <img
          class="avatar author-avatar"
          src="{{message.avatar}}"
          alt="author avatar"
        />
        <div class="chat-content">
          <div class="chat-header">
            <span class="bold-text message-author">{{message.author}}</span>
            <span class="message-time">{{message.time}}</span>
          </div>
          <div class="message-container">
            <span class="message-text">{{message.text}}</span>
            <div class="unread-msg-count">
              <span>{{message.unreadCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="chat-area">
    <div class="chat-area-header">
      <div class="user-info">
        <img class="avatar" src="/images/avatar.jpg" alt="user avatar" />
        <span class="bold-text">{{user.name}}</span>
      </div>
      <div class="user-settings-icon">
        {{#times 3}}
          <span>&#8226;</span>
        {{/times}}
      </div>
    </div>
    <div class="chat-area-main">
    </div>
    <div class="chat-area-message-container">
      <img class="clip-icon" src="/images/clip-icon.svg" alt="" />
      <input
        class="chat-area-message-input"
        type="text"
        name="{{user.message.inputName}}"
        id="{{user.message.inputName}}"
        placeholder="{{user.message.placeholder}}"
      />
      <form>
        <button class="round-button" type="submit"><img
            src="/images/arrow-right.svg"
            alt="right arrow"
          /></button>
      </form>
    </div>
  </div>
</div>`;