import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReducerType } from '../reducer';
import { SurveyState, updateIsSave } from '.';

const useSurvey = () => {
  const dispatch = useDispatch();

  const { isSave } = useSelector<ReducerType, SurveyState>(
    state => state.survey
  );

  const onUpdateIsSave = useCallback(
    (value: boolean) => dispatch(updateIsSave(value)),
    [dispatch]
  );

  return {
    isSave,
    onUpdateIsSave,
  };
};

export default useSurvey;
