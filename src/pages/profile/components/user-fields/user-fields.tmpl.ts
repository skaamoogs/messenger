const userFieldsTemplate = `
<table class="profile-table user-data-table">
    <tbody>
    {{#each inputs}}
        <tr>
            <td class="profile-table-cell">
             {{{this}}}
            </td>
        </tr>
    {{/each}}
    </tbody>
</table>
`;

export default userFieldsTemplate;
