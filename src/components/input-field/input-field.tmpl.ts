const inputFieldTemplate = `
    <div class="{{inputFieldClassName}}">
      <label class="{{ labelClassName }}" for="{{ inputProps.name }}">{{ label }}</label>
      {{{input}}}
      {{{error}}}
    </div>;
`;
export default inputFieldTemplate;
