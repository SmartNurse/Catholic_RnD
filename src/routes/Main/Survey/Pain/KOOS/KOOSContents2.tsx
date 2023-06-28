import { Fragment } from 'react';
import {
  Box,
  Grid,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Table,
  TableHead,
} from '@mui/material';
import MuiRadioGroup from './components/MuiRadioGroup';

import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const KOOSContents2 = (props: Props) => {
  const { disabled, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="통증 (Pain)" />
      <Grid item xs={12} sx={{ marginTop: '-10px' }}>
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
                  얼마나 자주 무릎 통증을 느끼십니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN"
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
                    lineHeight: '37px',
                  }}
                  display="block"
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace={'pre-line'}
                >
                  최근 일주일 동안 다음 활동시 느끼는 무릎 통증은 어느
                  정도였습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}></TableCell>
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
                  무릎을 비틀거나 회전시킬 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN.TOW"
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
                  무릎을 최대한 펼 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN.TOW"
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
                  무릎을 최대한 굽힐 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN.TOW"
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
                  평지를 걸을 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN.TOW"
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
                  계단을 올라가거나 내려갈 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN.TOW"
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
                  밤에 잠자리에 누워있는 동안
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN.TOW"
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
                  앉거나 누웠을 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN.TOW"
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
                  똑바로 섰을 때
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.PAIN.TOW"
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

export default KOOSContents2;
