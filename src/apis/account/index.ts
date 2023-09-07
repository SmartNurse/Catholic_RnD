import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';
import {
  IGetUserInfo,
  IPostAccountCreateRequest,
  IPostChangePassword,
  IPostLoginRequest,
  IPostSendMailRequest,
  IPostVerifyMailRequest,
} from './type';

export const getUserInfo = (request: IGetUserInfo) => {
  const url = `/account/info?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const postSendMail = (request: IPostSendMailRequest) => {
  const url = `/account/send_mail?${formatToRequestParameter(request)}`;
  return apiGateway.post(url);
};

export const postVerifyMail = (request: IPostVerifyMailRequest) => {
  const url = `/account/verify_mail?${formatToRequestParameter(request)}`;
  return apiGateway.post(url);
};

export const postAccountCreate = (request: IPostAccountCreateRequest) => {
  const url = `/account/create`;
  return apiGateway.post(url, request);
};

export const postLogin = (request: IPostLoginRequest) => {
  const url = `/account/login?${formatToRequestParameter(request)}`;
  return apiGateway.post(url);
};

export const postChangePassword = (request: IPostChangePassword) => {
  const url = `/account/changePersonalInformation`;
  return apiGateway.post(url, request);
};
