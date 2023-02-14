import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ColorState {
    theme_color: string;
}

const initialState: ColorState = {
    theme_color: "GREEN",
}

export const colorSlice = createSlice({
    name: "color",
    initialState, 
    reducers: {
        changeColor(_, action: PayloadAction<ColorState>) {
            return action.payload;
        },
    },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;