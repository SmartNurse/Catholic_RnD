import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReducerType } from '../reducer';
import {
  closeReadOnly,
  closeSave,
  SurveyState,
  updateIsSave,
  updateSurveyType,
} from '.';

const useSurvey = () => {
  const dispatch = useDispatch();

  const { isSave, surveyType } = useSelector<ReducerType, SurveyState>(
    state => state.survey
  );

  const onUpdateSurveyType = useCallback(
    (value: string) => dispatch(updateSurveyType(value)),
    [dispatch]
  );

  const onUpdateIsSave = useCallback(
    (value: boolean) => dispatch(updateIsSave(value)),
    [dispatch]
  );

  const onCloseSave = useCallback(
    () => {
      if (isSave) return dispatch(closeSave());
      const isConfirm = window.confirm('저장하지 않고 종료하시겠습니까?');
      if (isConfirm) return dispatch(closeSave());
    },
    // eslint-disable-next-line
    [dispatch]
  );

  const onCloseReadOnly = useCallback(
    () => dispatch(closeReadOnly()),
    [dispatch]
  );

  return {
    isSave,
    surveyType,
    onUpdateIsSave,
    onUpdateSurveyType,
    onCloseSave,
    onCloseReadOnly,
  };
};

export default useSurvey;
