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

  const answers = [
    {
      id: 'ndi01',
      title: '제 1항목 - 통증강도',
      desc: [
        '전혀 통증이 없다.',
        '약한 통증이 있다.',
        '중간 정도의 통증이 있다.',
        '심한 통증이 있다.',
        '매우 심한 통증이 있다.',
        '상상할 수 없을 정도의 극심한 통증이 있다.',
      ],
    },
    {
      id: 'ndi02',
      title: '제 2항목 - 자기 관리(씻기, 옷 입기...)',
      desc: [
        '통증 없이 정상적으로 나 자신을 돌볼 수 있다.',
        '정상적으로 나 자신을 돌볼 수 있지만 통증이 있다.',
        '나 자신을 돌보기가 고통스럽고 천천히 조심스럽게 움직인다.',
        '약간의 도움이 필요하지만 대부분의 자기 관리를 할 수 있다.',
        '대부분의 자기 관리를 위해서 매일 도움이 필요하다.',
        '옷을 입지 못하고 힘들게 씻으며 침대에만 누워 지낸다.',
      ],
    },
    {
      id: 'ndi03',
      title: '제 3항목 - 들어올리기',
      desc: [
        '통증 없이 무거운 물건을 들 수 있다.',
        '무거운 물건을 들 수는 있지만 통증이 심해진다.',
        '통증으로 인해 바닥에서 무거운 물건을 들어 올릴 수는 없지만 탁자 위와 같이 편한 위치에 있는 경우에는 무거운 물건도  들어 올릴 수 있다.',
        '통증으로 인해 무거운 물건을 들어 올릴 수는 없지만 탁자 위와 같이 편한 위치에 있는 경우는 가볍거나 중간 정도 무게의  물건이라면 들어 올릴 수 있다.',
        '아주 가벼운 물건만 들 수 있다.',
        '전혀 물건을 들거나 옮길 수 없다.',
      ],
    },
    {
      id: 'ndi04',
      title: '제 4항목 - 읽기',
      desc: [
        '목 통증 없이 원하는 만큼 독서 할 수 있다.',
        '약간의 목 통증은 있지만, 원하는 만큼 독서 할 수 있다.',
        '중간 정도의 목 통증은 있지만, 원하는 만큼 독서 할 수 있다.',
        '중간 정도의 목 통증은 있지만, 원하는 만큼 독서 할 수 있다.',
        '극심한 목 통증 때문에 거의 독서를 할 수 없다.',
        '전혀 독서 할 수 없다.',
      ],
    },
    {
      id: 'ndi05',
      title: '제 5항목 - 두통',
      desc: [
        '전혀 두통이 없다.',
        '드물게 약간의 두통이 있다.',
        '드물게 중간 정도의 두통이 있다.',
        '자주 중간 정도의 두통이 있다.',
        '자주 심한 두통이 있다.',
        '거의 항상 두통이 있다.',
      ],
    },
    {
      id: 'ndi06',
      title: '제 6항목 - 집중도',
      desc: [
        '아무 어려움 없이(원하면) 언제든 집중할 수 있다.',
        '약간의 어려움은 있으나, 언제든 집중할 수 있다.',
        '집중 시 중간 정도의 어려움이 있다.',
        '집중 시 많은 어려움이 있다.',
        '집중 시 상당히 많은 어려움이 있다.',
        '전혀 집중할 수 없다.',
      ],
    },
    {
      id: 'ndi07',
      title: '제 7항목 - 일',
      desc: [
        '내가 원하는 만큼 일 할 수 있다.',
        '일상 생활은 할 수 있지만 그 이상은 불가능하다.',
        '대부분의 일상 생활은 할 수 있지만 그 이상은 불가능하다.',
        '일상 생활이 불가능하다.',
        '어떤 일도 거의 할 수 없다.',
        '어떤 일도 전혀 할 수 없다.',
      ],
    },
    {
      id: 'ndi08',
      title: '제 8항목 - 운전(운전을 하는 경우만 답해 주세요)',
      desc: [
        '목 통증 없이 운전 할 수 있다.',
        '약간의 목 통증은 있지만 내가 원하는 만큼 운전 할 수 있다.',
        '중간 정도의 목 통증은 있지만 내가 원하는 만큼 운전 할 수 있다.',
        '중간 정도의 목 통증 때문에 내가 원하는 만큼의 운전을 할 수 없다.',
        '심한 목 통증 때문에 거의 운전 할 수 없다.',
        '전혀 운전 할 수 없다.',
      ],
    },
    {
      id: 'ndi09',
      title: '제 9 항목 - 수면',
      desc: [
        '수면 시 전혀 문제 없다.',
        '수면 시 아주 약간의 문제가 있다(잠들지 못하는 시간이 1시간 이하이다).',
        '수면 시 약간의 문제가 있다(1-2시간 이상 잠들지 못함).',
        '수면 시 중간 정도의 문제가 있다(2-3시간 이상 잠들지 못함).',
        '수면 시 상당히 문제가 있다(3-5시간 이상 잠들지 못함).',
        '수면이 불가능 하다(5-7시간 이상 잠들지 못함).',
      ],
    },
    {
      id: 'ndi10',
      title: '제 10항목 - 여가 생활(취미생활, 여행 등)',
      desc: [
        '목 통증이 전혀 없이 모든 여가 생활이 가능하다.',
        '약간의 목 통증이 있지만, 모든 여가 생활이 가능하다.',
        '목 통증 때문에 모두는 아니지만 대부분의 일상 여가 생활은 가능하다.',
        '목 통증 때문에 몇 가지 여가 생활만 가능하다.',
        '목 통증 때문에 거의 여가 생활이 불가능하다.',
        '어떠한 여가 생활도 전혀 할 수 없다.',
      ],
    },
  ];

  const watchSumValues = () => {
    const values = answers.map(({ id }) => {
      if (props.watch(`${id}`) === undefined) {
        return 0;
      } else {
        return Number(props.watch(`${id}`));
      }
    });
    return sumValues(values);
  };

  console.log('기본값', Number(getValues('ndi10')));

  return (
    <Fragment>
      <Typography sx={{ fontSize: '14px', margin: '40px 0 -10px 25px' }}>
        다음은 당신의 목과 팔의 통증이 어떻게 일상생활 능력에 영향을 주는지를
        알아보기 위한 설문 조사입니다. 각 문항에서 현재 자신의 상태와 가장
        근접한 항목 하나에만 표시하세요.
      </Typography>
      {answers.map(
        (answer: { id: string; title: string; desc: string[] }, idx) => (
          <>
            <SectionTitle title={answer.title} />
            <Grid item xs={12}>
              <RadioGroup
                name={answer.title}
                defaultValue={Number(getValues(`answer.id`))}
              >
                <Table aria-label="simple table">
                  <TableBody>
                    {answer.desc.map((v, i) => {
                      return (
                        <TableRow>
                          <TableCell
                            sx={{
                              width: '80%',
                            }}
                          >
                            {v}
                          </TableCell>
                          <TableCell
                            sx={{ width: '10%' }}
                          >{`${i}점`}</TableCell>
                          <TableCell>
                            <MuiRadioGroupSub
                              disabled={disabled}
                              name={`${answer.title}`}
                              values={[i]}
                              value={Number(getValues(`${answer.id}`))}
                              sx={{ height: '20px' }}
                              defaultValue={Number(getValues(`${answer.id}`))}
                              onChange={() => {
                                setValue(`${answer.id}`, i);
                              }}
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
        )
      )}

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
              <Box component={'strong'} mr={0.5}>
                0~4점(0~8%) :
              </Box>
              장애없음
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                5~14점(10~28%) :
              </Box>
              경미한 장애
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                15~24점(30~48%) :
              </Box>
              중증도 장애
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                25~34점(50~64%) :
              </Box>
              중증 장애
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                35~50점(70~100%) :
              </Box>
              완전한 장애
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
