export const userFieldsTemplate = `
<table class="profile-table user-data-table">
    <tbody>
    {{#each userFields}}
        <tr>
            <td class="profile-table-cell">{{this}}</td>
            <td class="profile-table-cell">user data</td>
        </tr>
    {{/each}}
    </tbody>
</table>
`;
