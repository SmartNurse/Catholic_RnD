import { parse } from 'query-string';

export const getSearchQuery = (search: string) => {
  return parse(search);
};
