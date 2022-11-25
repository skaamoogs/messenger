const inputTemplate = `
<div class="input-container">
    {{#if label}}
      <label class="{{ labelClassName }}" for="{{ name }}">{{ label }}</label>
    {{/if}}
    <input class="input {{ inputClassName }}" id="{{ name }}" type="{{ type }}" name="{{ name }}">
</div>
`;

export default inputTemplate;
