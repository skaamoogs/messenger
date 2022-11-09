export const passwordFieldsTemplate = `
<table class="profile-table user-data-table">
    <tbody>
    {{#each passwordFields}}
        <tr>
            <td>{{this.text}}</td>
            <td><input type="{{this.type}}" name="{{this.name}}"></td>
        </tr>
    {{/each}}
    </tbody>
</table>
`;
