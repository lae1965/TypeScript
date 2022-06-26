import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { getUserData } from './getUser.js';
import { providersSearch } from './providersSearch.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData());
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  );
  const element = document.getElementById('search');
  if (element) element.onclick = providersSearch;
});
