import { useEffect, useState } from 'react';
import { Grid, Stack, TextField, Typography } from '@mui/material';

import Form from 'components/Form';
import { INames } from 'apis/main/type';
import { getNandaClass, getNandaDiagnosis } from 'apis/main';

interface Props {
  watch: any;
  setValue: any;
  register: any;
  disabled?: boolean;
  domainNames?: INames[];
}

function Nanda(props: Props) {
  const { watch, register, setValue, domainNames, disabled } = props;

  const m_domain = watch('domain');

  // GetNandaClass
  const m_class = watch('class');
  const [classNames, setClassNames] = useState<INames[]>([]);
  useEffect(() => {
    if (!m_domain || m_domain === 'none') return setClassNames([]);
    getNandaClass({ domain: m_domain }).then(({ data }) => {
      setClassNames(data.names);
      setDiagnosisNames([]);
    });
  }, [m_domain, setValue]);

  // GetNandaDiagnosis
  const [diagnosisNames, setDiagnosisNames] = useState<INames[]>([]);
  useEffect(() => {
    if (!m_class || m_class === 'none') return setDiagnosisNames([]);
    getNandaDiagnosis({ domain: m_domain, class: m_class }).then(({ data }) => {
      setDiagnosisNames(data.names);
    });
  }, [m_domain, m_class, setValue]);

  // Render Select Options
  const getOptionValue = (option: INames) => option.kor;
  const getOptionLabel = (option: INames) => `${option.kor} (${option.eng})`;

  return (
    <Stack spacing={2}>
      <Grid
        container
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        spacing={0.75}
      >
        <Grid item xs={4}>
          <Typography variant="caption">영역 Domain</Typography>
        </Grid>
        <Grid item xs={8}>
          <Form.MuiSelect
            isNone
            disabled={disabled}
            options={domainNames}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            {...register('domain')}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption">분류 Class</Typography>
        </Grid>
        <Grid item xs={8}>
          <Form.MuiSelect
            isNone
            disabled={disabled}
            options={classNames}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            {...register('class')}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption">진단명 Diagnosis</Typography>
        </Grid>
        <Grid item xs={8}>
          <Form.MuiSelect
            isNone
            disabled={disabled}
            options={diagnosisNames}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            {...register('diagnosis')}
          />
        </Grid>
      </Grid>

      <Form.Item label="자료 수집 주관적 / 객관적">
        <TextField
          required
          fullWidth
          multiline
          minRows={3}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('collectingData')}
        />
      </Form.Item>

      <Form.Item label="간호목표 단기/장기 Goal">
        <TextField
          required
          fullWidth
          multiline
          minRows={3}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('goal')}
        />
      </Form.Item>

      <Form.Item label="간호계획 Plan">
        <TextField
          required
          fullWidth
          multiline
          minRows={3}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('plan')}
        />
      </Form.Item>

      <Form.Item label="간호수행/중재/이론적 근거 Interventions">
        <TextField
          required
          fullWidth
          multiline
          minRows={5}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('interventions')}
        />
      </Form.Item>

      <Form.Item label="간호평가 Evaluation">
        <TextField
          required
          fullWidth
          multiline
          minRows={3}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('evaluation')}
        />
      </Form.Item>
    </Stack>
  );
}

export default Nanda;
