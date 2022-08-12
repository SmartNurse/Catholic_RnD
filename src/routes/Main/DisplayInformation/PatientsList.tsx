import React, { Fragment, useCallback, useEffect, useState } from 'react';
import {
  Autocomplete,
  CircularProgress,
  debounce,
  TextField,
} from '@mui/material';

import { getPatients } from '../../../apis/admin';
import { IPatient } from '../../../apis/admin/type';
import usePatient from '../../../store/slices/usePatient';

const PatientsList = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([] as IPatient[]);
  const { patient, onSelectedPatient } = usePatient();

  const onChangeOptions = useCallback((keyword: string) => {
    getPatients({ page: 1, keyword })
      .then(({ data }) => {
        const patients = data.admin_patients;
        setOptions(patients);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => onChangeOptions(''), [onChangeOptions]);

  const onChangeTextField = debounce(e => {
    const keyword = e.target.value;
    onChangeOptions(keyword);
  }, 500);

  const TextFieldEndAdornment = ({
    endAdornment,
  }: {
    endAdornment: React.ReactNode;
  }) => (
    <Fragment>
      {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
      {endAdornment}
    </Fragment>
  );

  return (
    <Autocomplete
      fullWidth
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      value={patient}
      onChange={(_, value) => onSelectedPatient(value)}
      isOptionEqualToValue={(option, value) =>
        option.patient_id === value.patient_id
      }
      getOptionLabel={option => `${option.name} ${option.age}세`}
      noOptionsText="검색한 환자가 없습니다 다른 환자 이름을 입력해주세요"
      options={options}
      loading={isLoading}
      onChangeCapture={() => setIsLoading(true)}
      renderInput={params => (
        <TextField
          variant="standard"
          {...params}
          onChange={onChangeTextField}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <TextFieldEndAdornment
                endAdornment={params.InputProps.endAdornment}
              />
            ),
          }}
        />
      )}
    />
  );
};

export default PatientsList;
