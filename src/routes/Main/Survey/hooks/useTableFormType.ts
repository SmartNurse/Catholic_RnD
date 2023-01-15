import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

export interface IUseTableFormProps
  extends IFormValues,
    IFormWatch,
    Partial<IFormRegister> {
  disabled?: boolean;
}
export interface IUseTableRadioGroup {
  key: string;
  options: number[];
  i18nKey?: string;
  i18nNullKey?: string;
  width?: string;
}
export interface IUseTableCheckbox {
  key: string;
  label: string;
  inputKey?: string;
  checked?: boolean;
}
