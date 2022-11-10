import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReducerType } from "../reducer";
import { initSign, updateSign, VitalsignState } from ".";

const useVitalsign = () => {
    const dispatch = useDispatch();

    const vitalsign = useSelector<ReducerType, VitalsignState>(
        state => state.vitalsign
    );

    const onInitSign = useCallback(
        () => dispatch(initSign()),
        [dispatch]
    );

    const onUpdateSign = useCallback(
        (value: VitalsignState) => dispatch(updateSign(value)),
        [dispatch]
    );

    return {
        vitalsign,
        onInitSign,
        onUpdateSign,
    };
};

export default useVitalsign;