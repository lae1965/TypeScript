//import { places } from './util.js';
import { renderUserBlock } from './user.js';
import { getUserData } from './getUser.js';
import { searchResult } from './providersSearch.js';

export interface FavoriteItem {
  id: number;
  image: string;
  name: string;
}

export let favoritesAmount: number;

export function getFavoriteItems(): FavoriteItem[] | null {
  const item: unknown = localStorage.getItem('favoriteItems');

  if (typeof item === 'string') return JSON.parse(item);
  return null;
}

export function setFavoriteItems(favoriteItems: FavoriteItem[]): void { 
  if(favoriteItems.length) localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  else localStorage.removeItem('favoriteItems');
}

export function toggleFavoriteItem(event: Event) {
  const target = event.target as Element;
  const id = target.closest('.result').getAttribute('data-id');
  let favoriteItems = getFavoriteItems();
  if (!target.classList.contains('active')) {
    const find = searchResult.find((el: { id: { toString: () => string; }; }) => el.id.toString() === id);
    if (!find) throw new Error('Что-то пошло не так');
    const newitem: FavoriteItem = {
      id: find.id,
      image: find.image,
      name: find.name
    };
    if (favoriteItems == null) favoriteItems = [{...newitem }];
    else favoriteItems.push(newitem);
    
    setFavoriteItems(favoriteItems);
  } else {
    const findIndex = favoriteItems.findIndex(el => el.id.toString() === id);
    favoriteItems.splice(findIndex, 1);

    setFavoriteItems(favoriteItems);
  }
  target.classList.toggle('active');
  renderUserBlock(getUserData());
}

export function getFavoriteAmount(): number {
  const favoriteItems = getFavoriteItems();
  if (favoriteItems == null) return 0;
  return favoriteItems.length;
}
