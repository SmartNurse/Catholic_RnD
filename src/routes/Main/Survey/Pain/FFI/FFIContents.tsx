import { useState, Fragment } from 'react';
import SectionTitle from './components/SectionTitle';

import {
  Box,
  Grid,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  Table,
  Stack,
  TableHead,
  useTheme,
} from '@mui/material';
import { StyledSlider } from 'routes/Main/style';

import { Ti18nId } from 'hooks/useI18n';
import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';
import { INRS } from 'apis/survey/type';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const FFIContents = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, getValues } = props;
  const { palette } = useTheme();

  const [painScore1, setPainScore1] = useState(
    getValues('ffi01') !== undefined ? getValues('ffi01') : 0
  );
  const [painScore2, setPainScore2] = useState(
    getValues('ffi02') !== undefined ? getValues('ffi02') : 0
  );
  const [painScore3, setPainScore3] = useState(
    getValues('ffi03') !== undefined ? getValues('ffi03') : 0
  );
  const [painScore4, setPainScore4] = useState(
    getValues('ffi04') !== undefined ? getValues('ffi04') : 0
  );
  const [painScore5, setPainScore5] = useState(
    getValues('ffi05') !== undefined ? getValues('ffi05') : 0
  );
  const [painScore6, setPainScore6] = useState(
    getValues('ffi06') !== undefined ? getValues('ffi06') : 0
  );
  const [painScore7, setPainScore7] = useState(
    getValues('ffi07') !== undefined ? getValues('ffi07') : 0
  );
  const [painScore8, setPainScore8] = useState(
    getValues('ffi08') !== undefined ? getValues('ffi08') : 0
  );
  const [painScore9, setPainScore9] = useState(
    getValues('ffi09') !== undefined ? getValues('ffi09') : 0
  );

  const [functionScore1, setFunctionScore1] = useState(
    getValues('ffi10') !== undefined ? getValues('ffi10') : 0
  );
  const [functionScore2, setFunctionScore2] = useState(
    getValues('ffi11') !== undefined ? getValues('ffi11') : 0
  );
  const [functionScore3, setFunctionScore3] = useState(
    getValues('ffi12') !== undefined ? getValues('ffi12') : 0
  );
  const [functionScore4, setFunctionScore4] = useState(
    getValues('ffi13') !== undefined ? getValues('ffi13') : 0
  );
  const [functionScore5, setFunctionScore5] = useState(
    getValues('ffi14') !== undefined ? getValues('ffi14') : 0
  );
  const [functionScore6, setFunctionScore6] = useState(
    getValues('ffi15') !== undefined ? getValues('ffi15') : 0
  );
  const [functionScore7, setFunctionScore7] = useState(
    getValues('ffi16') !== undefined ? getValues('ffi16') : 0
  );
  const [functionScore8, setFunctionScore8] = useState(
    getValues('ffi17') !== undefined ? getValues('ffi17') : 0
  );
  const [functionScore9, setFunctionScore9] = useState(
    getValues('ffi18') !== undefined ? getValues('ffi18') : 0
  );

  const [limiteScore1, setLimiteScore1] = useState(
    getValues('ffi19') !== undefined ? getValues('ffi19') : 0
  );
  const [limiteScore2, setLimiteScore2] = useState(
    getValues('ffi20') !== undefined ? getValues('ffi20') : 0
  );
  const [limiteScore3, setLimiteScore3] = useState(
    getValues('ffi21') !== undefined ? getValues('ffi21') : 0
  );
  const [limiteScore4, setLimiteScore4] = useState(
    getValues('ffi22') !== undefined ? getValues('ffi22') : 0
  );
  const [limiteScore5, setLimiteScore5] = useState(
    getValues('ffi23') !== undefined ? getValues('ffi23') : 0
  );

  // 리펙토링 해볼 map
  const before = [painScore1];

  const after = [setPainScore1];

  const contentLabel = [
    {
      desc: '1. 가장 심할 때 통증의 정도는?',
    },
  ];

  const resultAnswer =
    Number(painScore1) +
    Number(painScore2) +
    Number(painScore3) +
    Number(painScore4) +
    Number(painScore5) +
    Number(painScore6) +
    Number(painScore7) +
    Number(painScore8) +
    Number(painScore9) +
    Number(functionScore1) +
    Number(functionScore2) +
    Number(functionScore3) +
    Number(functionScore4) +
    Number(functionScore5) +
    Number(functionScore6) +
    Number(functionScore7) +
    Number(functionScore8) +
    Number(functionScore9) +
    Number(limiteScore1) +
    Number(limiteScore2) +
    Number(limiteScore3) +
    Number(limiteScore4) +
    Number(limiteScore5);

  const resultAnswer2 = ((resultAnswer / 230) * 100).toFixed(2);
  console.log('겟밸류', getValues('ffi01'));

  return (
    <Fragment>
      <SectionTitle title="통증척도" mb={2} mt={5} />
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                key={'title'}
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                질문 사항
              </TableCell>
              <TableCell
                key={'점수'}
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: 'right',
                  whiteSpace: 'pre',
                  wordSpacing: '30px',
                  width: '500px',
                }}
              >
                0 1 2 3 4 5 6 7 8 9 10
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {contentLabel.map(
              (content: { desc: string }, j) => {
                return (
                  <TableRow>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: '400',
                          width: '500px',
                        }}
                        maxHeight={20}
                        display="block"
                        variant="caption"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace={'pre-line'}
                      >
                        {content.desc}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: 'right' }}>
                      <StyledSlider
                        disabled={disabled}
                        min={0}
                        max={10}
                        marks={Array(11)
                          .fill(0)
                          .map((_, i) => {
                            return { value: i };
                          })}
                        sx={{ width: '428px' }}
                        value={painScore1 === '' ? 0 : parseInt(painScore1)}
                        onChange={(_, value) =>
                          setPainScore1(String(value))
                        }
                      />
                    </TableCell>
                  </TableRow>
                );
              }
            )} */}
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  1. 가장 심할 때 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore1}
                  defaultValue={painScore1}
                  onChange={(_, value) => {
                    setPainScore1(Number(value));
                    setValue('ffi01', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  2. 아침에 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore2}
                  defaultValue={painScore2}
                  onChange={(_, value) => {
                    setPainScore2(Number(value));
                    setValue('ffi02', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  3. 맨발로 걸을 때 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore3}
                  defaultValue={painScore3}
                  onChange={(_, value) => {
                    setPainScore3(Number(value));
                    setValue('ffi03', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  4. 맨발로 서 있을 때 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore4}
                  defaultValue={painScore4}
                  onChange={(_, value) => {
                    setPainScore4(Number(value));
                    setValue('ffi04', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  5. 신발 신고 걸을 때 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore5}
                  defaultValue={painScore5}
                  onChange={(_, value) => {
                    setPainScore5(Number(value));
                    setValue('ffi05', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  6. 신발 신고 서 있을 때 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore6}
                  defaultValue={painScore6}
                  onChange={(_, value) => {
                    setPainScore6(Number(value));
                    setValue('ffi06', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  7. 보조기를 착용하고 걸을 때 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore7}
                  defaultValue={painScore7}
                  onChange={(_, value) => {
                    setPainScore7(Number(value));
                    setValue('ffi07', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  8. 보조기를 착용하고 서 있을 때 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore8}
                  defaultValue={painScore8}
                  onChange={(_, value) => {
                    setPainScore8(Number(value));
                    setValue('ffi08', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  9. 잠자리에 들기 전에 통증의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={painScore9}
                  defaultValue={painScore9}
                  onChange={(_, value) => {
                    setPainScore9(Number(value));
                    setValue('ffi09', value);
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      {/* 기능척도 */}
      <SectionTitle title="기능척도" mb={2} mt={5} />
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                key={'title'}
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                질문 사항
              </TableCell>
              <TableCell
                key={'점수'}
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: 'right',
                  whiteSpace: 'pre',
                  wordSpacing: '30px',
                  width: '500px',
                }}
              >
                0 1 2 3 4 5 6 7 8 9 10
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  10. 실내에서 걸을 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore1}
                  defaultValue={functionScore1}
                  onChange={(_, value) => {
                    setFunctionScore1(Number(value));
                    setValue('ffi10', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  11. 실외에서 걸을 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore2}
                  defaultValue={functionScore2}
                  onChange={(_, value) => {
                    setFunctionScore2(Number(value));
                    setValue('ffi11', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  12. 5-10분 정도(400-500미터) 걸을 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore3}
                  defaultValue={functionScore3}
                  onChange={(_, value) => {
                    setFunctionScore3(Number(value));
                    setValue('ffi12', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  13. 계단을 오를 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore4}
                  defaultValue={functionScore4}
                  onChange={(_, value) => {
                    setFunctionScore4(Number(value));
                    setValue('ffi13', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  14. 계단으로 내려올 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore5}
                  defaultValue={functionScore5}
                  onChange={(_, value) => {
                    setFunctionScore5(Number(value));
                    setValue('ffi14', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  15. 발가락 끝으로 설 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore6}
                  defaultValue={functionScore6}
                  onChange={(_, value) => {
                    setFunctionScore6(Number(value));
                    setValue('ffi15', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  16. 의자에서 일어 설 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore7}
                  defaultValue={functionScore7}
                  onChange={(_, value) => {
                    setFunctionScore7(Number(value));
                    setValue('ffi16', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  17. 언덕을 오를 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore8}
                  defaultValue={functionScore8}
                  onChange={(_, value) => {
                    setFunctionScore8(Number(value));
                    setValue('ffi17', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  18. 빠르게 걷거나 뛸 때 불편함의 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={functionScore9}
                  defaultValue={functionScore9}
                  onChange={(_, value) => {
                    setFunctionScore9(Number(value));
                    setValue('ffi18', value);
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      {/* 활동제한척도 */}
      <SectionTitle title="활동제한척도" mb={2} mt={5} />
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                key={'title'}
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                질문 사항
              </TableCell>
              <TableCell
                key={'점수'}
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: 'right',
                  whiteSpace: 'pre',
                  wordSpacing: '30px',
                  width: '500px',
                }}
              >
                0 1 2 3 4 5 6 7 8 9 10
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  19. 발 때문에 활동이 실내에서만으로 제한된 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={limiteScore1}
                  defaultValue={limiteScore1}
                  onChange={(_, value) => {
                    setLimiteScore1(Number(value));
                    setValue('ffi19', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  20. 발 때문에 활동이 침상에서만으로 제한된 정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={limiteScore2}
                  defaultValue={limiteScore2}
                  onChange={(_, value) => {
                    setLimiteScore2(Number(value));
                    setValue('ffi20', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  21. 실내에서 보조기구(지팡이, 워커, 목발 등)을 필요로 하는
                  정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={limiteScore2}
                  defaultValue={limiteScore2}
                  onChange={(_, value) => {
                    setLimiteScore2(Number(value));
                    setValue('ffi21', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  22. 실외에서 보조기구(지팡이, 워커, 목발 등)을 필요로 하는
                  정도는?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={limiteScore3}
                  defaultValue={limiteScore3}
                  onChange={(_, value) => {
                    setLimiteScore3(Number(value));
                    setValue('ffi22', value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                    width: '500px',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  23. 신체적 활동에 어느정도 제약을 받습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <StyledSlider
                  disabled={disabled}
                  min={0}
                  max={10}
                  marks={Array(11)
                    .fill(0)
                    .map((_, i) => {
                      return { value: i };
                    })}
                  sx={{ width: '428px' }}
                  value={limiteScore4}
                  defaultValue={limiteScore4}
                  onChange={(_, value) => {
                    setLimiteScore4(Number(value));
                    setValue('ffi23', value);
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      <Grid item xs={12} sx={{ marginTop: '30px', marginRight: '10px' }}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Typography
            gutterBottom
            minWidth={115}
            fontWeight={700}
            variant="subtitle1"
            sx={{ marginBottom: '40px' }}
          >
            점수 : {resultAnswer}점/230 X 100 = {resultAnswer2}%
          </Typography>
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: `${palette.primary.main}` }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                FFI 점수 범위 :
              </Box>
              0 ~ 100%
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                0% :
              </Box>
              건강한 상태
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                100% :
              </Box>
              심각한 통증 있으며, 운동 일상생활에 큰 제한이 있는 상태
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: '13px',
              marginTop: '40px',
              marginBottom: '30px',
            }}
          >
            김유미, 이동연, 이준형, 김진, 김지범, 김범수, 최기원, 서상교,
            김준범, 박세진, 김윤정, 최영락, 이동오, 조재호, 천동일, 김형년,
            박재용.(2019).
            <br />
            족부 족관절 질환 환자에서 전자식 족부 기능 지수의 인증: 임의 배정,
            전향적, 다기관 연구.대한족부족관절학회지,23(1),24-30.
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default FFIContents;
