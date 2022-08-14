import apiGateway from '../axios';
import { formatToRequestParameter } from '../../utils/formatting';
import { IGetHospitalization } from './type';

export const getHospitalization = (request: IGetHospitalization) => {
  const url = `/survey/hospital?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};
