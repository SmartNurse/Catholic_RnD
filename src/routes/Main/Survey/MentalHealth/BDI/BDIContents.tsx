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
import MuiRadioGroupSub from './MuiRadioGroupSub';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const BDIContents = (props: Props) => {
  const { palette } = useTheme();

  const { radioGroup, sumValues } = useTableForm(props);
  const { disabled, watch, setValue, getValues } = props;

  const titles = [
    '1. 슬픈 기분',
    '2. 비관적 사고',
    '3. 실패감',
    '4. 만족감 감소',
    '5. 죄책감',
    '6. 죄책감',
    '7. 자기실망',
    '8. 자기비난',
    '9. 자살사고',
    '10. 울음',
    '11. 짜증',
    '12. 다른 사람에 대한 관심',
    '13. 우유부단성',
    '14. 신체적인 상',
    '15. 시작하기 어려움',
    '16. 수면장애',
    '17. 피곤함',
    '18. 식욕 저하',
    '19. 체중 감소',
    '19.1 체중감소',
    '20. 건강염려',
    '21. 성욕감퇴',
  ];

  const answers = [
    [
      '나는 슬프지 않다.',
      '나는 슬프다.',
      '나는 항상 슬퍼서 그것을 떨쳐버릴 수가 없다.',
      '나는 너무나 슬프고 불행해서 도저히 견딜 수가 없다.',
    ],
    [
      '나는 앞날에 대해 기대할 것이 아무것도 없다고 느낀다.',
      '나는 앞날에 대해서 별로 낙심하지 않는다.',
      '나의 앞날은 아주 절망적이고 나아질 가망이 없다고 느낀다.',
      '나의 앞날에 대해서 비관적인 느낌이 든다.',
    ],
    [
      '나는 실패자라고 느끼지 않는다.',
      '나는 보통 사람들보다 더 많이 실패한 것 같다.',
      '내가 살아온 과거를 뒤돌아 보면 생각나는 것은 실패뿐이다.',
      '나는 인간으로서 완전히 실패자인 것 같다.',
    ],
    [
      '나는 전과 같이 일상 생활에 만족하고 있다.',
      '나의 일상 생활은 전처럼 즐겁지 않다.',
      '나는 더 이상 어떤 것에서도 참된 만족을 얻지 못한다.',
      '나는 모든 것이 다 불만스럽고 지겹다.',
    ],
    [
      '나는 특별히 죄책감을 느끼지 않는다.',
      '나는 죄책감을 느낄 때가 많다.',
      '나는 거의 언제나 죄책감을 느낀다.',
      '나는 항상 언제나 죄책감을 느낀다.',
    ],
    [
      '나는 벌을 받고 있다고 느끼지 않는다.',
      '나는 아마 벌을 받아야 한다고 느낀다.',
      '나는 벌을 받아야 한다고 느낀다.',
      '나는 지금 벌을 받고 있다고 느낀다.',
    ],
    [
      '나는 나 자신에게 실망하지 않는다.',
      '나는 나 자신에게 실망하고 있다.',
      '나는 나 자신이 혐오스럽다.',
      '나는 나 자신을 증오한다.',
    ],
    [
      '내가 다른 사람보다 못한 것 같지는 않다.',
      '나는 나의 약점이나 실수에 대해서 나 자신을 탓한다.',
      '내가 한 일이 잘못되었을 때는 언제나 나를 탓한다.',
      '일어나는 모든 나쁜 일들은 다 내 탓한다.',
    ],
    [
      '나는 자살 같은 것은 생각하지 않는다.',
      '나는 자살할 생각을 하고 있으나, 실제로 하지는 않을 것이다.',
      '나는 자살하고 싶다.',
      '나는 기회만 있으면 자살하겠다.',
    ],
    [
      '나는 평소보다 더 울지는 않는다.',
      '나는 전보다 더 많이 운다.',
      '나는 요즈음 항상 운다.',
      '나는 전에는 울고 싶을 때 울 수 있었지만, 요즈음은 울래야 울 기력조차 없다.',
    ],
    [
      '나는 요즈음 평소보다 더 짜증을 내는 편은 아니다.',
      '나는 전보다 더 쉽게 짜증이 나고 귀찮아진다.',
      '나는 요즈음 항상 짜증스럽다.',
      '전에는 짜증스럽던 일에 요즈음은 너무 지쳐서 짜증조차 나지 않는다.',
    ],
    [
      '나는 다른 사람들에 대한 관심을 잃지 않고 있다.',
      '나는 전보다 다른 사람들에 대한 관심이 줄었다.',
      '나는 다른 사람들에 대한 관심이 거의 없어졌다.',
      '나는 다른 사람들에 대한 관심이 없어졌다.',
    ],
    [
      '나는 평소처럼 결정을 잘 내린다.',
      '나는 결정을 미루는 때가 전보다 더 많다.',
      '나는 전에 비해 결정을 내리는 데에 더 어려움을 느낀다.',
      '나는 더 이상 아무 결정도 내릴 수가 없다.',
    ],
    [
      '나는 전보다 내 모습이 더 나빠졌다고 느끼지 않는다.',
      '나는 나이 들어 보이거나 매력 없어 보일까봐 걱정한다.',
      '나는 내 모습이 매력 없어 보일까봐 걱정한다.',
      '나는 내가 추하게 보인다고 믿는다.',
    ],
    [
      '나는 전처럼 일을 할 수 있다.',
      '어떤 일을 시작하려면 특별히 더 많은 노력이 든다.',
      '무슨일이든 하려면 나 자신을 매우 심하게 채찍질해야만 한다.',
      '나는 전혀 아무 일도 할 수가 없다.',
    ],
    [
      '나는 평소처럼 잠을 잘 수가 없다.',
      '나는 전처럼 잠을 자지 못한다.',
      '나는 전보다 한두 시간 일찍 깨고 다시 잠들기 어렵다.',
      '나는 평소보다 몇 시간이나 일찍 깨고 다시 잠들 수 없다.',
    ],
    [
      '나는 평소보다 더 피곤하지는 않다.',
      '나는 전보다 더 쉽게 피곤해진다.',
      '나는 무엇을 해도 언제나 피곤해진다.',
      '나는 너무나 피곤해서 아무일도 할 수 없다.',
    ],
    [
      '내 식욕은 평소와 다름없다.',
      '나는 요즈음 전보다 식욕이 좋지 않다.',
      '나는 요즈음 식욕이 많이 떨어졌다.',
      '요즈음에는 전혀 식욕이 없다.',
    ],
    [
      '요즈음 체중이 별로 줄지 않았다.',
      '전보다 몸무게가 2kg 가량 줄었다.',
      '전보다 몸무게가 5kg 가량 줄었다.',
      '전보다 몸무게가 7kg 가량 줄었다.',
    ],
    ['나는 현재 음식 조절로 체중을 줄이고 있는 중이다.'],
    [
      '나는 건강에 대해 전보다 더 염려하고 있지는 않다.',
      '나는 여러 가지 통증, 소화불량, 변비 등과 같은 신체적인 문제로 걱정하고 있다.',
      '나는 건강이 매우 염려되어 다른 일은 생각하기 힘들다.',
      '나는 건강이 너무 염려되어 다른 일은 아무 것도 생각할 수 없다.',
    ],
    [
      '나는 요즈음 성(sex)에 대한 관심에 별다른 변화가 있는 것 같지는 않다.',
      '나는 전보다 성(sex)에 대한 관심이 줄었다.',
      '나는 전보다 성(sex)에 대한 관심이 상당히 줄었다.',
      '나는 성(sex)에 대한 관심을 완전히 잃었다.',
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
            합계 : {watchSumValues()}점
          </Typography>
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: `${palette.primary.main}` }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                0~9점
              </Box>
              : 정상
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                10~15점
              </Box>
              : 가벼운 우울
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                16~25점
              </Box>
              : 중증도 우울
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                26~63점
              </Box>
              : 심한 우울
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default BDIContents;
