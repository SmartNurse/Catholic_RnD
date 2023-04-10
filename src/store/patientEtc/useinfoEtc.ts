import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReducerType } from "../reducer";
import { initInfo, updateInfo, InfoEtcState } from ".";

const useInfoEtc = () => {
    const dispatch = useDispatch();

    const infoEtc = useSelector<ReducerType, InfoEtcState>(
        state => state.infoEtc
    );

    const onInitInfo = useCallback(
        () => dispatch(initInfo()),
        [dispatch]
    );

    const onUpdateInfo = useCallback(
        (value: InfoEtcState) => dispatch(updateInfo(value)),
        [dispatch]
    );

    return {
        infoEtc,
        onInitInfo,
        onUpdateInfo,
    };
};

export default useInfoEtc;