import { ROUTES } from "../../const";

export const formTemplate = `
<div class="form-page">
    <div class="form-container">
        <form class="registration-form" action="${ROUTES.chat}" id="registration-form">
            <h2 class="form-title">{{title}}</h2>
            {{#each inputs}}
            <label class="registration-input-label" for="{{this.name}}">{{this.label}}</label>
            <input class="registration-form-input" id="{{this.name}}" type="{{this.type}}" name="{{this.name}}">
            {{/each}}
        </form>
        <div class="button-container">    
            <button class="primary-button" form="registration-form" type="submit">{{buttonName}}</button>
            <a class="registration-form-link" href={{route}} );">{{footerText}}</a>
        </div>
    </div>
</div>
`;
