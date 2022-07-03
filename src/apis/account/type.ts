export interface IPostSendEmailRequest {
  userEmail: string;
}

export interface IPostLoginRequest extends IPostSendEmailRequest {
  userPassword: string;
}
