import { IGetSurvey } from "apis/survey/type";

export interface IRequestVideo extends IGetSurvey {
    video_num: number;
}