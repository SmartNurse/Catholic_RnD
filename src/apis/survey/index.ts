import camelcaseKeys from 'camelcase-keys';

import apiGateway from '../axios';
import { formatToRequestParameter } from '../../utils/formatting';
import {
  ICreateHospitalization,
  ICreateOutHospital,
  IGetHospitalization,
  IGetOutHospital,
} from './type';

export const getHospitalization = (request: IGetHospitalization) => {
  const url = `/survey/hospital?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const createHospitalization = (request: ICreateHospitalization) => {
  const url = `/survey/hospital`;
  return apiGateway.post(url, camelcaseKeys(request));
};

export const getOutHospital = (request: IGetOutHospital) => {
  const url = `/survey/out/hospital?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const createOutHospital = (request: ICreateOutHospital) => {
  const url = `/survey/out/hospital`;
  return apiGateway.post(url, camelcaseKeys(request));
};
