import { getFavoriteAmount } from './favoriteItems.js';
import { User } from './getUser.js';
import { renderBlock } from './lib.js';

export function renderUserBlock({name, avatar}: User): void {
  const favoriteItemsAmount = getFavoriteAmount();
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount.toString() : 'ничего нет';
  const hasFavoriteItems = !!favoriteItemsAmount;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="${name}" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}
