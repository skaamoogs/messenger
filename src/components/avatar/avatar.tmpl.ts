const avatarTemplate = `
<div class="{{className}}">
  <img class="{{imageClassName}}" src={{src}} alt="{{alt}}" id={{id}} />
  {{#if changeAvatarText}}
    <div class="{{maskClassName}}"><span>{{{changeAvatarText}}}</span></div>
  {{/if}}
</div>
`;

export default avatarTemplate;
