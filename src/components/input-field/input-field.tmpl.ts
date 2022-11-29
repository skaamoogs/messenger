const inputFieldTemplate = `
    <div class="{{inputFieldClassName}}">
      <label class="{{ labelClassName }}" for="{{ inputProps.name }}">{{ label }}</label>
      {{{input}}}
      {{#unless valid}}<p class="error-message">{{errorMessage}}</p>{{/unless}}
    </div>;
`;
export default inputFieldTemplate;
