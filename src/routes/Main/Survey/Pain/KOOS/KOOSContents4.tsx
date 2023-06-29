import { Fragment } from 'react';
import {
  Grid,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Table,
  Box,
} from '@mui/material';
import MuiRadioGroup from './components/MuiRadioGroup';

import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const KOOSContents4 = (props: Props) => {
  const { disabled, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="운동 및 놀이 활동 기능 (Function, Sports and Recreational Activities)" />
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: '500',
            width: '100%',
            paddingLeft: '10px',
            borderBottom: 'solid 0.6px lightGray',
            height: '35px',
          }}
          whiteSpace={'nowrap'}
        >
          다음 질문들은 심한 활동을 요하는 신체적 능력과 관계된 것들입니다. 각
          질문에 대해 지난 일주일 동안 다음의 활동 시에 무릎으로 인한 어려움의
          정도를 표기해 주십시오.
        </Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                  }}
                  maxHeight={20}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  쪼그려 앉을 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SPORTS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: '400',
                  }}
                  maxHeight={50}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  달릴 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SPORTS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
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
                  뜀뛰기 할 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SPORTS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
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
                  다친(아픈) 무릎으로 회전하거나 비틀 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SPORTS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
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
                  무릎을 꿇을 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SPORTS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
      <SectionTitle title="삶의 질 (Quality of Life)" />
      <Grid item xs={12} sx={{ marginTop: '-10px' }}>
        <Table size="small">
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
                  무릎에 대한 문제점을 얼마나 자주 느끼십니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.LIFEQUALITY"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
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
                  무릎에 해가 되는 활동을 피하기 위해 당신의 생활 습관을
                  개선했습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.LIFEQUALITY.TWO"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
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
                  무릎에 대한 자신감이 없어서 얼마나 어려움을 겪었습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.LIFEQUALITY.THREE"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
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
                  전반적으로, 무릎으로 인해 얼마나 많은 어려움이 있었습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.LIFEQUALITY.THREE"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues(
                    'default_info.hospitalization_path.value'
                  )}
                  onChange={v =>
                    setValue('default_info.hospitalization_path.value', v)
                  }
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      <Grid item xs={12} sx={{ marginRight: '10px' }}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Typography
            sx={{
              fontSize: '13px',
            }}
          >
            서승석, 정경칠, 김영복.(2006).슬관절 손상에 대한 국문 Knee Injury
            and Osteoarthritis Outcome Score [KOOS]의 적용을 통한 타당성,
            <br />
            신뢰성 및 반응성 평가.대한정형외과학회지,41(3),441-453.
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default KOOSContents4;
