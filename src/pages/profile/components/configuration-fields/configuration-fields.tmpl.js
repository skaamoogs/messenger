export const configurationFieldsTemplate = `
<table class="profile-table configuration-table">
    <tbody>
        {{#each configFields}}
        <tr>
            <td><a href="{{this.path}}">{{this.text}}</a></td>
        </tr>
        {{/each}}
    </tbody>
</table>`;
