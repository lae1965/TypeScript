export interface User {
  name: string,
  avatar: string
}

export function getUserData(): User {
  const item: unknown = localStorage.getItem('user');

  if (typeof item === 'string') return JSON.parse(item);
  return ({ name: '', avatar: '' });
}




