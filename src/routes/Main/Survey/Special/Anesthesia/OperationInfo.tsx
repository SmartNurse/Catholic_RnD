import { useState, useEffect } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import { Box, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
}

const OperationInfo = (props: Props) => {
  const { disabled, register, watch, setValue, getValues } = props;

  const [postureEtc, setPostureEtc] = useState(0);
  const [methodEtc, setMethodEtc] = useState(0);

  const asa_class_labels = [
    'ASAI',
    'ASAII',
    'ASAIII',
    'ASAIV',
    'ASAV',
    'ASAVI',
  ];
  const position_labels = [
    'Fowler',
    'Lateral',
    'Lithotomy',
    'Orthopnea',
    'Prone',
    'Recumbent',
    'Sims',
    'Supine',
  ];
  const method_labels = ['Local', 'General', 'Spinal', 'Epidural'];

  const contents = [
    {
      label: '수술과',
      element: (
        <Form.MuiTextField
          {...register('operation_information.operating_department')}
          required={false}
          disabled={disabled}
        />
      ),
    },
    {
      label: '수술날짜',
      element: (
        <Form.MuiTextField
          type="date"
          required={false}
          disabled={disabled}
          {...register('operation_information.operating_date')}
        />
      ),
    },
    {
      label: '수술시간',
      element: (
        <MobileTimePicker
          disabled={disabled}
          value={watch('operation_information.operating_time') || null}
          onChange={v => setValue('operation_information.operating_time', v)}
          renderInput={params => (
            <Form.MuiTextField
              {...params}
              required={false}
              placeholder="00:00 pm"
              InputProps={{ endAdornment: <AccessTime /> }}
            />
          )}
        />
      ),
    },
    {
      label: '수술명',
      element: (
        <Form.MuiTextField
          {...register('operation_information.operation_name')}
          required={false}
          disabled={disabled}
        />
      ),
    },
    {
      label: '금식여부',
      element: (
        <Box display="flex">
          <Form.MuiTextField
            select
            required={false}
            disabled={disabled}
            defaultValue={getValues('operation_information.npo_status')}
            {...register('operation_information.npo_status')}
          >
            <MenuItem value="금식">금식</MenuItem>
            <MenuItem value="금식안함">금식안함</MenuItem>
          </Form.MuiTextField>
        </Box>
      ),
    },
    {
      label: '수술자세',
      element: (
        <Box display="flex">
          <Form.MuiTextField
            select
            required={false}
            disabled={disabled}
            defaultValue={
              [...position_labels, undefined].includes(
                getValues('operation_information.position')
              )
                ? getValues('operation_information.position')
                : 'etc'
            }
            {...register('operation_information.position')}
            onChange={e => {
              if (e.target.value === 'etc') setPostureEtc(1);
              else setPostureEtc(0);
            }}
          >
            {position_labels.map(v => (
              <MenuItem key={v} value={v}>
                {v} position
              </MenuItem>
            ))}
            <MenuItem value="etc">직접 입력</MenuItem>
          </Form.MuiTextField>
          {postureEtc ? (
            <Form.MuiTextField
              {...register('operation_information.position_etc')}
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              sx={{ marginLeft: '5px' }}
            />
          ) : null}
        </Box>
      ),
    },
    {
      label: '과거력/알레르기',
      element: (
        <Box display="flex">
          <Form.MuiTextField
            {...register('operation_information.operating_allergy')}
            required={false}
            disabled={disabled}
            sx={{ width: '220px' }}
          />
          <FormControlLabel
            disabled={disabled}
            control={
              <Checkbox
                defaultChecked={getValues(
                  'operation_information.preoperative_xray'
                )}
                {...register('operation_information.preoperative_xray')}
              />
            }
            label="수술 전 흉부 X-ray"
            sx={{ marginLeft: '20px' }}
          />
          <FormControlLabel
            disabled={disabled}
            control={
              <Checkbox
                defaultChecked={getValues(
                  'operation_information.preoperative_ekg'
                )}
                {...register('operation_information.preoperative_ekg')}
              />
            }
            label="수술 전 심전도"
            sx={{ marginLeft: '20px' }}
          />
        </Box>
      ),
    },
    {
      label: '응급여부',
      element: (
        <Form.MuiTextField
          select
          required={false}
          disabled={disabled}
          defaultValue={getValues('operation_information.emergency_status')}
          {...register('operation_information.emergency_status')}
        >
          <MenuItem value="응급">응급</MenuItem>
          <MenuItem value="비응급">비응급</MenuItem>
        </Form.MuiTextField>
      ),
    },
    {
      label: 'ASA class',
      element: (
        <Form.MuiTextField
          select
          required={false}
          disabled={disabled}
          defaultValue={getValues('operation_information.asa_class')}
          {...register('operation_information.asa_class')}
        >
          {asa_class_labels.map(option => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Form.MuiTextField>
      ),
    },
    {
      label: '예방적 항생제',
      element: (
        <Form.MuiTextField
          select
          required={false}
          disabled={disabled}
          defaultValue={getValues(
            'operation_information.prophylactic_antibiotics'
          )}
          {...register('operation_information.prophylactic_antibiotics')}
        >
          <MenuItem value="투여완료">투여완료</MenuItem>
          <MenuItem value="없음">없음</MenuItem>
        </Form.MuiTextField>
      ),
    },
    {
      label: '마취방법',
      element: (
        <Box display="flex">
          <Form.MuiTextField
            select
            required={false}
            disabled={disabled}
            defaultValue={
              [...method_labels, undefined].includes(
                getValues('operation_information.prophylactic_method')
              )
                ? getValues('operation_information.prophylactic_method')
                : 'etc'
            }
            {...register('operation_information.prophylactic_method')}
            onChange={e => {
              if (e.target.value === 'etc') setMethodEtc(1);
              else setMethodEtc(0);
            }}
          >
            {method_labels.map(v => (
              <MenuItem key={v} value={v}>
                {v} Anesthesia
              </MenuItem>
            ))}
            <MenuItem value="etc">직접 입력</MenuItem>
          </Form.MuiTextField>
          {methodEtc ? (
            <Form.MuiTextField
              {...register('operation_information.prophylactic_method_etc')}
              placeholder="직접 입력"
              sx={{ marginLeft: '5px' }}
              required={false}
            />
          ) : null}
        </Box>
      ),
    },
  ];

  useEffect(() => {
    if (
      ![...position_labels, undefined].includes(
        getValues('operation_information.position')
      )
    ) {
      setValue(
        'operation_information.position_etc',
        getValues('operation_information.position')
      );
      setPostureEtc(1);
    }

    if (
      ![...method_labels, undefined].includes(
        getValues('operation_information.prophylactic_method')
      )
    ) {
      setValue(
        'operation_information.prophylactic_method_etc',
        getValues('operation_information.prophylactic_method')
      );
      setMethodEtc(1);
    }
  }, []);

  return (
    <>
      <SectionTitle title="수술 정보" />
      <RowContainer xs={12}>
        {contents.map(({ label, element }) => (
          <>
            <RowContent
              title={label}
              titleRatio={1}
              childrenRatio={label === '과거력/알레르기' ? 5 : 2}
            >
              {element}
            </RowContent>
          </>
        ))}
      </RowContainer>
    </>
  );
};

export default OperationInfo;
