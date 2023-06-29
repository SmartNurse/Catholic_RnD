import { Fragment, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  TableBody,
  TableCell,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
  Table,
} from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';
import useTableForm from './components/useTableForm';
import MuiRadioGroup from './components/MuiRadioGroup';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const STarTContents = (props: Props) => {
  const { palette } = useTheme();
  const { radioGroup, sumValues } = useTableForm(props);
  const { disabled, getValues, setValue } = props;

  const columns = [
    {
      fieldId: 'title',
      label: '',
    },
    {
      fieldId: '0',
      label: '',
      sx: { width: '200px' },
    },
    {
      fieldId: '1',
      label: '',
      sx: { width: '200px' },
    },
    // {
    //   fieldId: '2',
    //   label: '',
    //   sx: { width: '200px' },
    // },
    // {
    //   fieldId: '3',
    //   label: '',
    //   sx: { width: '200px' },
    // },
    // {
    //   fieldId: '4',
    //   label: '',
    //   sx: { width: '200px' },
    // },
  ];

  const rows = [
    {
      id: 'sTarTBack01',
      title:
        '1. My back pain has spread down my leg(s) at some time in the last 2 weeks.',
      ...radioGroup({
        key: 'contents.sTarTBack01',
        options: [0, 1],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
        sx: { whiteSpace: 'nowrap' },
      }),
    },
    {
      id: 'sTarTBack02',
      title:
        '2. I have had pain in the shoulder or neck at some time in the last 2 weeks.',
      ...radioGroup({
        key: 'contents.sTarTBack02',
        options: [0, 1],
        i18nKey: 'STARTSCREENING.SCORE',
        sx: { whiteSpace: 'nowrap' },
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack03',
      title:
        '3. I have only walked short distances because of my back pain in the last 2 weeks.',
      ...radioGroup({
        key: 'contents.sTarTBack03',
        options: [0, 1],
        i18nKey: 'STARTSCREENING.SCORE',
        sx: { whiteSpace: 'nowrap' },
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack04',
      title:
        '4. In the last 2 weeks, I have dressed more slowly than usual because of back pain.',
      ...radioGroup({
        key: 'contents.sTarTBack04',
        options: [0, 1],
        i18nKey: 'STARTSCREENING.SCORE',
        sx: { whiteSpace: 'nowrap' },
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack05',
      title:
        '5. It is not really safe for a person with a condition like mine to be physically active.',
      ...radioGroup({
        key: 'contents.sTarTBack05',
        options: [0, 1],
        i18nKey: 'STARTSCREENING.SCORE',
        sx: { whiteSpace: 'nowrap' },
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack06',
      title:
        '6. Worrying thoughts have been going through my mind a lot of the time.',
      ...radioGroup({
        key: 'contents.sTarTBack06',
        options: [0, 1],
        i18nKey: 'STARTSCREENING.SCORE',
        sx: { whiteSpace: 'nowrap' },
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack07',
      title:
        "7. I feel that my back pain is terrible and it's never going to get any better.",
      ...radioGroup({
        key: 'contents.sTarTBack07',
        options: [0, 1],
        i18nKey: 'STARTSCREENING.SCORE',
        sx: { whiteSpace: 'nowrap' },
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack08',
      title:
        '8. In general, I have not enjoyed all the things I used to enjoy.',
      ...radioGroup({
        key: 'contents.sTarTBack08',
        options: [0, 1],
        i18nKey: 'STARTSCREENING.SCORE',
        sx: { whiteSpace: 'nowrap' },
        width: '150px',
      }),
    },
    // {
    //   id: 'sTarTBack09',
    //   title:
    //     '9. In general, I have not enjoyed all the things I used to enjoy.',
    //   ...radioGroup({
    //     key: 'contents.sTarTBack09',
    //     options: [0, 1, 2, 3, 4],
    //     i18nKey: 'STARTSCREENING.SCORE.FIVE',
    //     width: '150px',
    //   }),
    // },
  ];

  const [nine, setNine] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (Number(e.target.value) === 3) {
      return setNine('1');
    } else if (Number(e.target.value) === 4) {
      return setNine('1');
    } else {
      return setNine('0');
    }
  };

  const watchSumValues = () => {
    if (Number(nine) > 0) {
      const values = rows.map(({ id }) => {
        return Number(props.watch(`contents.${id}`));
      });
      return sumValues(values) + 1;
    } else {
      const values = rows.map(({ id }) => {
        return Number(props.watch(`contents.${id}`));
      });
      return sumValues(values);
    }
  };

  const subSumValues = () => {
    const values1 = Number(props.watch('contents.sTarTBack05'));
    const values2 = Number(props.watch('contents.sTarTBack06'));
    const values3 = Number(props.watch('contents.sTarTBack07'));
    const values4 = Number(props.watch('contents.sTarTBack08'));
    const values5 = Number(nine);

    return values1 + values2 + values3 + values4 + values5;
  };

  return (
    <Fragment>
      <SectionTitle title="STarT Back Screening Tool" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={rows} />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '500',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  9. In general, I have not enjoyed all the things I used to
                  enjoy.
                </Typography>
                <RadioGroup
                  name={'contents.sTarTBack09'}
                  defaultValue={
                    getValues('contents.sTarTBack09').length > 0
                      ? Number(getValues('contents.sTarTBack09'))
                      : 5
                  }
                >
                  <TableRow
                    sx={{
                      height: '44px',
                      lineHeight: '44px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Box sx={{ display: 'block' }}>
                      <FormControlLabel
                        sx={{ width: '14.7vw' }}
                        label="Not at all (0 point)"
                        control={
                          <Radio
                            disabled={disabled}
                            name={`contents.sTarTBack09`}
                            value={0}
                            onChange={handleChange}
                          />
                        }
                      />
                      <FormControlLabel
                        sx={{ width: '14.7vw' }}
                        label="Slightly (0 point)"
                        control={
                          <Radio
                            disabled={disabled}
                            name={'contents.sTarTBack09'}
                            value={1}
                            onChange={handleChange}
                          />
                        }
                      />
                      <FormControlLabel
                        sx={{ width: '14.7vw' }}
                        label="Moderately (0 point)"
                        control={
                          <Radio
                            disabled={disabled}
                            name={'contents.sTarTBack09'}
                            value={2}
                            onChange={handleChange}
                          />
                        }
                      />
                      <FormControlLabel
                        sx={{ width: '14.7vw' }}
                        label="Very much (1 point)"
                        control={
                          <Radio
                            disabled={disabled}
                            name={'contents.sTarTBack09'}
                            value={3}
                            onChange={handleChange}
                          />
                        }
                      />
                      <FormControlLabel
                        sx={{ width: '150px', whiteSpace: 'nowrap' }}
                        label="Extremely (1 point)"
                        control={
                          <Radio
                            disabled={disabled}
                            name={'contents.sTarTBack09'}
                            value={4}
                            onChange={handleChange}
                          />
                        }
                      />
                    </Box>
                  </TableRow>
                </RadioGroup>
              </TableCell>
              <TableCell>
                <Typography
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  textAlign={'right'}
                ></Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={12}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Typography
            gutterBottom
            minWidth={115}
            fontWeight={700}
            variant="subtitle1"
          >
            Total Score : {watchSumValues()}point
            <br />
            Sub(Q5~9) Score :{subSumValues()}point
          </Typography>
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: `${palette.primary.main}`, marginTop: ' 40px' }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                Low risk: Total score-3 or less
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                Medium risk: Total score-4 or more, Sub score(Q5~9)-3 or less
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                high risk: Total score-4 or more, Sub score(Q5~9)-4 or more
              </Box>
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default STarTContents;
