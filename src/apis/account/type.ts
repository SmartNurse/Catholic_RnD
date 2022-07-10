export interface IPostSendMailRequest {
  userEmail: string;
}

export interface IPostVerifyMailRequest extends IPostSendMailRequest {
  userCode: string;
}

export interface IPostLoginRequest extends IPostSendMailRequest {
  userPassword: string;
}

export interface IPostAccountCreateRequest extends IPostLoginRequest {
  studentNumber: string;
  userBirth: string;
  userCollege: string;
  userGender: string;
  userName: string;
}
