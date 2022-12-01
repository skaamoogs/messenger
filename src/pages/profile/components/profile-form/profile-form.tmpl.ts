const profileFormTemplate = `
<form action="{{route}}" class="profile-form">
  {{{error}}}
  {{{user}}}
  {{{password}}}
  {{{saveButton}}}
</form>`;

export default profileFormTemplate;
