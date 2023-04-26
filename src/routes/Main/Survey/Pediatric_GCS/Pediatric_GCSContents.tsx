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

const radioId = ['eye_opening', 'verbal_response', 'motor_response'];
const contentLabel = [
  {
    id: 1,
    ko: '눈을 뜨는 행위\n(Eye Opening)',
    desc: [
      '전혀 눈을 뜨지 않는다',
      '통증을 주면 눈을 뜬다',
      '부르면 눈을 뜬다',
      '자발적으로 눈을 뜬다',
    ],
  },
  {
    id: 2,
    ko: '언어 반응\n(Verbal Response)',
    desc: [
      '전혀 소리를 내지 못한다',
      '통증으로 인해 신음소리를 낸다',
      '통증으로 인해 운다',
      '짜증을 내고 운다',
      '소리를 내거나 좋아하며 옹알거린다',
    ],
  },
  {
    id: 3,
    ko: '운동 반응\n(Motor Response)',
    desc: [
      '전혀 반응이 없다',
      '통증을 가하면 비정상적인 신전 반응이 있다',
      '통증을 가하면 비정상적인 굴곡 반응이 있다',
      '통증을 가하면 통증을 피하려는 자세를 취하거나 불완전하게 손을 움직인다.',
      '명령에 따르지 못하거나 자발적으로 움직이지 못하나 통증을 가하면 제거하려고 한다',
      '명령에 따르거나 자발적으로 움직인다',
    ],
  },
];
const scoreLabel = [
  { score: '15', label: 'ALERT' },
  { score: '13~14', label: 'DROWSY' },
  { score: '8~12', label: 'STUPOR' },
  { score: '4~7', label: 'SEMI-COMA' },
  { score: '3', label: 'COMA' },
];

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}
const Pediatric_GCSContents = (props: Props) => {
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
      <SectionTitle title="Pediatric GCS (Glasgow Coma Scale)" />
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
                          {i + 1}점
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
                              width: '100px',
                              paddingLeft: '400px',
                              paddingRight: '70px',
                            }}
                          >
                            <Radio
                              disabled={disabled}
                              name={radioId[content.id - 1]}
                              value={i + 1}
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

export default Pediatric_GCSContents;
