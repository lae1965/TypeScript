import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { User, getUserData, getFavoritesAmount } from './getUser.js';
import { searchFormData } from './search-form-data.js';

window.addEventListener('DOMContentLoaded', () => {
  const user: User = getUserData();

  renderUserBlock(user.name, user.avatar, getFavoritesAmount());
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  );
  const element = document.getElementById('search');
  element.onclick = searchFormData;
});
