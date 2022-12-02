const formTemplate = `
<div class="form-container">
    <form class="registration-form" id="registration-form" action="/">
        <h2 class="registration-form-title">{{ title }}</h2>
        {{{error}}}
        {{#each inputFields}}
            {{{ this }}}
        {{/each}}
        {{{errorPassword}}}
    <div class="button-container">    
      {{{ button }}}
      {{{ link }}}
    </form>
    {{{ linkToChat }}}
  </div>
</div>
`;

export default formTemplate;
