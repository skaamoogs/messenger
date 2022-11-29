const passwordFieldsTemplate = `
<table class="profile-table user-data-table">
    <tbody>
        <tr>
          <td class="profile-table-cell">{{oldText}}</td>
          <td class="profile-table-cell">{{{oldInput}}}</td>
        </tr>
        <tr>
          <td class="profile-table-cell">{{newText}}</td>
          <td class="profile-table-cell">{{{newInput}}}</td>
        </tr>
        <tr>
          <td class="profile-table-cell">{{confirmText}}</td>
          <td class="profile-table-cell">{{{confirmInput}}}</td>
        </tr>
    </tbody>
</table>
`;

export default passwordFieldsTemplate;
