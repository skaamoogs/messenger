const errorPageTemplate = `
<div class="error-page">
    <div class="error-page-content">
        <p class="error-code">{{errorCode}}</p>
        <p class="error-description">{{errorDescription}}</p>
        <nav>{{{link}}}</nav>
    </div>
</div>`;

export default errorPageTemplate;
