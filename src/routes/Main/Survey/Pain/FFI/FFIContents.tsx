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
import { IFormValues, IFormWatch } from 'routes/Main/type';
import { INRS } from 'apis/survey/type';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const FFIContents = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess } = props;
  const { palette } = useTheme();

  const nrsList: INRS[] = watch('nrs_survey');

  const [checkTime, setCheckTime] = useState(null);

  const [painScore1, setPainScore1] = useState('');
  const [painScore2, setPainScore2] = useState('');
  const [painScore3, setPainScore3] = useState('');
  const [painScore4, setPainScore4] = useState('');
  const [painScore5, setPainScore5] = useState('');
  const [painScore6, setPainScore6] = useState('');
  const [painScore7, setPainScore7] = useState('');
  const [painScore8, setPainScore8] = useState('');
  const [painScore9, setPainScore9] = useState('');

  const [functionScore1, setFunctionScore1] = useState('');
  const [functionScore2, setFunctionScore2] = useState('');
  const [functionScore3, setFunctionScore3] = useState('');
  const [functionScore4, setFunctionScore4] = useState('');
  const [functionScore5, setFunctionScore5] = useState('');
  const [functionScore6, setFunctionScore6] = useState('');
  const [functionScore7, setFunctionScore7] = useState('');
  const [functionScore8, setFunctionScore8] = useState('');
  const [functionScore9, setFunctionScore9] = useState('');

  const [limiteScore1, setLimiteScore1] = useState('');
  const [limiteScore2, setLimiteScore2] = useState('');
  const [limiteScore3, setLimiteScore3] = useState('');
  const [limiteScore4, setLimiteScore4] = useState('');
  const [limiteScore5, setLimiteScore5] = useState('');

  const [answer, setAnswer] = useState(0);

  // 리펙토링 해볼 map
  const contentLabel = [
    {
      value: 'painScore',
      setValue: 'setPainSore',
      desc: [],
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
                  value={painScore1 === '' ? 0 : parseInt(painScore1)}
                  onChange={(_, value) => setPainScore1(String(value))}
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
                  value={painScore2 === '' ? 0 : parseInt(painScore2)}
                  onChange={(_, value) => setPainScore2(String(value))}
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
                  value={painScore3 === '' ? 0 : parseInt(painScore3)}
                  onChange={(_, value) => setPainScore3(String(value))}
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
                  value={painScore4 === '' ? 0 : parseInt(painScore4)}
                  onChange={(_, value) => setPainScore4(String(value))}
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
                  value={painScore5 === '' ? 0 : parseInt(painScore5)}
                  onChange={(_, value) => setPainScore5(String(value))}
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
                  value={painScore6 === '' ? 0 : parseInt(painScore6)}
                  onChange={(_, value) => setPainScore6(String(value))}
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
                  value={painScore7 === '' ? 0 : parseInt(painScore7)}
                  onChange={(_, value) => setPainScore7(String(value))}
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
                  value={painScore8 === '' ? 0 : parseInt(painScore8)}
                  onChange={(_, value) => setPainScore8(String(value))}
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
                  value={painScore9 === '' ? 0 : parseInt(painScore9)}
                  onChange={(_, value) => setPainScore9(String(value))}
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
                  value={functionScore1 === '' ? 0 : parseInt(functionScore1)}
                  onChange={(_, value) => setFunctionScore1(String(value))}
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
                  value={functionScore2 === '' ? 0 : parseInt(functionScore2)}
                  onChange={(_, value) => setFunctionScore2(String(value))}
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
                  value={functionScore3 === '' ? 0 : parseInt(functionScore3)}
                  onChange={(_, value) => setFunctionScore3(String(value))}
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
                  value={functionScore4 === '' ? 0 : parseInt(functionScore4)}
                  onChange={(_, value) => setFunctionScore4(String(value))}
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
                  value={functionScore5 === '' ? 0 : parseInt(functionScore5)}
                  onChange={(_, value) => setFunctionScore5(String(value))}
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
                  value={functionScore6 === '' ? 0 : parseInt(functionScore6)}
                  onChange={(_, value) => setFunctionScore6(String(value))}
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
                  value={functionScore7 === '' ? 0 : parseInt(functionScore7)}
                  onChange={(_, value) => setFunctionScore7(String(value))}
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
                  value={functionScore8 === '' ? 0 : parseInt(functionScore8)}
                  onChange={(_, value) => setFunctionScore8(String(value))}
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
                  value={functionScore9 === '' ? 0 : parseInt(functionScore9)}
                  onChange={(_, value) => setFunctionScore9(String(value))}
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
                  value={limiteScore1 === '' ? 0 : parseInt(limiteScore1)}
                  onChange={(_, value) => setLimiteScore1(String(value))}
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
                  value={limiteScore2 === '' ? 0 : parseInt(limiteScore2)}
                  onChange={(_, value) => setLimiteScore2(String(value))}
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
                  value={limiteScore3 === '' ? 0 : parseInt(limiteScore3)}
                  onChange={(_, value) => setLimiteScore3(String(value))}
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
                  value={limiteScore4 === '' ? 0 : parseInt(limiteScore4)}
                  onChange={(_, value) => setLimiteScore4(String(value))}
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
                  value={limiteScore5 === '' ? 0 : parseInt(limiteScore5)}
                  onChange={(_, value) => setLimiteScore5(String(value))}
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
                FFI 점수 범위 : 0 ~ 100%
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                0% : 건강한 상태
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                100% : 심각한 통증 있으며, 운동 일상생활에 큰 제한이 있는 상태
              </Box>
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
