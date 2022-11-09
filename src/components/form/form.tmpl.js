import { ROUTES } from "../../const";

export const formTemplate = `
<div class="form-page">
    <div class="form-container">
        <form action="${ROUTES.chat}" id="login-form">
            <h2 class="form-title">{{title}}</h2>
            {{#each inputs}}
            <label for="{{this.name}}">{{this.label}}</label>
            <input id="{{this.name}}" type="{{this.type}}" name="{{this.name}}">
            {{/each}}
        </form>
        <div class="button-container">    
            <button class="primary-button" form="login-form" type="submit">{{buttonName}}</button>
            <a href={{route}} );">{{footerText}}</a>
        </div>
    </div>
</div>
`;
