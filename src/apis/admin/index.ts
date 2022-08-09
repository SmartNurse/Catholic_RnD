import apiGateway from '../axios';
import { formatToRequestParameter } from '../../utils/formatting';
import { IGetCollegeLists } from './type';

export const getCollegeLists = (request: IGetCollegeLists) => {
  const url = `/admin/college/search?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};
