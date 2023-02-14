import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { setCookie } from "utils/cookie";

import { changeColor, ColorState } from ".";
import useSelectorTyped from "store/useSelectorTyped";

const useColor = () => {
    const dispatch = useDispatch();

    const themeState = useSelectorTyped<ColorState>(state => state.color);

    const onChangeColor = useCallback(
        (color: ColorState) => {
            dispatch(changeColor(color));
            setCookie("theme_color", color.theme_color, 30);
        },
        [dispatch]
    );

    return { ...themeState, onChangeColor };
}

export default useColor;