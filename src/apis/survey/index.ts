import camelcaseKeys from 'camelcase-keys';

import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';
import {
  IGetSurvey,
  ICreateHospitalization,
  ICreateOutHospital,
  IUpdateMedication,
  IUpdateFall,
  IUpdateBedScore,
  IUpdateNeeds,
} from './type';

export const getHospitalization = (request: IGetSurvey) => {
  const url = `/survey/hospital?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const createHospitalization = (request: ICreateHospitalization) => {
  const url = `/survey/hospital`;
  return apiGateway.post(url, camelcaseKeys(request));
};

export const getOutHospital = (request: IGetSurvey) => {
  const url = `/survey/out/hospital?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const createOutHospital = (request: ICreateOutHospital) => {
  const url = `/survey/out/hospital`;
  return apiGateway.post(url, camelcaseKeys(request));
};

export const getMedication = (request: IGetSurvey) => {
  const url = `/survey/medication?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateMedication = (request: IUpdateMedication) => {
  const url = `/survey/medication`;
  return apiGateway.post(url, camelcaseKeys(request));
};

export const getRadiology = (request: IGetSurvey) => {
  const url = `/survey/radiology?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getPathology = (request: IGetSurvey) => {
  const url = `/survey/pathology?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const getBedScore = (request: IGetSurvey) => {
  const url = `/survey/bedsore?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateBedScore = (request: IUpdateBedScore) => {
  const url = `/survey/bedsore`;
  return apiGateway.post(url, camelcaseKeys(request));
};

export const getNeeds = (request: IGetSurvey) => {
  const url = `/survey/needs?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateNeeds = (request: IUpdateNeeds) => {
  const url = `/survey/needs`;
  return apiGateway.post(url, camelcaseKeys(request));
};

export const getFall = (request: IGetSurvey) => {
  const url = `/survey/fall?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateFall = (request: IUpdateFall) => {
  const url = `/survey/fall`;
  return apiGateway.post(url, camelcaseKeys(request));
};
