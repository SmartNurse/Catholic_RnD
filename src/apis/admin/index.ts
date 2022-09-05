import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';
import {
  IGetCollegeLists,
  IGetPatientInfo,
  IGetPatientMemo,
  IGetPatients,
  IPostPatientMemo,
} from './type';

export const getCollegeLists = (request: IGetCollegeLists) => {
  const url = `/admin/college/search?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getPatients = (request: IGetPatients) => {
  const url = `/admin/patients/search?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getPatientInfo = (request: IGetPatientInfo) => {
  const url = `/main/patient_info?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getPatientMemo = (request: IGetPatientMemo) => {
  const url = `/main/memo?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const postPatientMemo = (request: IPostPatientMemo) => {
  const url = `/main/memo?${formatToRequestParameter(request)}`;
  return apiGateway.post(url);
};
