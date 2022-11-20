import { useSelector, shallowEqual } from 'react-redux';
import { ReducerType } from './reducer';

function useSelectorTyped<T>(fn: (state: ReducerType) => T): T {
  return useSelector(fn, shallowEqual);
}

export default useSelectorTyped;
