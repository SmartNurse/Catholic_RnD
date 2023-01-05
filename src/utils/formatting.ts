import format from 'date-fns/format';
import queryString from 'query-string';

export const formatToRequestParameter = (params: object) =>
  queryString.stringify(params);

export const formatToSearchQueryObject = (query: string) =>
  queryString.parse(query);

export const formatWithComma = (num: number) =>
  String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatStringToDate = (
  date: string,
  formatting = 'yyyy-MM-dd HH:mm'
) => {
  const newDate = new Date(date);
  if (newDate.toString() === 'Invalid Date') return 'Invalid Date';
  return format(newDate, formatting);
};

export const formatTimeStrToNum = (
  time: string
) => {
  const hh = Number(time.slice(0, 2));
  const mm = Number(time.slice(3, 5));
  const apm = time.slice(6);

  if (apm === "PM") return (hh + 12) * 60 + mm;
  else return hh * 60 + mm;
}