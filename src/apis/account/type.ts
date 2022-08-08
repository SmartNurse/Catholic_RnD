export interface IPostSendMailRequest {
  user_email: string;
}

export interface IPostVerifyMailRequest extends IPostSendMailRequest {
  user_code: string;
}

export interface IPostLoginRequest extends IPostSendMailRequest {
  user_password: string;
}

export interface IPostAccountCreateRequest extends IPostLoginRequest {
  user_name: string;
  gender: number;
  birth: string;
  college: number;
  studentNo: number;
  grade: number;
}
