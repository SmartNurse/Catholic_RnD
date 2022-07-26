type TLocalStorageKey = 'USER_EMAIL';

export const getLocalStorage = (storageKey: TLocalStorageKey) =>
  localStorage.getItem(storageKey) || '';

export const setLocalStorage = (storageKey: TLocalStorageKey, value: string) =>
  value && localStorage.setItem(storageKey, value);

export const removeLocalStorage = (storageKey: TLocalStorageKey) =>
  localStorage.removeItem(storageKey);

type TSessionStorageKey = 'AUTH_TOKEN';

export const getSessionStorage = (storageKey: TSessionStorageKey) =>
  sessionStorage.getItem(storageKey) || '';

export const setSessionStorage = (
  storageKey: TSessionStorageKey,
  value: string
) => value && sessionStorage.setItem(storageKey, value);

export const removeSessionStorage = (storageKey: TSessionStorageKey) =>
  sessionStorage.removeItem(storageKey);
