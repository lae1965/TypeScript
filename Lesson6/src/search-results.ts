import { renderBlock } from './lib.js';
import { FavoriteItem, getFavoriteItems, setFavoriteItems, toggleFavoriteItem } from './favoriteItems.js';
import { getUserData } from './getUser.js';
import { renderUserBlock } from './user.js';
import { bookingRequest } from './bookingRequest.js';
import { SearchResult } from './providersSearch.js';
import { SortMethod, sortSearchResult } from './sortSearchResult.js';

export function renderSearchStubBlock(): void {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  );
}

export function renderEmptyOrErrorSearchBlock(reasonMessage: string): void {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  );
}

export function renderSearchResultsBlock(results: SearchResult[], sortOption: SortMethod = 0): void {
  if (!results.length) {
    renderEmptyOrErrorSearchBlock('По Вашему запросу ничего не найдено');
    localStorage.removeItem('favoriteItems');
    renderUserBlock(getUserData());
    return;
  }
  let html = `
    <div class="search-results-header">
      <p>Результаты поиска</p>
      <div class="search-results-filter">
        <span><i class="icon icon-filter"></i> Сортировать:</span>
        <select id="select">
          <option selected>Без сортировки</option>
          <option>Сначала дешёвые</option>
          <option>Сначала дорогие</option>
          <option>Сначала ближе</option>
        </select>
      </div>
    </div>
    <ul class="results-list">
  `;

  results.forEach(result => {
    html += `
    <li class="result" data-id=${result.uni_id}>
      <div class="result-container">
        <div class="result-img-container">
          <div class="favorites"></div>
          <img class="result-img" src=${result.image} alt="">
        </div>	
        <div class="result-info">
          <div class="result-info--header">
            <p>${result.name}</p>
            <p class="price">${result.price}&#8381;</p>
          </div>
          <div class="result-info--map"><i class="map-icon"></i> ${result.remoteness}км от Вас</div>
          <div class="result-info--descr">${result.description}</div>
          <div class="result-info--footer">
            <div>
              <button class="booking">Забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </li>
    `
  })

  html += '</ul>';

  renderBlock('search-results-block', html);

  const icons = document.getElementsByClassName('favorites');
  const favoriteItems = getFavoriteItems();
  const newFavoriteItems: FavoriteItem[] = [];
  for (let i = 0; i < icons.length; i++) {
    icons[i]?.addEventListener('click', toggleFavoriteItem);
    if (favoriteItems == null) continue;
    const find = favoriteItems.find(el => el.id.toString() === icons[i]?.getAttribute('data-id'));
    if (find) {
      icons[i]?.classList.add('active');
      newFavoriteItems.push(find);
    }
  }
  setFavoriteItems(newFavoriteItems);
  renderUserBlock(getUserData());

  const booking = document.getElementsByClassName('booking');
  for (let i = 0; i < booking.length; i++) booking[i]?.addEventListener('click', bookingRequest);

  const select = document.getElementById('select');
  if (select) {
    select.addEventListener('change', sortSearchResult);
    (select as HTMLSelectElement).selectedIndex = sortOption;
  }
}


