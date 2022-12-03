const popupTemplate = `
<div class="page-mask">
  <form class="popup-content">
    <p class="title">{{ title }}</p>
    {{{input}}}
    {{{text}}}
    {{{button}}}
    {{{error}}}
  </form>
</div>
`;

export default popupTemplate;
