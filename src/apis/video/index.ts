import camelcaseKeys from 'camelcase-keys';

import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';

import { IGetSurvey } from 'apis/survey/type';
import { IRequestVideo } from './type';

// 핵심간호술기영상 저장
export const getVideo = (request: IGetSurvey) => {
    const url = `/file/video?${formatToRequestParameter(request)}`;
    return apiGateway.get(url);
};

export const deleteVideo = (request: IRequestVideo) => {
    const url = `/file/video_delete`;
    return apiGateway.post(url, camelcaseKeys(request));
};