import { IGetSearch } from 'apis/type';
import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';
import {
  IGetPatientList,
  IGetPatientInfo,
  IGetPatientMemo,
  IGetStudentList,
  IPostPatientMemo,
  IGetPatientBarcode,
} from './type';

export const getCollegeList = (request: IGetSearch) => {
  const url = `/admin/college/search?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getPatients = (request: IGetPatientList) => {
  const searchType = isNaN(Number(request.keyword)) ? 1 : 2;
  const url = `/admin/patients/search?${formatToRequestParameter({
    ...request,
    searchType,
  })}`;
  return apiGateway.get(url);
};

export const getPatientInfo = (request: IGetPatientInfo) => {
  const url = `/main/patient_info?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getPatientBarcode = (request: IGetPatientBarcode) => {
  const url = `main/get_barcode?${formatToRequestParameter(request)}`;
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
  const url = `/main/admin/userSearch?size=100&${formatToRequestParameter(
    request
  )}`;
  return apiGateway.get(url);
};

export const getCollegePatientList = (request: IGetPatientList) => {
  const searchType = isNaN(Number(request.keyword)) ? 1 : 2;
  const url = `/main/admin/patientSearch?size=100&${formatToRequestParameter({
    ...request,
    searchType,
  })}`;
  return apiGateway.get(url);
};
