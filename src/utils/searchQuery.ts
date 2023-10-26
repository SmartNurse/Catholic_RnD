import { parse, stringify } from 'query-string';

export const getSearchQuery = (search: string) => {
  return parse(search);
};

export const setSearchQuery = (search: object) => {
  return stringify(search);
};
