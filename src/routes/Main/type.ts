import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

export interface IFormRegister {
  register: UseFormRegister<any>;
}

export interface IFormValues {
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
}

export interface IFormWatch {
  watch: UseFormWatch<any>;
}
