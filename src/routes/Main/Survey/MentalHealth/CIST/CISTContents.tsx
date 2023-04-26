import { Fragment, useState, useEffect, useCallback } from 'react';
import Form from 'components/Form';
import {
  Grid,
  Box,
  Typography,
  useTheme,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';
import {
  StyledTableCellTwo,
  StyledTableCellWithoutLeftTwo,
  StyledTableCellWithoutLeftRightTwo,
} from 'routes/Main/style';
import { ReactComponent as CheckedIcon } from 'assets/checked.svg';
import { ReactComponent as Spacetime } from 'assets/spacetime.svg';
import { ReactComponent as Figure1 } from 'assets/figure1.svg';
import { ReactComponent as Figure2 } from 'assets/figure2.svg';
import { ReactComponent as Figure3 } from 'assets/figure3.svg';
import { ReactComponent as Talk1 } from 'assets/talk1.svg';
import { ReactComponent as Talk2 } from 'assets/talk2.svg';
import { ReactComponent as Talk3 } from 'assets/talk3.svg';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const CISTContents = (props: Props) => {
  const { setValue, getValues, disabled } = props;

  // 지남력
  const [sumValue, setSumValue] = useState(0);
  const radioId = [
    '지남력',
    'orientation1',
    'orientation2',
    'orientation3',
    'orientation4',
    'orientation5',
    '장소',
  ];

  const contentLabel = [
    {
      id: 1,
      ko: '시간',
      desc: [''],
    },
    {
      id: 2,
      ko: '',
      desc: ['ㆍ 올해는 몇 년도 입니까?'],
    },
    {
      id: 3,
      ko: '',
      desc: ['ㆍ 지금은 몇 월 입니까?'],
    },
    {
      id: 4,
      ko: '',
      desc: ['ㆍ 오늘은 며칠입니까?'],
    },
    {
      id: 5,
      ko: '',
      desc: ['ㆍ 오늘은 무슨 요일입니까?'],
    },
    {
      id: 6,
      ko: '장소',
      desc: [
        '지금 환자분이 계신 여기는 어디인가요? 이 장소가 어디인지 말씀해주세요',
      ],
    },
  ];
  const SumValue = () => {
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
    SumValue();
  };

  useEffect(() => {
    SumValue();
  }, []);

  // 기억력 1
  const 기억력1차 = [
    { label: '민수는', key: 'memory1.checked1' },
    { label: '/ 자전거를 타고', key: 'memory1.checked2' },
    { label: '/ 공원에 가서', key: 'memory1.checked3' },
    { label: '/ 11시 부터', key: 'memory1.checked4' },
    { label: '/ 야구를 했다', key: 'memory1.checked5' },
  ];

  const 기억력2차 = [
    { label: '/ 민수는', key: 'memory2.checked1' },
    { label: '/ 자전거를 타고', key: 'memory2.checked2' },
    { label: '/ 공원에 가서', key: 'memory2.checked3' },
    { label: '/ 11시 부터', key: 'memory2.checked4' },
    { label: '/ 야구를 했다', key: 'memory2.checked5' },
  ];

  // 주의력
  const [sumAtention, setSumAtention] = useState(0);
  const radioId1 = [
    '숫자',
    'attention1',
    'attention2',
    '거꾸로 말하기',
    'attention3',
    '거꾸로문제',
  ];

  const atentionLabel = [
    {
      id: 1,
      ko: '숫자 바로 따라 말하기',
      desc: [''],
    },
    {
      id: 2,
      ko: '',
      desc: ['ㆍ 6 - 9 - 7 - 3'],
    },
    {
      id: 3,
      ko: '',
      desc: ['ㆍ 5 - 7 -2 - 8 - 4'],
    },
    {
      id: 4,
      ko: '거꾸로 말하기',
      desc: [''],
    },
    {
      id: 5,
      ko: '',
      desc: ['ㆍ 금수강산'],
    },
  ];

  const atentionSumValue = () => {
    setSumAtention(
      radioId1.reduce((acc, cur) => {
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const atentionHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    atentionSumValue();
  };

  useEffect(() => {
    atentionSumValue();
  }, []);

  // 시공간 기능
  const [sumFigure, setSumFigure] = useState(0);

  const radioId2 = ['도형모사', 'visual_spatial_ability', 'zz'];
  const figureLabel = [
    {
      id: 1,
      ko: '도형모사',
      desc: [''],
    },
    {
      id: 2,
      ko: '제목',
      desc: [''],
    },
  ];

  const figureSumValue = () => {
    setSumFigure(
      radioId2.reduce((acc, cur) => {
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const figureHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    figureSumValue();
  };

  useEffect(() => {
    figureSumValue();
  }, []);

  // 집행 기능
  const [sumPerform, setSumPerform] = useState(0);
  const radioId3 = [
    '1',
    'executive_function1_1',
    '3',
    'executive_function1_2',
    '5',
    'executive_function1_3',
    '7',
  ];

  const performLabel = [
    {
      id: 1,
      ko: '시각 추론 1',
      desc: [''],
    },
    {
      id: 2,
      ko: '네모',
      desc: [''],
    },
    {
      id: 3,
      ko: '시각 추론 2',
      desc: [''],
    },
    {
      id: 4,
      ko: '네모네개',
      desc: [''],
    },
    {
      id: 5,
      ko: '언어 추론',
      desc: [''],
    },
    {
      id: 6,
      ko: '네모안에 글씨',
      desc: [''],
    },
  ];

  const performSumValue = () => {
    setSumPerform(
      radioId3.reduce((acc, cur) => {
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const performHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    performSumValue();
  };

  useEffect(() => {
    performSumValue();
  }, []);

  // 기억력 2
  const 기억력3차 = [
    { id: 1, label: '/ 민수는', key: 'memory3.checked1' },
    { id: 2, label: '/ 자전거', key: 'memory3.checked2' },
    { id: 3, label: '/ 공원', key: 'memory3.checked3' },
    { id: 4, label: '/ 11시', key: 'memory3.checked4' },
    { id: 5, label: '/ 야구', key: 'memory3.checked5' },
  ];

  const 기억력4차 = [
    { label: '영수', key: 'memory4.checked1' },
    { label: '버스', key: 'memory4.checked2' },
    { label: '공원', key: 'memory4.checked3' },
    { label: '10시', key: 'memory4.checked4' },
    { label: '농구', key: 'memory4.checked5' },
  ];

  const 기억력5차 = [
    { label: '민수', key: 'memory4.checked6' },
    { label: '오토바이', key: 'memory4.checked7' },
    { label: '놀이터', key: 'memory4.checked8' },
    { label: '11시', key: 'memory4.checked9' },
    { label: '축구', key: 'memory4.checked10' },
  ];

  const 기억력6차 = [
    { label: '진수', key: 'memory4.checked11' },
    { label: '자전거', key: 'memory4.checked12' },
    { label: '운동장', key: 'memory4.checked13' },
    { label: '12시', key: 'memory4.checked14' },
    { label: '야구', key: 'memory4.checked15' },
  ];
  const [checkedList, setCheckedList] = useState<Array<string>>([]);

  const onCheckedItem = useCallback(
    (checked: boolean, value: string) => {
      if (checked) {
        setCheckedList(prev => {
          return [...prev, value];
        });
      } else if (!checked) {
        setCheckedList(
          checkedList.filter(el => {
            return el !== value;
          })
        );
      }
    },
    [checkedList]
  );

  const nuevo = checkedList.map(i => Number(i));

  const sumChecked = nuevo.length * 2;

  // 언어 기능
  const [sumTalk, setSumTalk] = useState(0);
  const radioId4 = [
    '1',
    'language_function1',
    '3',
    'language_function2',
    '5',
    'language_function3',
    '7',
    'language_function4',
  ];

  const talkLabel = [
    {
      id: 1,
      ko: '이름 대기 1',
      desc: [''],
    },
    {
      id: 2,
      ko: '그네',
      desc: [''],
    },
    {
      id: 3,
      ko: '이름 대기 2',
      desc: [''],
    },
    {
      id: 4,
      ko: '칫솔',
      desc: [''],
    },
    {
      id: 5,
      ko: '이름 대기 3',
      desc: [''],
    },
    {
      id: 6,
      ko: '주사위',
      desc: [''],
    },
    {
      id: 7,
      ko: '이해력',
      desc: [''],
    },
    {
      id: 8,
      ko: '말하는대로',
      desc: [''],
    },
  ];

  const talkSumValue = () => {
    setSumTalk(
      radioId4.reduce((acc, cur) => {
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const talkHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    talkSumValue();
  };

  useEffect(() => {
    talkSumValue();
  }, []);

  // 집행 기능
  const [sumLast, setSumLast] = useState(0);
  const radioId5 = ['거꾸로 말하기', 'executive_function2', '풀기'];

  const lastLabel = [
    {
      id: 1,
      ko: '유창성',
      desc: [''],
    },
    {
      id: 2,
      ko: '',
      desc: ['[반응 기록 / 제한시간 1분]'],
    },
  ];

  const lastSumValue = () => {
    setSumLast(
      radioId5.reduce((acc, cur) => {
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const lastHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    lastSumValue();
  };

  useEffect(() => {
    lastSumValue();
  }, []);

  // 합계
  const columns = [
    { fieldId: 'name', label: '인지영역' },
    { fieldId: 'amount', label: '지남력' },
    { fieldId: 'count', label: '주의력' },
    { fieldId: 'days', label: '시공간기능' },
    { fieldId: 'how_to', label: '집행기능' },
    { fieldId: 'remember', label: '기억력' },
    { fieldId: 'talk', label: '언어기능' },
    { fieldId: 'all', label: '총점' },
  ];

  const rows = Array.from({ length: 1 }, (_, i) => {
    const prefix = `out_hospital_medicines.${i}`;
    return {
      id: i,
      name: (
        <Typography
          gutterBottom
          minWidth={115}
          fontSize={14}
          fontWeight={400}
          variant="subtitle1"
        >
          점수
        </Typography>
      ),
      amount: (
        <Typography
          gutterBottom
          minWidth={115}
          fontSize={14}
          fontWeight={400}
          variant="subtitle1"
        >
          {sumValue}/5
        </Typography>
      ),
      count: (
        <Typography
          gutterBottom
          minWidth={115}
          fontSize={14}
          fontWeight={400}
          variant="subtitle1"
        >
          {sumAtention}/3
        </Typography>
      ),
      days: (
        <Typography
          gutterBottom
          minWidth={115}
          fontWeight={400}
          fontSize={14}
          variant="subtitle1"
        >
          {sumFigure}/2
        </Typography>
      ),
      how_to: (
        <Typography
          gutterBottom
          minWidth={115}
          fontWeight={400}
          fontSize={14}
          variant="subtitle1"
        >
          {sumPerform + sumLast}/6
        </Typography>
      ),
      remember: (
        <Typography
          gutterBottom
          minWidth={115}
          fontWeight={400}
          fontSize={14}
          variant="subtitle1"
        >
          {sumChecked}/10
        </Typography>
      ),
      talk: (
        <Typography
          gutterBottom
          minWidth={115}
          fontWeight={400}
          fontSize={14}
          variant="subtitle1"
        >
          {sumTalk}/4
        </Typography>
      ),
      all: (
        <Typography
          gutterBottom
          minWidth={115}
          fontSize={14}
          fontWeight={400}
          variant="subtitle1"
        >
          {sumLast +
            sumTalk +
            sumPerform +
            sumValue +
            sumAtention +
            sumChecked +
            sumFigure}
          /30
        </Typography>
      ),
    };
  });

  return (
    <Fragment>
      <SectionTitle title="지남력" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {contentLabel.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              if (content.ko === '시간') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '170px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '200px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          오늘 날짜를 말씀해주세요.
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else {
                return (
                  <TableRow>
                    <StyledTableCellTwo
                      align="left"
                      sx={{
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        width: '340px',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {content.ko}
                    </StyledTableCellTwo>
                    <StyledTableCellTwo
                      align="center"
                      sx={{
                        padding: '16px',
                        width: '80px',
                        whiteSpace: 'pre-wrap',
                      }}
                    ></StyledTableCellTwo>
                    <StyledTableCellWithoutLeftRightTwo>
                      {content.desc.map((v, i) => {
                        return (
                          <TableRow
                            sx={{
                              height: '44px',
                              lineHeight: '44px',
                            }}
                          >
                            <Box sx={{ paddingLeft: '16px', width: '1100px' }}>
                              {v}
                            </Box>
                          </TableRow>
                        );
                      })}
                    </StyledTableCellWithoutLeftRightTwo>
                    <StyledTableCellWithoutLeftTwo>
                      <RadioGroup
                        name={radioId[content.id - 1]}
                        defaultValue={Number(
                          getValues(radioId[content.id - 1])
                        )}
                      >
                        {content.desc.map((_, i) => (
                          <TableRow
                            sx={{
                              height: '44px',
                              lineHeight: '44px',
                              textAlign: 'center',
                            }}
                          >
                            <Box sx={{ width: '200px' }}>
                              <FormControlLabel
                                sx={{ paddingRight: '50px' }}
                                label="0"
                                control={
                                  <Radio
                                    disabled={disabled}
                                    name={radioId[content.id - 1]}
                                    value={i}
                                    onChange={handleChange}
                                  />
                                }
                              />
                              <FormControlLabel
                                label="1"
                                control={
                                  <Radio
                                    disabled={disabled}
                                    name={radioId[content.id - 1]}
                                    value={i + 1}
                                    onChange={handleChange}
                                  />
                                }
                              />
                            </Box>
                          </TableRow>
                        ))}
                      </RadioGroup>
                    </StyledTableCellWithoutLeftTwo>
                  </TableRow>
                );
              }
            }
          )}
        </div>
      </Grid>

      <SectionTitle title="기억력" />
      <Grid item xs={12}>
        <div>
          <TableRow>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  display: 'flex',
                  paddingTop: '16px',
                  width: '170px',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                  기억등록
                </Typography>
              </div>
              <div style={{ paddingTop: '16px', marginLeft: '20px' }}>
                <Typography sx={{ fontSize: '14px' }}>
                  지금부터 외우셔야 하는 문장 하나를 불러드리겠습니다. 끝까지
                  듣고 따라 해 보세요.
                </Typography>
              </div>
            </div>
          </TableRow>
        </div>
        <Box sx={{ width: '30%', marginLeft: '190px', marginTop: '20px' }}>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '24px',
              marginBottom: '8px',
              marginLeft: '24px',
            }}
          >
            &lt; 1차 시도 &gt;
          </Typography>
          <Box
            sx={{
              height: '230px',
              display: 'flex',
              flexDirection: 'column',
              width: '800px',
            }}
          >
            {기억력1차.map((v, i) => (
              <Form.MuiCheckbox
                sx={{ marginLeft: '30px' }}
                label={v.label}
                disabled={disabled}
                defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                onChange={(_, checked) => {
                  setValue(v.key, checked);
                }}
              />
            ))}
            <Typography
              sx={{
                fontSize: '14px',
                marginTop: '20px',
                marginBottom: '20px',
                marginLeft: '30px',
              }}
            >
              잘 하셨습니다. 제가 다시 한 번 불러드리겠습니다. 다시 여쭈어
              볼테니 잘 듣고 따라 해 보세요.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '30%', marginLeft: '190px', marginTop: '20px' }}>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '24px',
              marginBottom: '8px',
              marginLeft: '24px',
            }}
          >
            &lt; 2차 시도 &gt;
          </Typography>
          <Box
            sx={{
              height: '230px',
              display: 'flex',
              flexDirection: 'column',
              width: '800px',
            }}
          >
            {기억력2차.map((v, i) => (
              <Form.MuiCheckbox
                sx={{ marginLeft: '30px' }}
                label={v.label}
                disabled={disabled}
                defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                onChange={(_, checked) => {
                  setValue(v.key, checked);
                }}
              />
            ))}
            <Typography
              sx={{
                fontSize: '14px',
                marginBottom: '20px',
                marginLeft: '30px',
              }}
            >
              제가 이 문장을 나중에 여쭈어보겠습니다. 잘 기억하세요.
              <Typography
                sx={{
                  fontSize: '14px',
                  height: '40px',
                  display: 'flex',
                  paddingTop: '2px',
                }}
              >
                * 점수 없음 (단, 순서에 상관없이 대상자가 말한 단어에 체크)
                <CheckedIcon style={{ marginLeft: '4px', marginTop: '2px' }} />
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Grid>

      <SectionTitle title="주의력" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {atentionLabel.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              if (content.ko === '숫자 바로 따라 말하기') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          제가 불러드리는 숫자를 그대로 따라 해 주세요.
                          <br />
                          (대상자가 잘 이해하지 못하는 경우) 제가 1-2-3 하고
                          부르면, 똑같이 1.2.3 이렇게 말씀해 주세요.
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '거꾸로 말하기') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          제가 불러드리는 말을 끝에서부터 거꾸로 따라 해 주세요.
                          <br />
                          (대상자가 잘 이해하지 못하는 경우) (환자이름)님 이름을
                          거꾸로하면 (환자이름 거꾸로) 이렇게 되지요?
                          <br />
                          마찬가지로 제가 부르는 말을 거꾸로 말씀해주세요.
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else {
                return (
                  <TableRow>
                    <StyledTableCellTwo
                      align="left"
                      sx={{
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        width: '130px',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {content.ko}
                    </StyledTableCellTwo>
                    <StyledTableCellWithoutLeftRightTwo>
                      {content.desc.map((v, i) => {
                        return (
                          <TableRow
                            sx={{
                              height: '44px',
                              lineHeight: '44px',
                            }}
                          >
                            <Box sx={{ paddingLeft: '16px', width: '1145px' }}>
                              {v}
                            </Box>
                          </TableRow>
                        );
                      })}
                    </StyledTableCellWithoutLeftRightTwo>
                    <StyledTableCellWithoutLeftTwo>
                      <RadioGroup
                        name={radioId1[content.id - 1]}
                        defaultValue={Number(
                          getValues(radioId1[content.id - 1])
                        )}
                      >
                        {content.desc.map((_, i) => (
                          <TableRow
                            sx={{
                              height: '44px',
                              lineHeight: '44px',
                              textAlign: 'center',
                            }}
                          >
                            <Box sx={{ width: '200px' }}>
                              <FormControlLabel
                                sx={{ paddingRight: '50px' }}
                                label="0"
                                control={
                                  <Radio
                                    disabled={disabled}
                                    name={radioId1[content.id - 1]}
                                    value={i}
                                    onChange={atentionHandleChange}
                                  />
                                }
                              />
                              <FormControlLabel
                                label="1"
                                control={
                                  <Radio
                                    disabled={disabled}
                                    name={radioId1[content.id - 1]}
                                    value={i + 1}
                                    onChange={atentionHandleChange}
                                  />
                                }
                              />
                            </Box>
                          </TableRow>
                        ))}
                      </RadioGroup>
                    </StyledTableCellWithoutLeftTwo>
                  </TableRow>
                );
              }
            }
          )}
        </div>
      </Grid>

      <SectionTitle title="시공간 기능" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {figureLabel.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              if (content.ko === '도형모사') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          (그림을 가리키며) 여기 점을 연결하여 그린 그림이
                          있습니다.
                          <br />
                          이 그림과 똑같이 되도록 (아래 반응 공간을 가리키며)
                          같은 위치에 그려보세요.
                          <br />
                          점을 연결해서 그리면 됩니다.
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '제목') {
                return (
                  <>
                    <TableRow sx={{ display: 'block' }}>
                      <div style={{ display: 'flex' }}>
                        <StyledTableCellTwo
                          align="left"
                          sx={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            width: '130px',
                            whiteSpace: 'pre-wrap',
                          }}
                        ></StyledTableCellTwo>
                        <StyledTableCellWithoutLeftRightTwo>
                          {content.desc.map((v, i) => {
                            return (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                }}
                              >
                                <TableRow
                                  sx={{
                                    height: '44px',
                                    lineHeight: '44px',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: '16px',
                                      marginTop: '20px',
                                      width: '1010px',
                                    }}
                                  >
                                    <Spacetime />
                                  </Box>
                                </TableRow>
                              </TableRow>
                            );
                          })}
                        </StyledTableCellWithoutLeftRightTwo>
                        <StyledTableCellWithoutLeftTwo>
                          <RadioGroup
                            name={radioId2[content.id - 1]}
                            defaultValue={Number(
                              getValues(radioId2[content.id - 1])
                            )}
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
                                    width: '310px',
                                    textAlign: 'right',
                                    paddingTop: '50px',
                                  }}
                                >
                                  <FormControlLabel
                                    sx={{
                                      paddingRight: '50px',
                                    }}
                                    label="0"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId2[content.id - 1]}
                                        value={i}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="1"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId2[content.id - 1]}
                                        value={1}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label="2"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId2[content.id - 1]}
                                        value={2}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                </Box>
                              </TableRow>
                            ))}
                          </RadioGroup>
                        </StyledTableCellWithoutLeftTwo>
                      </div>
                    </TableRow>
                  </>
                );
              }
            }
          )}
        </div>
      </Grid>

      <SectionTitle title="집행 기능" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {performLabel.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              if (content.ko === '시각 추론 1') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          여기 모양들이 정해진 순서로 나옵니다. 모양들을 보면서
                          어떤 순서로 나오는지 생각해 보세요.
                          <br />
                          (왼쪽부터 하나씩 가리키며), 네모, 동그람, 빈칸,
                          세모입니다. 그렇다면 여기 빈칸에는 무엇이 들어가야
                          할까요?
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '네모') {
                return (
                  <>
                    <TableRow sx={{ display: 'block' }}>
                      <div style={{ display: 'flex' }}>
                        <StyledTableCellTwo
                          align="left"
                          sx={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            width: '130px',
                            whiteSpace: 'pre-wrap',
                          }}
                        ></StyledTableCellTwo>
                        <StyledTableCellWithoutLeftRightTwo>
                          {content.desc.map((v, i) => {
                            return (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                }}
                              >
                                <TableRow
                                  sx={{
                                    height: '44px',
                                    lineHeight: '44px',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: '16px',
                                      marginTop: '20px',
                                      width: '1145px',
                                    }}
                                  >
                                    <Figure1 />
                                  </Box>
                                </TableRow>
                              </TableRow>
                            );
                          })}
                        </StyledTableCellWithoutLeftRightTwo>
                        <StyledTableCellWithoutLeftTwo>
                          <RadioGroup
                            name={radioId3[content.id - 1]}
                            defaultValue={Number(
                              getValues(radioId3[content.id - 1])
                            )}
                          >
                            {content.desc.map((_, i) => (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                  textAlign: 'center',
                                }}
                              >
                                <Box sx={{ width: '200px' }}>
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="0"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId3[content.id - 1]}
                                        value={i}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label="1"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId3[content.id - 1]}
                                        value={i + 1}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                </Box>
                              </TableRow>
                            ))}
                          </RadioGroup>
                        </StyledTableCellWithoutLeftTwo>
                      </div>
                    </TableRow>
                  </>
                );
              } else if (content.ko === '시각 추론 2') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          (맨 앞 그림을 가리키며) 여기 네 칸 중의 한 칸에 별이
                          하나 있습니다.
                          <br />
                          (두 번째 그림을 가리키며) 별이 이렇게 다른 위치로
                          이동합니다. 어떤 식으로 이동하는지 잘 생각해 보십시오.
                          <br />
                          (마지막 반응 칸을 가리키며) 여기서는 네 칸 중에 별이
                          어디에 위치하게 될까요?
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '네모네개') {
                return (
                  <>
                    <TableRow sx={{ display: 'block' }}>
                      <div style={{ display: 'flex' }}>
                        <StyledTableCellTwo
                          align="left"
                          sx={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            width: '130px',
                            whiteSpace: 'pre-wrap',
                          }}
                        ></StyledTableCellTwo>
                        <StyledTableCellWithoutLeftRightTwo>
                          {content.desc.map((v, i) => {
                            return (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                }}
                              >
                                <TableRow
                                  sx={{
                                    height: '44px',
                                    lineHeight: '44px',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: '16px',
                                      marginTop: '20px',
                                      width: '1145px',
                                    }}
                                  >
                                    <Figure2 />
                                  </Box>
                                </TableRow>
                              </TableRow>
                            );
                          })}
                        </StyledTableCellWithoutLeftRightTwo>
                        <StyledTableCellWithoutLeftTwo>
                          <RadioGroup
                            name={radioId3[content.id - 1]}
                            defaultValue={Number(
                              getValues(radioId3[content.id - 1])
                            )}
                          >
                            {content.desc.map((_, i) => (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                  textAlign: 'center',
                                }}
                              >
                                <Box sx={{ width: '200px' }}>
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="0"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId3[content.id - 1]}
                                        value={i}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label="1"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId3[content.id - 1]}
                                        value={i + 1}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                </Box>
                              </TableRow>
                            ))}
                          </RadioGroup>
                        </StyledTableCellWithoutLeftTwo>
                      </div>
                    </TableRow>
                  </>
                );
              } else if (content.ko === '언어 추론') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          카드에 숫자와 계절이 하나씩 적혀 있습니다. '1 - 봄 - 2
                          - 여름~' 이렇게 연결되어 나갑니다.
                          <br />
                          다음 빈칸에는 무엇이 들어갈 차례일까요?
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '네모안에 글씨') {
                return (
                  <>
                    <TableRow sx={{ display: 'block' }}>
                      <div style={{ display: 'flex' }}>
                        <StyledTableCellTwo
                          align="left"
                          sx={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            width: '130px',
                            whiteSpace: 'pre-wrap',
                          }}
                        ></StyledTableCellTwo>
                        <StyledTableCellWithoutLeftRightTwo>
                          {content.desc.map((v, i) => {
                            return (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                }}
                              >
                                <TableRow
                                  sx={{
                                    height: '44px',
                                    lineHeight: '44px',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: '16px',
                                      marginTop: '20px',
                                      width: '1010px',
                                    }}
                                  >
                                    <Figure3 />
                                  </Box>
                                </TableRow>
                              </TableRow>
                            );
                          })}
                        </StyledTableCellWithoutLeftRightTwo>
                        <StyledTableCellWithoutLeftTwo>
                          <RadioGroup
                            name={radioId3[content.id - 1]}
                            defaultValue={Number(
                              getValues(radioId3[content.id - 1])
                            )}
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
                                  sx={{ width: '300px', textAlign: 'right' }}
                                >
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="0"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId3[content.id - 1]}
                                        value={i}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="1"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId3[content.id - 1]}
                                        value={i + 1}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label="2"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId3[content.id - 1]}
                                        value={i + 2}
                                        onChange={performHandleChange}
                                      />
                                    }
                                  />
                                </Box>
                              </TableRow>
                            ))}
                          </RadioGroup>
                        </StyledTableCellWithoutLeftTwo>
                      </div>
                    </TableRow>
                  </>
                );
              }
            }
          )}
        </div>
      </Grid>

      <SectionTitle title="기억력" />
      <Grid item xs={12}>
        <div>
          <TableRow>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  display: 'flex',
                  paddingTop: '16px',
                  width: '170px',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                  기억등록
                </Typography>
              </div>
              <div style={{ paddingTop: '16px', marginLeft: '20px' }}>
                <Typography sx={{ fontSize: '14px' }}>
                  제가 조금전에 외우라고 불러드렸던 문장을 다시 한 번
                  말씀해주세요.
                </Typography>
              </div>
            </div>
          </TableRow>
        </div>
        <Box sx={{ width: '30%', marginLeft: '190px', marginTop: '20px' }}>
          <Box
            sx={{
              height: '230px',
              display: 'flex',
              flexDirection: 'column',
              width: '800px',
            }}
          >
            {기억력3차.map((v, i) => (
              <div style={{ display: 'flex' }}>
                <div style={{ height: '50px', width: '200px' }}>
                  <Form.MuiCheckbox
                    label={v.label}
                    disabled={disabled}
                    defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                    onChange={(e, checked) => {
                      setValue(v.key, checked);
                      onCheckedItem(e.target.checked, e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    marginLeft: '20px',
                    fontSize: '14px',
                    paddingTop: '8px',
                  }}
                >
                  2점
                </div>
              </div>
            ))}
          </Box>
        </Box>

        <div>
          <TableRow>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  display: 'flex',
                  paddingTop: '16px',
                  width: '170px',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                  기억 재인
                </Typography>
              </div>
              <div style={{ paddingTop: '16px', marginLeft: '20px' }}>
                <Typography sx={{ fontSize: '14px' }}>
                  기억회상 과제에서 회상하지 못한 항목만 시행(제시된 것이 기억된
                  정보와 일치하는가를 판단하는 과정)
                </Typography>
              </div>
            </div>
          </TableRow>
        </div>
        <Box
          sx={{ width: '7%', display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ width: '30%', marginLeft: '190px', marginTop: '20px' }}>
            <Box
              sx={{
                height: '230px',
                display: 'flex',
                flexDirection: 'column',
                width: '800px',
              }}
            >
              {기억력4차.map((v, i) => (
                <Form.MuiCheckbox
                  label={v.label}
                  disabled={disabled}
                  defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                  onChange={(_, checked) => {
                    setValue(v.key, checked);
                  }}
                />
              ))}
              <Typography sx={{ fontSize: '14px', marginBottom: '20px' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    height: '40px',
                    display: 'flex',
                    paddingTop: '2px',
                  }}
                >
                  각 항목 당 대상자가 말한 것을 체크
                  <CheckedIcon
                    style={{ marginLeft: '4px', marginTop: '2px' }}
                  />
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: '30%', marginLeft: '190px', marginTop: '20px' }}>
            <Box
              sx={{
                height: '230px',
                display: 'flex',
                flexDirection: 'column',
                width: '800px',
              }}
            >
              {기억력5차.map((v, i) => (
                <Form.MuiCheckbox
                  label={v.label}
                  disabled={disabled}
                  defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                  onChange={(_, checked) => {
                    setValue(v.key, checked);
                  }}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ width: '30%', marginLeft: '190px', marginTop: '20px' }}>
            <Box
              sx={{
                height: '230px',
                display: 'flex',
                flexDirection: 'column',
                width: '800px',
              }}
            >
              {기억력6차.map((v, i) => (
                <Form.MuiCheckbox
                  label={v.label}
                  disabled={disabled}
                  defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                  onChange={(_, checked) => {
                    setValue(v.key, checked);
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>

      <SectionTitle title="언어 기능" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {talkLabel.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              if (content.ko === '이름 대기 1') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          여기에 있는 이 그림의 이름을 말씀하세요. 이것은
                          무엇입니까? (그네)
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '그네') {
                return (
                  <>
                    <TableRow sx={{ display: 'block' }}>
                      <div style={{ display: 'flex' }}>
                        <StyledTableCellTwo
                          align="left"
                          sx={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            width: '130px',
                            whiteSpace: 'pre-wrap',
                          }}
                        ></StyledTableCellTwo>
                        <StyledTableCellWithoutLeftRightTwo>
                          {content.desc.map((v, i) => {
                            return (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                }}
                              >
                                <TableRow
                                  sx={{
                                    height: '44px',
                                    lineHeight: '44px',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: '16px',
                                      marginTop: '20px',
                                      width: '1145px',
                                    }}
                                  >
                                    <Talk1 />
                                  </Box>
                                </TableRow>
                              </TableRow>
                            );
                          })}
                        </StyledTableCellWithoutLeftRightTwo>
                        <StyledTableCellWithoutLeftTwo>
                          <RadioGroup
                            name={radioId4[content.id - 1]}
                            defaultValue={Number(
                              getValues(radioId4[content.id - 1])
                            )}
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
                                  sx={{ width: '200px', paddingTop: '60px' }}
                                >
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="0"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId4[content.id - 1]}
                                        value={i}
                                        onChange={talkHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label="1"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId4[content.id - 1]}
                                        value={i + 1}
                                        onChange={talkHandleChange}
                                      />
                                    }
                                  />
                                </Box>
                              </TableRow>
                            ))}
                          </RadioGroup>
                        </StyledTableCellWithoutLeftTwo>
                      </div>
                    </TableRow>
                  </>
                );
              } else if (content.ko === '이름 대기 2') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          여기에 있는 이 그림의 이름을 말씀하세요. 이것은
                          무엇입니까? (칫솔)
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '칫솔') {
                return (
                  <>
                    <TableRow sx={{ display: 'block' }}>
                      <div style={{ display: 'flex' }}>
                        <StyledTableCellTwo
                          align="left"
                          sx={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            width: '130px',
                            whiteSpace: 'pre-wrap',
                          }}
                        ></StyledTableCellTwo>
                        <StyledTableCellWithoutLeftRightTwo>
                          {content.desc.map((v, i) => {
                            return (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                }}
                              >
                                <TableRow
                                  sx={{
                                    height: '44px',
                                    lineHeight: '44px',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: '16px',
                                      marginTop: '20px',
                                      width: '1145px',
                                    }}
                                  >
                                    <Talk2 />
                                  </Box>
                                </TableRow>
                              </TableRow>
                            );
                          })}
                        </StyledTableCellWithoutLeftRightTwo>
                        <StyledTableCellWithoutLeftTwo>
                          <RadioGroup
                            name={radioId4[content.id - 1]}
                            defaultValue={Number(
                              getValues(radioId4[content.id - 1])
                            )}
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
                                  sx={{ width: '200px', paddingTop: '20px' }}
                                >
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="0"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId4[content.id - 1]}
                                        value={i}
                                        onChange={talkHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label="1"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId4[content.id - 1]}
                                        value={i + 1}
                                        onChange={talkHandleChange}
                                      />
                                    }
                                  />
                                </Box>
                              </TableRow>
                            ))}
                          </RadioGroup>
                        </StyledTableCellWithoutLeftTwo>
                      </div>
                    </TableRow>
                  </>
                );
              } else if (content.ko === '이름 대기 3') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          여기에 있는 이 그림의 이름을 말씀하세요. 이것은
                          무엇입니까? (주사위)
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '주사위') {
                return (
                  <>
                    <TableRow sx={{ display: 'block' }}>
                      <div style={{ display: 'flex' }}>
                        <StyledTableCellTwo
                          align="left"
                          sx={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            width: '130px',
                            whiteSpace: 'pre-wrap',
                          }}
                        ></StyledTableCellTwo>
                        <StyledTableCellWithoutLeftRightTwo>
                          {content.desc.map((v, i) => {
                            return (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                }}
                              >
                                <TableRow
                                  sx={{
                                    height: '44px',
                                    lineHeight: '44px',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: '16px',
                                      marginTop: '20px',
                                      width: '1145px',
                                    }}
                                  >
                                    <Talk3 />
                                  </Box>
                                </TableRow>
                              </TableRow>
                            );
                          })}
                        </StyledTableCellWithoutLeftRightTwo>
                        <StyledTableCellWithoutLeftTwo>
                          <RadioGroup
                            name={radioId4[content.id - 1]}
                            defaultValue={Number(
                              getValues(radioId4[content.id - 1])
                            )}
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
                                  sx={{ width: '200px', paddingTop: '60px' }}
                                >
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="0"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId4[content.id - 1]}
                                        value={i}
                                        onChange={talkHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label="1"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId4[content.id - 1]}
                                        value={i + 1}
                                        onChange={talkHandleChange}
                                      />
                                    }
                                  />
                                </Box>
                              </TableRow>
                            ))}
                          </RadioGroup>
                        </StyledTableCellWithoutLeftTwo>
                      </div>
                    </TableRow>
                  </>
                );
              } else if (content.ko === '이해력') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          제가 말씀드리는 대로 행동으로 그래도 보여주십시오.
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else if (content.ko === '말하는대로') {
                return (
                  <>
                    <TableRow sx={{ display: 'block' }}>
                      <div style={{ display: 'flex' }}>
                        <StyledTableCellTwo
                          align="left"
                          sx={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            width: '130px',
                            whiteSpace: 'pre-wrap',
                          }}
                        ></StyledTableCellTwo>
                        <StyledTableCellWithoutLeftRightTwo>
                          {content.desc.map((v, i) => {
                            return (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                }}
                              >
                                <TableRow
                                  sx={{
                                    height: '44px',
                                    lineHeight: '44px',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: '20px',
                                      width: '1145px',
                                    }}
                                  >
                                    박수를 두 번 치고, 주먹을 쥐세요.
                                  </Box>
                                </TableRow>
                              </TableRow>
                            );
                          })}
                        </StyledTableCellWithoutLeftRightTwo>
                        <StyledTableCellWithoutLeftTwo>
                          <RadioGroup
                            name={radioId4[content.id - 1]}
                            defaultValue={Number(
                              getValues(radioId4[content.id - 1])
                            )}
                          >
                            {content.desc.map((_, i) => (
                              <TableRow
                                sx={{
                                  height: '44px',
                                  lineHeight: '44px',
                                  textAlign: 'center',
                                }}
                              >
                                <Box sx={{ width: '200px' }}>
                                  <FormControlLabel
                                    sx={{ paddingRight: '50px' }}
                                    label="0"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId4[content.id - 1]}
                                        value={i}
                                        onChange={talkHandleChange}
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label="1"
                                    control={
                                      <Radio
                                        disabled={disabled}
                                        name={radioId4[content.id - 1]}
                                        value={i + 1}
                                        onChange={talkHandleChange}
                                      />
                                    }
                                  />
                                </Box>
                              </TableRow>
                            ))}
                          </RadioGroup>
                        </StyledTableCellWithoutLeftTwo>
                      </div>
                    </TableRow>
                  </>
                );
              }
            }
          )}
        </div>
      </Grid>

      <SectionTitle title="집행 기능" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {lastLabel.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              if (content.ko === '유창성') {
                return (
                  <TableRow sx={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          paddingTop: '16px',
                          width: '130px',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {content.ko}
                        </Typography>
                      </div>
                      <div
                        style={{
                          paddingTop: '16px',
                          marginLeft: '20px',
                          width: '700px',
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          지금부터 제가 그만이라고 말할 때까지 과일이나 채소를
                          최대한 많이 이야기 해주세요.
                        </Typography>
                      </div>
                    </div>
                  </TableRow>
                );
              } else {
                return (
                  <TableRow>
                    <StyledTableCellTwo
                      align="left"
                      sx={{
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        width: '130px',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {content.ko}
                    </StyledTableCellTwo>
                    <StyledTableCellWithoutLeftRightTwo>
                      {content.desc.map((v, i) => {
                        return (
                          <TableRow
                            sx={{
                              height: '44px',
                              lineHeight: '44px',
                            }}
                          >
                            <Box sx={{ paddingLeft: '125px', width: '1145px' }}>
                              {v}
                              <Typography
                                sx={{
                                  fontSize: '14px',
                                  marginTop: '-10px',
                                  paddingBottom: '30px',
                                }}
                              >
                                0-8개 : 0점
                                <br />
                                9-14개 : 1점
                                <br />
                                15개 이상 : 2점
                              </Typography>
                            </Box>
                          </TableRow>
                        );
                      })}
                    </StyledTableCellWithoutLeftRightTwo>
                    <StyledTableCellWithoutLeftTwo>
                      <RadioGroup
                        name={radioId5[content.id - 1]}
                        defaultValue={Number(
                          getValues(radioId5[content.id - 1])
                        )}
                      >
                        {content.desc.map((_, i) => (
                          <TableRow
                            sx={{
                              height: '44px',
                              lineHeight: '44px',
                              textAlign: 'center',
                            }}
                          >
                            <Box sx={{ width: '300px', marginTop: '-40px' }}>
                              <FormControlLabel
                                sx={{ paddingRight: '50px' }}
                                label="0"
                                control={
                                  <Radio
                                    disabled={disabled}
                                    name={radioId5[content.id - 1]}
                                    value={i}
                                    onChange={lastHandleChange}
                                  />
                                }
                              />
                              <FormControlLabel
                                sx={{ paddingRight: '50px' }}
                                label="1"
                                control={
                                  <Radio
                                    disabled={disabled}
                                    name={radioId5[content.id - 1]}
                                    value={1}
                                    onChange={lastHandleChange}
                                  />
                                }
                              />
                              <FormControlLabel
                                label="2"
                                control={
                                  <Radio
                                    disabled={disabled}
                                    name={radioId5[content.id - 1]}
                                    value={2}
                                    onChange={lastHandleChange}
                                  />
                                }
                              />
                            </Box>
                          </TableRow>
                        ))}
                      </RadioGroup>
                    </StyledTableCellWithoutLeftTwo>
                  </TableRow>
                );
              }
            }
          )}
        </div>
      </Grid>

      <Grid item xs={12}>
        <MuiTable columns={columns} rows={rows} />
      </Grid>
    </Fragment>
  );
};

export default CISTContents;
