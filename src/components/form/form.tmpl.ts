const formTemplate = `
<div class="form-container">
    <form class="registration-form" id="registration-form">
        <h2 class="registration-form-title">{{ title }}</h2>
        {{#each inputFields}}
            {{{ this }}}
        {{/each}}
    <div class="button-container">    
      {{{ button }}}
      {{{ link }}}
    </form>
  </div>
</div>
`;

export default formTemplate;
