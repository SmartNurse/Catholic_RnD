import { Fragment } from 'react';
import {
  Grid,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Table,
} from '@mui/material';
import MuiRadioGroup from './components/MuiRadioGroup';

import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const KOOSContents3 = (props: Props) => {
  const { disabled, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="일상 생활 기능 (Function, Daily living)" />
      <Grid item xs={12} sx={{ marginTop: '-10px' }}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: '500',
            width: '100%',
            paddingTop: '10px',
            paddingLeft: '10px',
            borderBottom: 'solid 0.6px lightGray',
            height: '70px',
          }}
          whiteSpace={'nowrap'}
        >
          다음은 당신의 신체적 기능과 연관된 질문입니다. 이 질문으로 당신의 일상
          생활에서 거동과 자기 자신의 보살핌 정도를 알 수 있습니다.
          <br />각 질문에 대해 가장 최근 일주일 동안 다음의 활동에서 당신이
          무릎으로 인해 겪었던 어려움의 정도를 표기해 주십시오.
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
                  계단 내려가기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  계단 올라가기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  앉은 자리에서 일어나기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  서 있기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  바닥을 향해 무릎을 굽히거나 물건을 줍기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  평지 걷기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  승용차를 타거나 내리기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  쇼핑하기 / 시장보기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  양말이나 스타킹을 신기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  잠자리에서 일어나기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  양말이나 스타킹 벗기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  잠자리에 누워있기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  목욕탕 욕조에 들어가거나 나올 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  앉기
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  화장실 변기에 앉거나 일어날 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  힘든 가사일 (무거운 물건 옮기기, 마루 닦기 등)
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
                  가벼운 가사 일 (요리, 먼지 닦이 등)
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.DAILYFUNCTION"
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
    </Fragment>
  );
};

export default KOOSContents3;
