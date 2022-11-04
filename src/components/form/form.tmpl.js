export const formTemplate = `
<div class="form-container">
    <form action="" id="login-form">
        <h2 class="form-title">{{title}}</h2>
        {{#each inputs}}
        <label for="{{this.name}}">{{this.label}}</label>
        <input id="{{this.name}}" type="{{this.type}}" name="{{this.name}}">
        {{/each}}
    </form>
    <div class="button-container">    
        <button class="primary-button" form="login-form">{{buttonName}}</button>
        <a href={{route}} );">{{footerText}}</a>
    </div>
</div>
`;
