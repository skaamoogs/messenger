const errorPageTemplate = `
<div class="error-page">
    <div class="error-page-content">
        <p class="error-code">{{errorCode}}</p>
        <p class="error-description">{{errorDescription}}</p>
        {{{link}}}
        <a class="anchor error-page-link" href="{{link}}" >{{linkText}}</a>
    </div>
</div>`;

export default errorPageTemplate;
