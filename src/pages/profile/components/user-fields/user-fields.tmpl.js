export const userFieldsTemplate = `
<table class="profile-table user-data-table">
    <tbody>
    {{#each userFields}}
        <tr>
            <td>{{this}}</td>
            <td>user data</td>
        </tr>
    {{/each}}
    </tbody>
</table>
`;
