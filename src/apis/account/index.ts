import { formatToRequestParameter } from '../../utils/formatting';
import apiGateway from '../axios';
import { IPostLoginRequest, IPostSendEmailRequest } from './type';

export const postSendEmail = (request: IPostSendEmailRequest) => {
  const url = `/account/send_mail?${formatToRequestParameter(request)}`;
  return apiGateway.post(url);
};

export const postLogin = (request: IPostLoginRequest) => {
  const url = `/account/login?${formatToRequestParameter(request)}`;
  return apiGateway.post(url);
};
