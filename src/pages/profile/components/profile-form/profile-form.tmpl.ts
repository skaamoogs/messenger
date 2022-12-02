const profileFormTemplate = `
<form action="{{route}}" class="profile-form">
  {{{error}}}
  {{{user}}}
  {{{password}}}
  {{{errorPassword}}}
  {{{saveButton}}}
</form>`;

export default profileFormTemplate;
