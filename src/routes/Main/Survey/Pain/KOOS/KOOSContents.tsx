import { Fragment } from 'react';
import {
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

const KOOSContents = (props: Props) => {
  const { disabled, getValues, setValue } = props;

  return (
    <Fragment>
      <Typography sx={{ fontSize: '14px', margin: '40px 0 -10px 25px' }}>
        이 설문지는 환자의 입장에서 느끼는 무릎 관절의 상태에 대한 질문입니다.이
        정보는 당신이 느끼고 있는 무릎 관절의 증상에 대해 알 수 있도록 도와주며
        당신의 일상 생활을 영위할 수 있게 하는 정보를 줍니다.
        <br />
        각각의 질문에 대해 가장 적당한 하나의 항목에 대해서만 표기해 주십시오.
      </Typography>
      <SectionTitle title="증상 (Symptoms)" />
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                key={'title'}
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                지난 일주일 동안 당신의 무릎 관절의 증상에 대해 답해주시기
                바랍니다.
              </TableCell>
              <TableCell
                key={'점수'}
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: 'right',
                  whiteSpace: 'pre',
                  wordSpacing: '30px',
                  width: '500px',
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
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
                  무릎에 부종(붓기)가 있었습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SYMPTOMS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues('spt01')}
                  onChange={v => setValue('spt01', v)}
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
                  무릎을 움직일 때 무릎에서 갈리는 느낌이나 삐걱거리는 소리,
                  또는 다른
                  <br />
                  어떤 소리가 들리는 증상이 있었습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SYMPTOMS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues('spt02')}
                  onChange={v => setValue('spt02', v)}
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
                  무릎을 움직일 때 걸리는 느낌 또는 마치는 느낌이 있었습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SYMPTOMS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues('spt03')}
                  onChange={v => setValue('spt03', v)}
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
                  무릎을 최대한 쭉 펼 수 있었습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SYMPTOMS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues('spt04')}
                  onChange={v => setValue('spt04', v)}
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
                  무릎을 최대한 굽힐 수 있었습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.SYMPTOMS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues('spt05')}
                  onChange={v => setValue('spt05', v)}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      <SectionTitle title="경직성 (Stiffness)" />
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: '500',
            width: '500px',
            marginLeft: '15px',
          }}
          maxHeight={20}
          whiteSpace={'nowrap'}
        >
          다음은 지난 일주일간 무릎의 경직성에 대한 질문입니다. 경직성이란
          무릎을 움직일 때 무릎이 뻑뻑한 느낌이 들거나 수월하게 움직일 수 없는
          느낌을 말합니다.
        </Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
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
                  아침에 일어나서 처음 느끼는 무릎의 경직성은 어느 정도 입니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.STIFFNESS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues('stf01')}
                  onChange={v => setValue('stf01', v)}
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
                  늦은 오후 시간에 앉거나 눕거나 휴식할 때 느끼는 무릎의
                  경직성은 어느 정도였습니까?
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <MuiRadioGroup
                  disabled={disabled}
                  i18nNullKey="ETC"
                  i18nKey="KOOS.STIFFNESS"
                  values={[1, 2, 3, 4, 5]}
                  defaultValue={getValues('stf02')}
                  onChange={v => setValue('stf02', v)}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Fragment>
  );
};

export default KOOSContents;
