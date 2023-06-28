import { Fragment } from 'react';
import {
  Grid,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
  useTheme,
} from '@mui/material';
import SectionTitle from '../../components/SectionTitle';
import { IFormValues, IFormWatch } from 'routes/Main/type';
import useTableForm from '../../hooks/useTableForm';
import MuiRadioGroupSub from './components/MuiRadioGroupSub';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const NDIContents = (props: Props) => {
  const { palette } = useTheme();

  const { radioGroup, sumValues } = useTableForm(props);
  const { disabled, watch, setValue, getValues } = props;

  const titles = [
    '제 1항목 - 통증강도',
    '제 2항목 - 자기 관리(씻기, 옷 입기...)',
    '제 3항목 - 들어올리기',
    '제 4항목 - 읽기',
    '제 5항목 - 두통',
    '제 6항목 - 집중도',
    '제 7항목 - 일',
    '제 8항목 - 운전(운전을 하는 경우만 답해 주세요)',
    '제 9 항목 - 수면',
    '제 10항목 - 여가 생활(취미생활, 여행 등)',
  ];

  const answers = [
    [
      '전혀 통증이 없다.',
      '약한 통증이 있다.',
      '중간 정도의 통증이 있다.',
      '심한 통증이 있다.',
      '매우 심한 통증이 있다.',
      '상상할 수 없을 정도의 극심한 통증이 있다.',
    ],
    [
      '통증 없이 정상적으로 나 자신을 돌볼 수 있다.',
      '정상적으로 나 자신을 돌볼 수 있지만 통증이 있다.',
      '나 자신을 돌보기가 고통스럽고 천천히 조심스럽게 움직인다.',
      '약간의 도움이 필요하지만 대부분의 자기 관리를 할 수 있다.',
      '대부분의 자기 관리를 위해서 매일 도움이 필요하다.',
      '옷을 입지 못하고 힘들게 씻으며 침대에만 누워 지낸다.',
    ],
    [
      '통증 없이 무거운 물건을 들 수 있다.',
      '무거운 물건을 들 수는 있지만 통증이 심해진다.',
      '통증으로 인해 바닥에서 무거운 물건을 들어 올릴 수는 없지만 탁자 위와 같이 편한 위치에 있는 경우에는 무거운 물건도  들어 올릴 수 있다.',
      '통증으로 인해 무거운 물건을 들어 올릴 수는 없지만 탁자 위와 같이 편한 위치에 있는 경우는 가볍거나 중간 정도 무게의  물건이라면 들어 올릴 수 있다.',
      '아주 가벼운 물건만 들 수 있다.',
      '전혀 물건을 들거나 옮길 수 없다.',
    ],
    [
      '목 통증 없이 원하는 만큼 독서 할 수 있다.',
      '약간의 목 통증은 있지만, 원하는 만큼 독서 할 수 있다.',
      '중간 정도의 목 통증은 있지만, 원하는 만큼 독서 할 수 있다.',
      '중간 정도의 목 통증은 있지만, 원하는 만큼 독서 할 수 있다.',
      '극심한 목 통증 때문에 거의 독서를 할 수 없다.',
      '전혀 독서 할 수 없다.',
    ],
    [
      '전혀 두통이 없다.',
      '드물게 약간의 두통이 있다.',
      '드물게 중간 정도의 두통이 있다.',
      '자주 중간 정도의 두통이 있다.',
      '자주 심한 두통이 있다.',
      '거의 항상 두통이 있다.',
    ],
    [
      '아무 어려움 없이(원하면) 언제든 집중할 수 있다.',
      '약간의 어려움은 있으나, 언제든 집중할 수 있다.',
      '집중 시 중간 정도의 어려움이 있다.',
      '집중 시 많은 어려움이 있다.',
      '집중 시 상당히 많은 어려움이 있다.',
      '전혀 집중할 수 없다.',
    ],
    [
      '내가 원하는 만큼 일 할 수 있다.',
      '일상 생활은 할 수 있지만 그 이상은 불가능하다.',
      '대부분의 일상 생활은 할 수 있지만 그 이상은 불가능하다.',
      '일상 생활이 불가능하다.',
      '어떤 일도 거의 할 수 없다.',
      '어떤 일도 전혀 할 수 없다.',
    ],
    [
      '목 통증 없이 운전 할 수 있다.',
      '약간의 목 통증은 있지만 내가 원하는 만큼 운전 할 수 있다.',
      '중간 정도의 목 통증은 있지만 내가 원하는 만큼 운전 할 수 있다.',
      '중간 정도의 목 통증 때문에 내가 원하는 만큼의 운전을 할 수 없다.',
      '심한 목 통증 때문에 거의 운전 할 수 없다.',
      '전혀 운전 할 수 없다.',
    ],
    [
      '수면 시 전혀 문제 없다.',
      '수면 시 아주 약간의 문제가 있다(잠들지 못하는 시간이 1시간 이하이다).',
      '수면 시 약간의 문제가 있다(1-2시간 이상 잠들지 못함).',
      '수면 시 중간 정도의 문제가 있다(2-3시간 이상 잠들지 못함).',
      '수면 시 상당히 문제가 있다(3-5시간 이상 잠들지 못함).',
      '수면이 불가능 하다(5-7시간 이상 잠들지 못함).',
    ],
    [
      '목 통증이 전혀 없이 모든 여가 생활이 가능하다.',
      '약간의 목 통증이 있지만, 모든 여가 생활이 가능하다.',
      '목 통증 때문에 모두는 아니지만 대부분의 일상 여가 생활은 가능하다.',
      '목 통증 때문에 몇 가지 여가 생활만 가능하다.',
      '목 통증 때문에 거의 여가 생활이 불가능하다.',
      '어떠한 여가 생활도 전혀 할 수 없다.',
    ],
  ];

  const watchSumValues = () => {
    const values = titles.map((_, i) =>
      watch(`content[${i}]`) ? Number(watch(`content[${i}]`)) : 0
    );
    let sum = sumValues(values);
    if (watch('content[19]') && watch('content[19]') == 1) sum--;
    setValue('sum', sum);
    return sum;
  };

  return (
    <Fragment>
      <Typography sx={{ fontSize: '14px', margin: '40px 0 -10px 25px' }}>
        이 설문지는 환자의 입장에서 느끼는 무릎 관절의 상태에 대한 질문입니다.이
        정보는 당신이 느끼고 있는 무릎 관절의 증상에 대해 알 수 있도록 도와주며
        당신의 일상 생활을 영위할 수 있게 하는 정보를 줍니다.
        <br />
        각각의 질문에 대해 가장 적당한 하나의 항목에 대해서만 표기해 주십시오.
      </Typography>
      {titles.map((title, idx) => (
        <>
          <SectionTitle title={title} />
          <Grid item xs={12}>
            <RadioGroup
              name={title}
              defaultValue={Number(getValues(`content[${idx}]`))}
            >
              <Table aria-label="simple table">
                <TableBody>
                  {answers[idx].map((answer, i) => {
                    console.log('답이모까');
                    if (idx === 19) {
                      return (
                        <TableRow key={answer}>
                          <TableCell sx={{ width: '80%' }}>{answer}</TableCell>
                          <TableCell>
                            <MuiRadioGroupSub
                              i18nKey="YESORNO"
                              values={[1, 2]}
                              name={title}
                              disabled={disabled}
                              defaultValue={Number(getValues('content[19]'))}
                              onChange={i => setValue(`content[19]`, i)}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    }

                    return (
                      <TableRow key={answer}>
                        <TableCell sx={{ width: '80%' }}>{answer}</TableCell>
                        <TableCell sx={{ width: '10%' }}>{`${i}점`}</TableCell>
                        <TableCell>
                          <Radio
                            disabled={disabled}
                            name={title}
                            value={i}
                            sx={{ height: '44px' }}
                            onChange={() => setValue(`content[${idx}]`, i)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </RadioGroup>
          </Grid>
        </>
      ))}

      <Grid item xs={12}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Typography
            gutterBottom
            minWidth={115}
            fontWeight={700}
            variant="subtitle1"
          >
            합계 : {watchSumValues()}점 / 50점
          </Typography>
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: `${palette.primary.main}`, marginTop: '30px' }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '14px' }}>
                0~4점(0~8%) : 장애없음
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '14px' }}>
                5~14점(10~28%) : 경미한 장애
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '14px' }}>
                15~24점(30~48%) : 중증도 장애
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '14px' }}>
                25~34점(50~64%) : 중증 장애
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '14px' }}>
                35~50점(70~100%) : 완전한 장애
              </Box>
            </Typography>
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sx={{ marginRight: '10px' }}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Typography
            sx={{
              fontSize: '13px',
            }}
          >
            송경진, 최병완, 김설전 and 윤선중. (2009). 한국어판 Neck Disability
            Index의 문화적 개작과 타당도. 대한정형외과학회지, 44(3), 350-359.
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default NDIContents;
