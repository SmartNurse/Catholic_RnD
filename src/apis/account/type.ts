export interface IPostSendMailRequest {
  user_email: string;
}

export interface IPostVerifyMailRequest extends IPostSendMailRequest {
  user_code: string;
}

export interface IPostLoginRequest extends IPostSendMailRequest {
  user_password: string;
}

// 1:여성 2:남성
export type TGender = 1 | 2;
// 1:학생 2:교수/조교
export type TGrade = 1 | 2;

export interface IPostAccountCreateRequest extends IPostLoginRequest {
  user_name: string;
  gender: TGender;
  birth: string;
  college: number;
  studentNo: number;
  grade: TGrade;
}

export interface IPostChangePassword {
  userId: number;
  student_name: string;
  password?: string;
  newPassword?: string;
}

export interface IGetUserInfo {
  user_id?: number;
}
