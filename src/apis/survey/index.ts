import camelcaseKeys from 'camelcase-keys';

import apiGateway from '../axios';
import { formatToRequestParameter } from '../../utils/formatting';
import { ICreateHospitalization, IGetHospitalization } from './type';

export const getHospitalization = (request: IGetHospitalization) => {
  const url = `/survey/hospital?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const createHospitalization = (request: ICreateHospitalization) => {
  const url = `/survey/hospital`;
  return apiGateway.post(url, camelcaseKeys(request));
};
