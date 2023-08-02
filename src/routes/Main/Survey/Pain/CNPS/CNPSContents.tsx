import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  Table,
  TableBody,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import {
  CNPSStyledTableCell,
  CNPSStyledTableCellWithoutLeft,
  CNPSStyledTableCellWithoutRight,
  CNPSStyledTableCellWithoutLeftRight,
} from 'routes/Main/style';

import { IFormValues, IFormWatch } from 'routes/Main/type';

const radioId = ['face', 'activity', 'respiratory', 'vocalization'];
const contentLabel = [
  {
    id: 1,
    ko: '얼굴 표정',
    desc: [
      '자연스러운 표정',
      '미간 찡그림, 눈살 찌푸림, 눈물 글썽거림',
      '눈물을 흘림, 눈을 꽉 감음, 입을 씰룩거리며 눈을 찡그림',
      '이를 악뭄, 기관 내관을 밀어내거나 깨뭄',
    ],
  },
  {
    id: 2,
    ko: '신체 반응',
    desc: [
      '편안한 자세, 움직임이 없음',
      '느리고 조심스러운 움직임, 몸을 뒤척임',
      '통증 부위를 만지려고 하거나 문지름, 온몸에 힘을 줌',
      '온몸을 흔들거나 비틀며 심하게 움직임, 공격적 행동',
    ],
  },
  {
    id: 3,
    ko: '기계 호흡',
    desc: [
      '경보가 울리지 않고, 잘 적응함',
      '경보가 울리지만 곧 멈춤',
      '경보가 자주 울림, 인공호흡기에 저항함',
      '기계 호흡과 Fighting',
    ],
  },
  {
    id: 4,
    ko: '순응도 발성',
    desc: [
      '정상적인 말투',
      '공공대며 신음소리를 냄',
      '훌쩍거리거나, 소리를 내어 흐느껴 울음',
      '큰소리를 지름, 폭언을 함, 울부짖음',
    ],
  },
];
const scoreLabel = [
  { score: '0', label: '통증없음' },
  { score: '1~3', label: '약간 불편함' },
  { score: '4~6', label: '중간정도 불편함' },
  { score: '7~10', label: '매우 불편하고 아픈상태' },
];

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const CNPSContents = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues } = props;

  const [sumValue, setSumValue] = useState(0);

  const calculateSumValue = () => {
    setSumValue(
      radioId.reduce((acc, cur) => {
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue();
  };

  useEffect(() => {
    calculateSumValue();
  }, []);

  return (
    <>
      <Box sx={{ width: '1200px', margin: '60px auto' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <CNPSStyledTableCell
                colSpan={2.5}
                align="center"
                sx={{ padding: '16px' }}
              >
                지표
              </CNPSStyledTableCell>
              <CNPSStyledTableCellWithoutRight
                align="center"
                sx={{ padding: '16px' }}
              >
                점수
              </CNPSStyledTableCellWithoutRight>
              <CNPSStyledTableCellWithoutLeft
                colSpan={2}
                sx={{ padding: '16px', paddingLeft: '60px' }}
              >
                설명
              </CNPSStyledTableCellWithoutLeft>
            </TableRow>
          </TableHead>
          <TableBody>
            {contentLabel.map(
              (content: { id: number; ko: string; desc: string[] }, i) => (
                <TableRow>
                  <CNPSStyledTableCell
                    align="center"
                    sx={{ padding: '16px', width: '60px' }}
                  >
                    {content.id}
                  </CNPSStyledTableCell>
                  <CNPSStyledTableCell
                    align="center"
                    sx={{ padding: '16px', width: '180px' }}
                  >
                    {content.ko}
                  </CNPSStyledTableCell>
                  <CNPSStyledTableCellWithoutRight>
                    {content.desc.map((_, i) => (
                      <TableRow
                        sx={{
                          height: '44px',
                          lineHeight: '44px',
                          borderBottom:
                            i !== content.desc.length - 1
                              ? '1px solid lightgray'
                              : '',
                        }}
                      >
                        <Box sx={{ minWidth: '130px', textAlign: 'center' }}>
                          {i}점
                        </Box>
                      </TableRow>
                    ))}
                  </CNPSStyledTableCellWithoutRight>
                  <CNPSStyledTableCellWithoutLeftRight>
                    {content.desc.map((v, i) => (
                      <TableRow
                        sx={{
                          height: '44px',
                          lineHeight: '44px',
                          borderBottom:
                            i !== content.desc.length - 1
                              ? '1px solid lightgray'
                              : '',
                        }}
                      >
                        <Box sx={{ paddingLeft: '60px', minWidth: '650px' }}>
                          {v}
                        </Box>
                      </TableRow>
                    ))}
                  </CNPSStyledTableCellWithoutLeftRight>
                  <CNPSStyledTableCellWithoutLeft>
                    <RadioGroup
                      name={radioId[content.id - 1]}
                      defaultValue={Number(getValues(radioId[content.id - 1]))}
                    >
                      {content.desc.map((_, i) => (
                        <TableRow
                          sx={{
                            height: '44px',
                            lineHeight: '44px',
                            textAlign: 'center',
                            borderBottom:
                              i !== content.desc.length - 1
                                ? '1px solid lightgray'
                                : '',
                          }}
                        >
                          <Box sx={{ width: '180px' }}>
                            <Radio
                              disabled={disabled}
                              name={radioId[content.id - 1]}
                              value={i}
                              onChange={handleChange}
                            />
                          </Box>
                        </TableRow>
                      ))}
                    </RadioGroup>
                  </CNPSStyledTableCellWithoutLeft>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-end'}
          sx={{ marginTop: '20px' }}
        >
          <Typography
            gutterBottom
            minWidth={115}
            fontWeight={700}
            variant="subtitle1"
          >
            합계: {sumValue}점
          </Typography>
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: `${palette.primary.main}` }}
          >
            {scoreLabel.map(({ score, label }) => (
              <Typography variant="inherit">
                <Box component={'strong'} mr={0.5}>
                  {score}점:
                </Box>
                {label}
              </Typography>
            ))}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CNPSContents;
