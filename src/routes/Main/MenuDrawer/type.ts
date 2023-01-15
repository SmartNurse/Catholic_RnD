import { initialToggleObj } from "./initialStates";

type TToggleObj = typeof initialToggleObj;

export interface IToggleObj extends TToggleObj {
    [id: string]: boolean;
}