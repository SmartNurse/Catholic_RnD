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
  gender: 1 | 2;
  birth: string;
  college: number;
  studentNo: number;
  grade: 1 | 2;
}
