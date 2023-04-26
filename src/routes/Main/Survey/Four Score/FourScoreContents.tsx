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
  TableContainer,
} from '@mui/material';
import {
  StyledTableCellTwo,
  StyledTableCellWithoutLeftTwo,
  StyledTableCellWithoutRightTwo,
  StyledTableCellWithoutLeftRightTwo,
} from 'routes/Main/style';
import SectionTitle from '../components/SectionTitle';

import { IFormValues, IFormWatch } from 'routes/Main/type';

const radioId = [
  'eye_opening',
  'brainstem_reflexes',
  'motor_response',
  'respiration',
];
const contentLabel = [
  {
    id: 1,
    ko: '눈을 뜨는 행위\n(Eye Opening)',
    desc: [
      '눈을 감고 있으며 통증 자극을 주어도 뜨지 못한다',
      '눈을 감고 있지만 통증 자극에 뜬다',
      '눈을 뜨지만 큰 소리에 뜬다',
      '눈을 뜨지만 안구추적움직임이 없다',
      '눈을 뜨고 있거나, 명령에 따라 눈을 뜨고, 안구추적움직임을 보이고, 눈을 깜박인다',
    ],
  },
  {
    id: 2,
    ko: '운동 반응\n(Motor Response)',
    desc: [
      '통증 자극에도 움직이지 않거나, 전신근간대경련지속상태를 보인다',
      '통증을 가하면 비정상적인 신전 반응을 보인다',
      '통증을 가하면 비정상적인 굴절 반응을 보인다',
      '통증을 가하면 제거하려고 한다',
      '엄지손가락 들기, 주먹 쥐기, 손가락 두 개 펴기(V자 그리기)를 할 수 있다',
    ],
  },
  {
    id: 3,
    ko: '뇌간반사\n(Brainstem Reflexes)',
    desc: [
      '동공반사, 각막반사, 기침반사가 모두 나타나지 않는다',
      '동공반사와 각막반사가 모두 나타나지 않는다',
      '동공반사 또는 각막반사가 나타나지 않는다',
      '한쪽 동공이 확대 고정되어 있다',
      '동공반사와 각막반사가 모두 나타난다',
    ],
  },
  {
    id: 4,
    ko: '호흡\n(Respiration)',
    desc: [
      '환기기 설정과 동일한 호흡수를 보이거나 무호흡 상태이다',
      '환기기 설정보다 더 많은 호흡수를 보인다',
      '기관내삽관 상태가 아니고, 불규칙적인 호흡 패턴을 보인다',
      '기관내삽관 상태가 아니고, 체인-스톡스 호흡 패턴을 보인다',
      '기관내삽관 상태가 아니고, 규칙적인 호흡 패턴을 보인다',
    ],
  },
];
const scoreLabel = [{ score: '15', label: 'ALERT' }];

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}
const FourScoreContents = (props: Props) => {
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
      <SectionTitle title="FOUR Score" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer>
          <TableHead>
            <TableRow>
              <StyledTableCellTwo
                colSpan={2}
                sx={{ padding: '16px', paddingLeft: '120px' }}
              >
                반응범주
              </StyledTableCellTwo>
              <StyledTableCellWithoutLeftTwo
                colSpan={2}
                sx={{ padding: '16px', paddingLeft: '120px' }}
              >
                반응
              </StyledTableCellWithoutLeftTwo>
              <StyledTableCellTwo></StyledTableCellTwo>
            </TableRow>
          </TableHead>

          <TableBody>
            {contentLabel.map(
              (content: { id: number; ko: string; desc: string[] }, i) => (
                <TableRow>
                  <StyledTableCellTwo
                    align="center"
                    sx={{
                      padding: '16px',
                      width: '300px',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {content.ko}
                  </StyledTableCellTwo>
                  <StyledTableCellWithoutRightTwo>
                    {content.desc.map((_, i) => (
                      <TableRow sx={{ height: '44px', lineHeight: '44px' }}>
                        <Box sx={{ minWidth: '50px', textAlign: 'center' }}>
                          {i}점
                        </Box>
                      </TableRow>
                    ))}
                  </StyledTableCellWithoutRightTwo>
                  <StyledTableCellWithoutLeftRightTwo>
                    {content.desc.map((v, i) => (
                      <TableRow
                        sx={{
                          height: '44px',
                          lineHeight: '44px',
                        }}
                      >
                        <Box sx={{ paddingLeft: '100px', minWidth: '600px' }}>
                          {v}
                        </Box>
                      </TableRow>
                    ))}
                  </StyledTableCellWithoutLeftRightTwo>
                  <StyledTableCellWithoutLeftTwo>
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
                          }}
                        >
                          <Box
                            sx={{
                              width: '300px',
                              paddingLeft: '400px',
                              paddingRight: '70px',
                            }}
                          >
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
                  </StyledTableCellWithoutLeftTwo>
                </TableRow>
              )
            )}
          </TableBody>
        </TableContainer>
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
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}></Box>* FOUR Score의 점수
              감소는 의식 수준 악화와 관련이 있습니다.
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FourScoreContents;
