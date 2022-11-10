export const passwordFieldsTemplate = `
<table class="profile-table user-data-table">
    <tbody>
    {{#each passwordFields}}
        <tr>
            <td class="profile-table-cell">{{this.text}}</td>
            <td class="profile-table-cell"><input class="input" type="{{this.type}}" name="{{this.name}}"></td>
        </tr>
    {{/each}}
    </tbody>
</table>
`;
