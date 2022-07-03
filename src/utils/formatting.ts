import queryString from 'query-string';
import snakecaseKeys from 'snakecase-keys';

export const formatToRequestParameter = (params: object) =>
  queryString.stringify(snakecaseKeys(params));

export const formatToSearchQueryObject = (query: string) =>
  queryString.parse(query);
