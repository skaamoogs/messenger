export const errorPageTemplate = `
<div class="error-page">
    <div class="error-page-content">
        <p class="error-code">{{errorCode}}</p>
        <p class="error-description">{{errorDescription}}</p>
        <a href="{{link}}" class="error-page-link">{{linkText}}</a>
    </div>
</div>`;
