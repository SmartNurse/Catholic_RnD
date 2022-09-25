import queryString from 'query-string';

export const formatToRequestParameter = (params: object) =>
  queryString.stringify(params);

export const formatToSearchQueryObject = (query: string) =>
  queryString.parse(query);

export const formatWithComma = (num: number) =>
  String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
