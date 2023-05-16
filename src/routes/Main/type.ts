import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  Control
} from 'react-hook-form';

export interface IFormRegister {
  register: UseFormRegister<any>;
  control?: Control<any>;
}

export interface IFormValues {
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
}

export interface IFormWatch {
  watch: UseFormWatch<any>;
}
