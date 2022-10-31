import { IGetSearch } from 'apis/type';
import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';
import {
  IGetCollegePatientList,
  IGetPatientInfo,
  IGetPatientMemo,
  IGetStudentList,
  IPostPatientMemo,
} from './type';

export const getCollegeList = (request: IGetSearch) => {
  const url = `/admin/college/search?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getPatients = (request: IGetSearch) => {
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

export const getStudentList = (request: IGetStudentList) => {
  const url = `/main/admin/userSearch?size=20&${formatToRequestParameter(
    request
  )}`;
  return apiGateway.get(url);
};

export const getCollegePatientList = (request: IGetCollegePatientList) => {
  const url = `/main/admin/patientSearch?size=20&${formatToRequestParameter(
    request
  )}`;
  return apiGateway.get(url);
};
