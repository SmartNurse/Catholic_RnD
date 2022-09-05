import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';
import {
  IGetNandaClass,
  IGetNandaDiagnosis,
  ICreateNursingRecord,
  IGetNursingRecords,
  IDeleteNursingRecord,
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

export const getNursingRecords = (request: IGetNursingRecords) => {
  const url = `/main/nursing_records?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};
