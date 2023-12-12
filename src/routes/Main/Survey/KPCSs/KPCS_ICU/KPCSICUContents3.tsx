import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  TableBody,
  TableRow,
  useTheme,
  TableContainer,
} from '@mui/material';
import Form from 'components/Form';
import {
  StyledTableCellTwo,
  StyledTableCellWithoutLeftTwo,
  StyledTableCellWithoutLeftRightTwo,
} from 'routes/Main/style';
import SectionTitle from '../../components/SectionTitle';

import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';

const radioId5 = [
  'no34',
  'no35',
  'no36',
  'no37',
  'no38',
  'no39',
  'no40',
  'no41',
  'no42',
];

const 영역5 = [
  {
    id: 1,
    ko: '34. IV route 만들기, 중심정맥관 삽입시',
    info: ['회 당 2점 가산', 'IV를 처음 시작했을 때, 중심정맥관 삽입시 보조'],
    desc: ['해당 없음 ', '1회당 2점 : '], //인풋박스 확인!!
  },
  {
    id: 2,
    ko: '35. KVO (2회이하 수액교환)',
    info: [
      '2회 이하의 새로운 수액으로 교환, 매시간 주입속도 확인. IV catheter주위의 드레싱 교환, IV tube는 qd나 qod로 교환',
    ],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 3,
    ko: '36. Heparin lock',
    info: ['4시간마다 flush, IV catheter care, 라인 교환'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 4,
    ko: '37. simple IV',
    info: [
      '1개 route, 3-4회 수액교환',
      '3-4회 수액교환, 매시간 주입속도 확인, 수액교환 , 카테터 드레싱 , 매일 또는 2일마다 IV tube 교환',
    ],
    desc: ['해당 없음', '6점'],
  },
  {
    id: 5,
    ko: '38. complex IV',
    info: [
      '2개 이상 route, 5회 이상 수액교환, multilumen line',
      '5회 이상 수액교환, 두개 이상 IV,  multi-lumen line을 가진 경우, 매시간 주입속도 확인, 카테터 드레싱, 매일/2일마다 tube 교환',
    ],
    desc: ['해당 없음', '8점'],
  },
  {
    id: 6,
    ko: '39. 정주 투약 (약종류수)',
    info: [
      '해당되는 약품의 수를 입력, 정주약물/IV piggy back medication 추가약물, 지속적 주입 약물은 주사 횟수 또는 연결 횟수를 세어서 추가함.',
    ],
    desc: [
      '해당 없음',
      '2점: q 8h or 3회',
      '3점: q 6h or 4회',
      '4점: q 4h or 6회',
    ],
  },
  {
    id: 7,
    ko: '40. 혈액제제 (전혈, 농축 적혈구)',
    info: [
      '혈액의 종류에 관계없이 팩마다 2점 부여',
      '혈액준비, 확인, 활력증후 측정, 기록, filter 교환 포함',
    ],
    desc: ['해당 없음  ', '1개당 2점 : '], //인풋박스 확인!!
  },
  {
    id: 8,
    ko: '41. 혈액제제 (혈소판 6unit)',
    info: ['혈소판은 6개를 1회로 한다.'],
    desc: ['해당 없음   ', '1회당 2점 :  '], //인풋박스 확인!!
  },
  {
    id: 9,
    ko: '42. 비정주 투약 (IM, SC, PO, ID 등)',
    info: [
      '정맥주사를 제외한 모든 경로의 투약 포함 - 경구투약, 설하(sublingual), 피하주사, 근육주사, 좌약, 안약, 흡입제, eardrops, 연고 등 모든 종류의 투약이 포함',
      '약품의 개수가 아니고 투약을 위해 환자에게 가는 횟수를 센다.',
      '1회 방문으로 2개 이상 동시 투약하는 경우 1회로 계산한다(2회 이하는 ADL에서 포함되므로 점수가 없다.',
      'PRN 투약은 환자에게 투여된 경우에만 count 한다',
    ],
    desc: ['해당 없음', '2점: 3-12회 방문'],
  },
];

const radioId6 = [
  'no43',
  'no44',
  'no45',
  'no46',
  'no47',
  'no48',
  'no49',
  'no50',
  'no51',
  'no52',
  'no53',
  'no54',
];

const 영역6 = [
  {
    id: 1,
    ko: '43. 비위관 삽입, 유치도뇨 삽입, 관장',
    info: [
      '비위관 준비, 삽입, 정리 시',
      '유치도뇨의 준비, 삽입, 교환, 정리했을 때',
      'clearing, retension 목적으로 enema 할 때마다',
    ],
    desc: ['해당 없음 ', '1회당 2점 : '], //인풋박스 확인!!!
  },
  {
    id: 2,
    ko: '44. 심부혈전예방간호',
    info: [
      'ace rapping or 탄력스타킹',
      '심부혈전 형성의 예방을 위한 ace wrap 적용, stocking 교환을 shift 마다/하루 3번 했을 경우',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 3,
    ko: '45. 12-lead EKG record',
    info: ['간호사가 12 lead EKG를 직접 찍었을 때'],
    desc: ['해당 없음  ', '1회당 2점 :  '], //인풋박스 확인!!
  },
  {
    id: 4,
    ko: '46. 수술 전 처치',
    info: ['수술/시술전 피부 면도'],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 5,
    ko: '47. 단순드레싱 (4"*8") 15-30분',
    info: ['각종 wound 드레싱, 1회 제공 시 마다 가산'],
    desc: ['해당 없음   ', '1회당 1점 :   '], //인풋박스 확인!!!
  },
  {
    id: 6,
    ko: '48. 현장응급검사시행',
    info: [
      '중환자실내에서 현장응급검사(ABG, Electro, BST,  USG, Guaic test)를 위해 준비, 채혈, 검사를 6회 시행 시 마다 점수 추가',
    ],
    desc: ['해당 없음    ', '1회당 2점 :    '], //인풋박스 확인!!!
  },
  {
    id: 7,
    ko: '49. 검채체취 (혈액,객담,소변,대변)',
    info: [
      '3개에 1회 인정',
      '간호사에 의해 채취되어 검사실로 보내어진 것만 인정됨.',
      '하루 3회 시행이란 튜브 종류가 아니라 venipuncture나 혈액을 채취하는 횟수임. ABG, Electro를 동시 채혈하여 튜브 2개에 나눠 담은 경우 1회, 다른 시간에 한',
      '경우 2회로 한다',
    ],
    desc: ['해당 없음     ', '1회당 1점 :     '], //인풋박스 확인!!!
  },
  {
    id: 8,
    ko: '50. 튜브간호 (흉관,기관내관 등)',
    info: ['chest tube,  ET-tube care, 드레싱을 하루에 1번 했을 경우'],
    desc: ['해당 없음      ', '1회당 1점 :      '], //인풋박스 확인!!!
  },
  {
    id: 9,
    ko: '51. 배액관간호',
    info: [
      '배액관 드레싱 및 교환(gastrostomy tubes, penrose drain, ileostomy, colostomy, EVD, PTBD 등)',
    ],
    desc: ['해당 없음       ', '1회당 1점 :       '], //인풋박스 확인!!!
  },
  {
    id: 10,
    ko: '52. tube irrigation, instillation',
    info: ['tube의 irrigation or instillation을 하루에 4회 이하'],
    desc: ['해당 없음', '2점 : 4회 이하'],
  },
  {
    id: 11,
    ko: '53. 광선치료',
    info: [
      'infant circumcision을 assist하는 경우, phototherapy를 적용하는 경우',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 12,
    ko: '54. 기타 15-30분',
    info: [
      '15분~30분 동안 분류 항목에 없는 직접 간호가 제공된 경우로 환자 기록에 있어야 한다.',
      'intubation시 보조, pacemaker확인, fetal  monitoring, fundus check, 15-30분간 환자 동반시',
    ],
    desc: ['해당 없음', '2점: 횟수'],
  },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  sum5: number;
  setSum5: (sum5: number) => void;

  sum6: number;
  setSum6: (sum6: number) => void;

  ivRoute: number;
  setIvRoute: (ivRoute: number) => void;
  blood: number;
  setBlood: (blood: number) => void;
  bloodUnit: number;
  setBloodUnit: (bloodUnit: number) => void;

  nasogastric: number;
  setNasogastric: (nasogastric: number) => void;
  ekgRecord: number;
  setEkgRecord: (ekgRecord: number) => void;
  dressing: number;
  setDressing: (dressing: number) => void;
  emergency: number;
  setEmergency: (emergency: number) => void;
  testBodyOdor: number;
  setTestBodyOdor: (testBodyOdor: number) => void;
  tubeNursing: number;
  setTubeNursing: (tubeNursing: number) => void;
  drainageTube: number;
  setDrainageTube: (drainageTube: number) => void;
}

const KPCSICUContents3 = (props: Props) => {
  const { palette } = useTheme();

  const {
    disabled,
    setValue,
    getValues,
    register,

    setSum5,
    sum6,
    setSum6,

    setIvRoute,
    setBlood,
    setBloodUnit,

    setNasogastric,
    setEkgRecord,
    setDressing,
    setEmergency,
    setTestBodyOdor,
    setTubeNursing,
    setDrainageTube,
  } = props;

  const calculateSumValue5 = () => {
    setSum5(
      radioId5.reduce((acc, cur) => {
        // 인풋값 설정 34, 40, 41 번
        if (
          (cur === 'no34' && Number(getValues(cur)) > 0) ||
          (cur === 'no40' && Number(getValues(cur)) > 0) ||
          (cur === 'no41' && Number(getValues(cur)) > 0)
        ) {
          const value = Number(getValues(cur));
          return value ? acc + value - 1 : acc;
        }
        // 35, 36번
        else if (cur === 'no35' || cur === 'no36') {
          const value = Number(getValues(cur)) * 4;
          return value ? acc + value : acc;
        }
        // 37번
        else if (cur === 'no37') {
          const value = Number(getValues(cur)) * 6;
          return value ? acc + value : acc;
        }
        // 38번
        else if (cur === 'no38') {
          const value = Number(getValues(cur)) * 8;
          return value ? acc + value : acc;
        }
        // 39번
        else if (cur === 'no39' && Number(getValues(cur)) > 0) {
          const value = Number(getValues(cur)) + 1;
          return value ? acc + value : acc;
        }
        // 42번
        else if (cur === 'no42') {
          const value = Number(getValues(cur)) * 2;
          return value ? acc + value : acc;
        }
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const handleChange5 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue5();
  };

  const [disable34, setDisable34] = useState(false);
  const [disable40, setDisable40] = useState(false);
  const [disable41, setDisable41] = useState(false);

  const handleChange5_34_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no34_1', 0);
    setIvRoute(0);
    setDisable34(true);
    calculateSumValue5();
  };
  const handleChange5_34_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no34_1', 1);
    setIvRoute(2);
    setDisable34(false);
    calculateSumValue5();
  };

  const handleChange5_40_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no40_1', 0);
    setBlood(0);
    setDisable40(true);
    calculateSumValue5();
  };

  const handleChange5_40_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no40_1', 1);
    setBlood(2);
    setDisable40(false);
    calculateSumValue5();
  };

  const handleChange5_41_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no41_1', 0);
    setBloodUnit(0);
    setDisable41(true);
    calculateSumValue5();
  };

  const handleChange5_41_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no41_1', 1);
    setBloodUnit(2);
    setDisable41(false);
    calculateSumValue5();
  };

  const calculateSumValue6 = () => {
    setSum6(
      radioId6.reduce((acc, cur) => {
        if (
          (cur === 'no43' && Number(getValues(cur)) > 0) ||
          (cur === 'no45' && Number(getValues(cur)) > 0) ||
          (cur === 'no47' && Number(getValues(cur)) > 0) ||
          (cur === 'no48' && Number(getValues(cur)) > 0) ||
          (cur === 'no49' && Number(getValues(cur)) > 0) ||
          (cur === 'no50' && Number(getValues(cur)) > 0) ||
          (cur === 'no51' && Number(getValues(cur)) > 0)
        ) {
          const value = Number(getValues(cur));
          return value ? acc + value - 1 : acc;
        }

        const value = Number(getValues(cur)) * 2;
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const handleChange6 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue6();
  };

  const [disable43, setDisable43] = useState(false);
  const [disable45, setDisable45] = useState(false);
  const [disable47, setDisable47] = useState(false);
  const [disable48, setDisable48] = useState(false);
  const [disable49, setDisable49] = useState(false);
  const [disable50, setDisable50] = useState(false);
  const [disable51, setDisable51] = useState(false);

  const handleChange6_43_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no43_1', 0);
    setNasogastric(0);
    setDisable43(true);
    calculateSumValue6();
  };
  const handleChange6_43_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no43_1', 1);
    setNasogastric(2);
    setDisable43(false);
    calculateSumValue6();
  };

  const handleChange6_45_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no45_1', 0);
    setEkgRecord(0);
    setDisable45(true);
    calculateSumValue6();
  };

  const handleChange6_45_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no45_1', 1);
    setEkgRecord(2);
    setDisable45(false);
    calculateSumValue6();
  };

  const handleChange6_47_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no47_1', 0);
    setDressing(0);
    setDisable47(true);
    calculateSumValue6();
  };

  const handleChange6_47_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no47_1', 1);
    setDressing(1);
    setDisable47(false);
    calculateSumValue6();
  };

  const handleChange6_48_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no48_1', 0);
    setEmergency(0);
    setDisable48(true);
    calculateSumValue6();
  };

  const handleChange6_48_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no48_1', 1);
    setEmergency(2);
    setDisable48(false);
    calculateSumValue6();
  };

  const handleChange6_49_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no49_1', 0);
    setTestBodyOdor(0);
    setDisable49(true);
    calculateSumValue6();
  };

  const handleChange6_49_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no49_1', 1);
    setTestBodyOdor(1);
    setDisable49(false);
    calculateSumValue6();
  };

  const handleChange6_50_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no50_1', 0);
    setTubeNursing(0);
    setDisable50(true);
    calculateSumValue6();
  };

  const handleChange6_50_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no50_1', 1);
    setTubeNursing(1);
    setDisable50(false);
    calculateSumValue6();
  };

  const handleChange6_51_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no51_1', 0);
    setDrainageTube(0);
    setDisable51(true);
    calculateSumValue6();
  };

  const handleChange6_51_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no51_1', 1);
    setDrainageTube(1);
    setDisable51(false);
    calculateSumValue6();
  };

  useEffect(() => {
    calculateSumValue5();
    calculateSumValue6();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 정맥주입 및 약물요법" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '30px' }}>
          <TableBody>
            {영역5.map(
              (
                content: {
                  id: number;
                  ko: string;
                  info: string[];
                  desc: string[];
                },
                i
              ) => (
                <TableRow>
                  <StyledTableCellTwo
                    sx={{
                      padding: '16px',
                      width: '300px',
                      whiteSpace: 'pre-wrap',
                      verticalAlign: 'top',
                      borderBottom: 'none',
                    }}
                  >
                    {content.ko}
                  </StyledTableCellTwo>
                  <StyledTableCellWithoutLeftTwo sx={{ borderBottom: 'none' }}>
                    <RadioGroup
                      sx={{
                        paddingTop:
                          content.info.length === 1
                            ? '28px'
                            : content.info.length === 4
                            ? '99px'
                            : '55px',
                      }}
                      name={radioId5[content.id - 1]}
                      defaultValue={Number(getValues(radioId5[content.id - 1]))}
                    >
                      {content.desc.map((point, i) => {
                        if (point === '해당 없음 ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no34'}
                                  value={i}
                                  onChange={handleChange5_34_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 2점 : ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no34'}
                                  value={i}
                                  onChange={handleChange5_34_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음  ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no40'}
                                  value={i}
                                  onChange={handleChange5_40_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1개당 2점 : ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no40'}
                                  value={i}
                                  onChange={handleChange5_40_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음   ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no41'}
                                  value={i}
                                  onChange={handleChange5_41_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 2점 :  ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no41'}
                                  value={i}
                                  onChange={handleChange5_41_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        }
                        return (
                          <TableRow
                            sx={{
                              lineHeight: '43px',
                              textAlign: 'center',
                            }}
                          >
                            <Box>
                              <Radio
                                disabled={disabled}
                                name={radioId5[content.id - 1]}
                                value={i}
                                onChange={handleChange5}
                              />
                            </Box>
                          </TableRow>
                        );
                      })}
                    </RadioGroup>
                  </StyledTableCellWithoutLeftTwo>
                  <StyledTableCellWithoutLeftRightTwo
                    sx={{ borderBottom: 'none' }}
                  >
                    <Box>
                      {content.info.includes('') ? (
                        <TableRow
                          sx={{
                            height: '16px',
                          }}
                        >
                          <Box sx={{ minWidth: '500px' }}> </Box>
                        </TableRow>
                      ) : content.info.length > 1 ? (
                        content.info.map((item, i) => {
                          if (item.includes(''))
                            return (
                              <TableRow
                                sx={{
                                  lineHeight: '23px',
                                  height: '4px',
                                }}
                              >
                                <Box
                                  sx={{ minWidth: '65vw', marginLeft: '-28px' }}
                                >
                                  ・ {item}
                                </Box>
                              </TableRow>
                            );
                        })
                      ) : (
                        content.info.map((item, i) => {
                          return (
                            <TableRow
                              sx={{
                                height: '8.5px',
                              }}
                            >
                              <Box
                                sx={{ minWidth: '65vw', marginLeft: '-28px' }}
                              >
                                ・ {item}
                              </Box>
                            </TableRow>
                          );
                        })
                      )}
                      {content.desc.map((v, i) => {
                        if (v === '1회당 2점 : ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  disabled={disable34 ? true : disabled}
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no34_1', {
                                    onChange: e => {
                                      setValue('no34_1', e.target.value);
                                      setIvRoute(Number(e.target.value) * 2);
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1개당 2점 : ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable40 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no40_1', {
                                    onChange: e => {
                                      setValue('no40_1', e.target.value);
                                      setBlood(Number(e.target.value) * 2);
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 2점 :  ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable41 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no41_1', {
                                    onChange: e => {
                                      setValue('no41_1', e.target.value);
                                      setBloodUnit(Number(e.target.value) * 2);
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>{v}</Box>
                            </TableRow>
                          );
                      })}
                    </Box>
                  </StyledTableCellWithoutLeftRightTwo>
                </TableRow>
              )
            )}
          </TableBody>
        </TableContainer>

        <SectionTitle title="영역 : 치료 및 시술 (30분 이내)" />
        <TableContainer sx={{ marginTop: '40px', marginBottom: '-30px' }}>
          <TableBody>
            {영역6.map(
              (
                content: {
                  id: number;
                  ko: string;
                  info: string[];
                  desc: string[];
                },
                i
              ) => (
                <TableRow>
                  <StyledTableCellTwo
                    sx={{
                      padding: '16px',
                      width: '300px',
                      whiteSpace: 'pre-wrap',
                      verticalAlign: 'top',
                    }}
                  >
                    {content.ko}
                  </StyledTableCellTwo>
                  <StyledTableCellWithoutLeftTwo>
                    <RadioGroup
                      sx={{
                        paddingTop:
                          content.info.length === 1
                            ? '28px'
                            : content.info.length === 3
                            ? '78px'
                            : content.info.length === 4
                            ? '99px'
                            : '55px',
                      }}
                      name={radioId6[content.id - 1]}
                      defaultValue={Number(getValues(radioId6[content.id - 1]))}
                    >
                      {content.desc.map((point, i) => {
                        if (point === '해당 없음 ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no43'}
                                  value={i}
                                  onChange={handleChange6_43_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 2점 : ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no43'}
                                  value={i}
                                  onChange={handleChange6_43_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음  ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no45'}
                                  value={i}
                                  onChange={handleChange6_45_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 2점 :  ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no45'}
                                  value={i}
                                  onChange={handleChange6_45_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음   ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no47'}
                                  value={i}
                                  onChange={handleChange6_47_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 1점 :   ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no47'}
                                  value={i}
                                  onChange={handleChange6_47_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음    ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no48'}
                                  value={i}
                                  onChange={handleChange6_48_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 2점 :    ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no48'}
                                  value={i}
                                  onChange={handleChange6_48_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음     ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no49'}
                                  value={i}
                                  onChange={handleChange6_49_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 1점 :     ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no49'}
                                  value={i}
                                  onChange={handleChange6_49_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음      ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no50'}
                                  value={i}
                                  onChange={handleChange6_50_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 1점 :      ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no50'}
                                  value={i}
                                  onChange={handleChange6_50_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음       ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no51'}
                                  value={i}
                                  onChange={handleChange6_51_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 1점 :       ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={'no51'}
                                  value={i}
                                  onChange={handleChange6_51_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        }
                        return (
                          <TableRow
                            sx={{
                              lineHeight: '43px',
                              textAlign: 'center',
                            }}
                          >
                            <Box>
                              <Radio
                                disabled={disabled}
                                name={radioId6[content.id - 1]}
                                value={i}
                                onChange={handleChange6}
                              />
                            </Box>
                          </TableRow>
                        );
                      })}
                    </RadioGroup>
                  </StyledTableCellWithoutLeftTwo>
                  <StyledTableCellWithoutLeftRightTwo>
                    <Box>
                      {content.info.includes('') ? (
                        <TableRow
                          sx={{
                            height: '16px',
                          }}
                        >
                          <Box sx={{ minWidth: '500px' }}> </Box>
                        </TableRow>
                      ) : content.info.length > 1 ? (
                        content.info.map((item, i) => {
                          if (item.includes('경우 2회로')) {
                            return (
                              <TableRow
                                sx={{
                                  lineHeight: '23px',
                                  height: '4px',
                                }}
                              >
                                <Box
                                  sx={{ minWidth: '65vw', marginLeft: '-12px' }}
                                >
                                  {item}
                                </Box>
                              </TableRow>
                            );
                          }
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '23px',
                                height: '4px',
                              }}
                            >
                              <Box
                                sx={{ minWidth: '65vw', marginLeft: '-28px' }}
                              >
                                ・ {item}
                              </Box>
                            </TableRow>
                          );
                        })
                      ) : (
                        content.info.map((item, i) => {
                          return (
                            <TableRow
                              sx={{
                                height: '8.5px',
                              }}
                            >
                              <Box
                                sx={{ minWidth: '65vw', marginLeft: '-28px' }}
                              >
                                ・ {item}
                              </Box>
                            </TableRow>
                          );
                        })
                      )}
                      {content.desc.map((v, i) => {
                        if (v === '1회당 2점 : ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  disabled={disable43 ? true : disabled}
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no43_1', {
                                    onChange: e => {
                                      setValue('no43_1', e.target.value);
                                      setNasogastric(
                                        Number(e.target.value) * 2
                                      );
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 2점 :  ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable45 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no45_1', {
                                    onChange: e => {
                                      setValue('no45_1', e.target.value);
                                      setEkgRecord(Number(e.target.value) * 2);
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 1점 :   ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable47 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no47_1', {
                                    onChange: e => {
                                      setValue('no47_1', e.target.value);
                                      setDressing(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 2점 :    ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable48 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no48_1', {
                                    onChange: e => {
                                      setValue('no48_1', e.target.value);
                                      setEmergency(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 1점 :     ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable49 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no49_1', {
                                    onChange: e => {
                                      setValue('no49_1', e.target.value);
                                      setTestBodyOdor(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 1점 :      ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable50 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no50_1', {
                                    onChange: e => {
                                      setValue('no50_1', e.target.value);
                                      setTubeNursing(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 1점 :       ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable51 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no51_1', {
                                    onChange: e => {
                                      setValue('no51_1', e.target.value);
                                      setDrainageTube(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        }
                        return (
                          <TableRow
                            sx={{
                              lineHeight: '42px',
                            }}
                          >
                            <Box sx={{ minWidth: '500px' }}>{v}</Box>
                          </TableRow>
                        );
                      })}
                    </Box>
                  </StyledTableCellWithoutLeftRightTwo>
                </TableRow>
              )
            )}
          </TableBody>
        </TableContainer>
      </Box>
    </>
  );
};

export default KPCSICUContents3;
