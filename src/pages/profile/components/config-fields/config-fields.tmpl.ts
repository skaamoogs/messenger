const configFieldsTemplate = `
<table class="profile-table configuration-table">
  <tbody>
    {{#each fields}}
      <tr class="configuration-row">
        <td class="profile-table-cell">
        <label class="{{ labelClassName }}" for="{{ name }}">{{ label }}</label>
        {{{ this }}}
        </td>
      </tr>
    {{/each}}
  </tbody>
</table>`;

export default configFieldsTemplate;
