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

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

import { Ti18nId } from 'hooks/useI18n';
import { IMentalNursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const RecordInfo = (props: Props) => {
  const { disabled, register } = props;

  const infos = [
    { title: '의료기관 명칭', value: 'name' },
    { title: '진료기간', value: 'address' },
    { title: '발급사유', value: 'relation' },
    { title: '발급범위', value: 'number' },
  ];

  return (
    <Fragment>
      <SectionTitle title="열람 및 사본 발급 범위" />
      <RowContainer xs={11.5} sx={{ margin: '20px 0px 30px 0px' }}>
        {infos.map(({ title, value }) => {
          if (title === '진료기간') {
            return (
              <RowContent title={title} titleRatio={1.5} childrenRatio={10.5}>
                <div style={{ display: 'flex' }}>
                  <Form.MuiTextField
                    type="date"
                    required={false}
                    disabled={disabled}
                    {...register('falling_type.date')}
                    sx={{ width: '514px', marginRight: '105px' }}
                  />
                  ~
                  <Form.MuiTextField
                    type="date"
                    required={false}
                    disabled={disabled}
                    {...register('falling_type.date')}
                    sx={{ width: '514px', marginLeft: '101px' }}
                  />
                </div>
              </RowContent>
            );
          } else if (title === '발급범위') {
            return (
              <RowContent title={title} titleRatio={1.5} childrenRatio={12}>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register(`${value}`)}
                  minRows={3}
                  multiline
                  placeholder="발급범위 예시)  진료기록부 사본, 처방전 사본, 수술기록 사본, 검사내용 및 검사 소견기록의 사본, 방사선 사진(영상물 포함), 간호기록부 사본, 조산기록부 사본, 진단서 사본, 사망진단서 또는 시체검안서 사본 등"
                />
              </RowContent>
            );
          } else {
            return (
              <RowContent title={title} titleRatio={1.5} childrenRatio={10.5}>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register(`${value}`)}
                />
              </RowContent>
            );
          }
        })}
      </RowContainer>
      <Typography
        sx={{
          width: '90%',
          marginLeft: '30px',
          padding: '30px 0px 30px 0px',
        }}
      >
        본인(또는 법정대리인)은 위에 적은 신청인은 「의료법」 제 21조 제3항 및
        같은 법 시행규칙 제13조의3에 따라 본인의 진료기록 등을 열람하거나 사본을
        발급받는 것에 대하여 동의합니다.
      </Typography>
    </Fragment>
  );
};

export default RecordInfo;
