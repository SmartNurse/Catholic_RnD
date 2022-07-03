type TStorageKey = 'USER_EMAIL';

export const getLocalStorage = (storageKey: TStorageKey) =>
  localStorage.getItem(storageKey) || '';

export const setLocalStorage = (storageKey: TStorageKey, value: string) =>
  value && localStorage.setItem(storageKey, value);
