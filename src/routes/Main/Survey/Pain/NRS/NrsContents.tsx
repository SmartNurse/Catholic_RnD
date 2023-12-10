import { useState } from 'react';

import { Box, Button, IconButton, FormHelperText } from '@mui/material';
import { AccessTime, Delete } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { StyledMiniBox, StyledSlider } from 'routes/Main/style';
import MuiTextField from 'components/Form/MuiTextField';
import MuiTable from 'components/MuiTable';

import NRS_face1 from 'assets/NRS_face1.svg';
import NRS_face2 from 'assets/NRS_face2.svg';
import NRS_face3 from 'assets/NRS_face3.svg';
import NRS_face4 from 'assets/NRS_face4.svg';
import NRS_face5 from 'assets/NRS_face5.svg';
import NRS_face6 from 'assets/NRS_face6.svg';

import { Ti18nId } from 'hooks/useI18n';
import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';
import { INRS } from 'apis/survey/type';
import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const NrsContents = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const nrsList: INRS[] = watch('nrs_survey');

  const [date, setDate] = useState(null);
  const [checkTime, setCheckTime] = useState(null);
  const [painScore, setPainScore] = useState('');
  const [inputError, setInputError] = useState(false);

  const columns = [
    { fieldId: 'date', label: '날짜', sx: { width: 200 } },
    { fieldId: 'time', label: '체크시간', sx: { width: 200 } },
    { fieldId: 'pain_score', label: 'PAIN SCORE', sx: { width: 200 } },
    { fieldId: 'pain_aspect', label: '통증 양상' },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { date, time: checkTime, pain_score: painScore };
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('NRS.ADD.ROW');
    }

    onSuccess('NRS 추가되었습니다.');
    setValue('nrs_survey', nrsList ? [...nrsList, request] : [request]);
    setValue('nrs_date', '');
    setDate(null);
    setCheckTime(null);
    setPainScore('');
  };

  const inputRow = {
    id: 'add-nrs',
    date: (
      <MuiTextField
        required={false}
        fullWidth={false}
        type="date"
        disabled={disabled}
        {...register('nrs_date', {
          onChange: e => setDate(e.target.value),
        })}
      />
    ),
    time: (
      <MobileTimePicker
        value={checkTime}
        onChange={setCheckTime}
        renderInput={params => (
          <MuiTextField
            {...params}
            required={false}
            placeholder="00:00 pm"
            InputProps={{ endAdornment: <AccessTime /> }}
          />
        )}
      />
    ),
    pain_aspect: <MuiTextField required={false} sx={{ width: '400px' }} />,

    pain_score: (
      <>
        <MuiTextField
          value={painScore}
          required={false}
          onChange={({ target: { value } }) => {
            setPainScore(value);

            const numValue = Number(value);
            if (
              value === '' ||
              (numValue >= 0 && numValue <= 10 && Number.isInteger(numValue))
            )
              setInputError(false);
            else setInputError(true);
          }}
          error={
            painScore === '' ||
            (Number(painScore) >= 0 &&
              Number(painScore) <= 10 &&
              Number.isInteger(Number(painScore)))
              ? false
              : true
          }
        />
        {inputError ? (
          <FormHelperText error={true}>
            PAIN SCORE 값은 0 이상 10 이하의 정수입니다.
          </FormHelperText>
        ) : null}
      </>
    ),
    action: (
      <Button variant="contained" size="small" onClick={onAddRow}>
        추가
      </Button>
    ),
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'nrs_survey',
      nrsList.filter((_, i) => i !== index)
    );
  };

  const displayRows = nrsList
    ? nrsList.map((item, i) => ({
        ...item,
        id: i,
        time: formatStringToDate(item.time, 'hh:mm a'),
        action: (
          <IconButton
            size="small"
            onClick={() => onDeleteRow(i)}
            sx={{ display: disabled ? 'none' : 'block' }}
          >
            <Delete />
          </IconButton>
        ),
      }))
    : [];
  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '24px',
        }}
      >
        <Box
          sx={{
            width: '800px',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <img src={NRS_face1} />
          <img src={NRS_face2} />
          <img src={NRS_face3} />
          <img src={NRS_face4} />
          <img src={NRS_face5} />
          <img src={NRS_face6} />
        </Box>
        <StyledSlider
          disabled={disabled}
          min={0}
          max={10}
          marks={Array(11)
            .fill(0)
            .map((_, i) => {
              return { value: i, label: i };
            })}
          sx={{ width: '800px' }}
          value={painScore === '' ? 0 : parseInt(painScore)}
          onChange={(_, value) => setPainScore(String(value))}
        />
        <Box
          sx={{
            width: '800px',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <StyledMiniBox>
            No <br /> Pain
          </StyledMiniBox>
          <StyledMiniBox>
            Mild <br /> Pain
          </StyledMiniBox>
          <StyledMiniBox>
            Moderate <br /> Pain
          </StyledMiniBox>
          <StyledMiniBox>
            Severe <br /> Pain
          </StyledMiniBox>
          <StyledMiniBox>
            Extreme <br /> Pain
          </StyledMiniBox>
        </Box>
        <Box sx={{ width: '1000px', marginTop: '40px', marginBottom: '12px' }}>
          <MuiTable columns={columns} rows={tableRow} />
        </Box>
      </Box>
    </>
  );
};

export default NrsContents;
