import { initialSettingsToggleObj, initialToggleObj } from "./initialStates";

type TToggleObj = typeof initialToggleObj;
type TSettingsToggleObj = typeof initialSettingsToggleObj;

export interface IToggleObj extends TToggleObj {
    [id: string]: boolean;
}

export interface ISettingsToggleObj extends TSettingsToggleObj {
    [id: string]: boolean;
}