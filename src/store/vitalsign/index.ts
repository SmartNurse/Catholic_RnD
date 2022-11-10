import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OneVitalsignState {
    checkTime: string,
    bt: number,
    pr: number,
    rr: number,
    sbp: number,
    dbp: number,
};

export interface VitalsignState {
    isUpdated: boolean,
    data: OneVitalsignState[],
};

const initialState: VitalsignState = {
    isUpdated: false,
    data: [],
};

export const vitalsignSlice = createSlice({
    name: "vitalsign",
    initialState,
    reducers: {
        initSign() {
            return initialState;
        },
        updateSign(_, action: PayloadAction<VitalsignState>) {
            return action.payload;
        },
    },
});

export const { initSign, updateSign } = vitalsignSlice.actions;
export default vitalsignSlice.reducer;