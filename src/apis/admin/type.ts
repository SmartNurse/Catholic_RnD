export interface IGetCollegeLists {
  page: number;
  keyword: string;
}

export interface ICollege {
  college_id: number;
  college_name: string;
  college_email: string;
  college_ci: string;
}
