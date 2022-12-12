import camelcaseKeys from 'camelcase-keys';
import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';
import {
  IGetNandaClass,
  IGetNandaDiagnosis,
  ICreateNursingRecord,
  IGetNursingRecords,
  IDeleteNursingRecord,
  IUpdateNursingRecord,
} from './type';

export const getNandaDomain = () => {
  const url = `/main/nanda/domain`;
  return apiGateway.get(url);
};

export const getNandaClass = (request: IGetNandaClass) => {
  const url = `/main/nanda/class?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getNandaDiagnosis = (request: IGetNandaDiagnosis) => {
  const url = `/main/nanda/diagnosis?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const createNursingRecord = (request: ICreateNursingRecord) => {
  const url = `/main/create/nursing_record`;
  return apiGateway.post(url, request);
};

export const deleteNursingRecord = (request: IDeleteNursingRecord) => {
  const url = `/main/delete/nursing_record?${formatToRequestParameter(
    request
  )}`;
  return apiGateway.post(url);
};

export const updateNursingRecord = (request: IUpdateNursingRecord) => {
  const url = `/main/update/nursing_record`;
  return apiGateway.post(url, camelcaseKeys(request));
};

export const getNursingRecords = (request: IGetNursingRecords) => {
  const url = `/main/nursing_records?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};
