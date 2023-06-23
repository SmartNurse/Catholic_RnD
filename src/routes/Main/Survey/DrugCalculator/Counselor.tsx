import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import {
  Checkbox,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

import { Ti18nId } from 'hooks/useI18n';
import { IMentalNursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../components/SectionTitle';

import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  // onRequired: (id: Ti18nId) => void;
  // onSuccess: (message: string) => void;
}

const Counselor = (props: Props) => {
  const { disabled, register } = props;

  const infos = [
    '1mg = 1cc ',
    '1kg = 1000g',
    '1g = 1000mg',
    '1mg = 1000mcg',
    '1mcg = 1000ng',
  ];

  const infoss = [
    '30cc/hr = 10gtt = 6초에 한 방울',
    '45cc/hr = 15gtt = 4초에 한 방울',
    '60cc/hr = 20gtt = 3초에 한 방울',
    '90cc/hr = 30gtt = 2초에 한 방울',
    '180cc/hr = 60gtt = 1초에 한 방울',
  ];

  return (
    <Fragment>
      <SectionTitle title="참고용 단위" />
      <RowContainer xs={12} sx={{ marginTop: '20px' }}>
        <RowContainer xs={6} sx={{ marginLeft: '-150px' }}>
          {infos.map((v, i) => (
            <RowContent title="">
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '38px',
                  whiteSpace: 'pre',
                }}
              >
                ・ {v}
              </Typography>
            </RowContent>
          ))}
        </RowContainer>
        <RowContainer xs={6} sx={{ marginLeft: '80px' }}>
          {infoss.map((v, i) => (
            <RowContent title="">
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '38px',
                  whiteSpace: 'pre',
                }}
              >
                ・ {v}
              </Typography>
            </RowContent>
          ))}
        </RowContainer>
      </RowContainer>
    </Fragment>
  );
};

export default Counselor;
