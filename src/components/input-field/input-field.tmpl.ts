const inputFieldTemplate = `
    <div class="{{inputFieldClassName}}">
      <label class="{{ labelClassName }}" for="{{ inputProps.name }}">{{ label }}</label>
      {{{input}}}
      {{#if valid}}<p class="error-message">{{errorMessage}}</p>{{/if}}
    </div>;
`;
export default inputFieldTemplate;
