const errorPageTemplate = `
<div class="error-page">
    <div class="
        <p class="error-code">{{errorCode}}</p>
        <p class="error-description">{{errorDescription}}</p>
        <a class="anchor" href="{{link}}" class="error-page-link">{{linkText}}</a>
    </div>
</div>`;

export default errorPageTemplate;
