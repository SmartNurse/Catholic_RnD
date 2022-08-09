type TLocalStorageKey = 'USER_EMAIL' | string;

export const getLocalStorage = (storageKey: TLocalStorageKey) =>
  localStorage.getItem(storageKey) || '';

export const setLocalStorage = (storageKey: TLocalStorageKey, value: string) =>
  value && localStorage.setItem(storageKey, value);

export const removeLocalStorage = (storageKey: TLocalStorageKey) =>
  localStorage.removeItem(storageKey);
