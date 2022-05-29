export interface User {
  name: string,
  avatar: string
};

export function getUserData(): User {
  const item: unknown = localStorage.getItem('user');

  if (typeof item === 'string') return JSON.parse(item);
  return ({ name: '', avatar: '' });
}

export function getFavoritesAmount(): number {
  const item: unknown = localStorage.favoritesAmount;

  return !!item ? localStorage.favoritesAmount : 0;
}




