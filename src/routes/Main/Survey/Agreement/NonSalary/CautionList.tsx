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

import { Ti18nId } from 'hooks/useI18n';
import { IMentalNursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const CautionList = (props: Props) => {
  const {
    disabled,
    watch,
    setValue,
    onRequired,
    onSuccess,
    register,
    getValues,
  } = props;
  const mentalNursingRecordList: IMentalNursingRecord[] =
    watch('mental_survey');

  const inputRows = [
    {
      label: 'No.',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <div style={{ width: '35%' }}>항목</div>
              <div style={{ width: '35%' }}>비용</div>
              <div
                style={{
                  marginLeft: '8vw',
                }}
              >
                확인함
              </div>
            </div>
          ),
        },
      ],
    },
    {
      label: '1',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <MuiTextField
                sx={{ width: '35%', paddingRight: '30px', height: 'auto' }}
                {...register('item_01')}
                required={false}
                multiline
                minRows={1}
              />
              <MuiTextField
                sx={{ width: '35%', paddingRight: '30px', height: 'auto' }}
                {...register('fee_01')}
                required={false}
                multiline
                minRows={1}
              />
              <Checkbox
                size="small"
                disabled={disabled}
                defaultChecked={getValues('no_01')}
                {...register('no_01')}
                sx={{
                  marginLeft: '8vw',
                }}
              />
            </div>
          ),
        },
      ],
    },
    {
      label: '2',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <MuiTextField
                sx={{ width: '35%', paddingRight: '30px', height: 'auto' }}
                required={false}
                multiline
                minRows={1}
                {...register('item_02')}
              />
              <MuiTextField
                sx={{ width: '35%', paddingRight: '30px', height: 'auto' }}
                required={false}
                multiline
                minRows={1}
                {...register('item_02')}
              />
              <Checkbox
                size="small"
                disabled={disabled}
                defaultChecked={getValues('no_02')}
                {...register('no_02')}
                sx={{
                  marginLeft: '8vw',
                }}
              />
            </div>
          ),
        },
      ],
    },
    {
      label: '3',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <MuiTextField
                sx={{ width: '35%', paddingRight: '30px', height: 'auto' }}
                required={false}
                multiline
                minRows={1}
                {...register('item_03')}
              />
              <MuiTextField
                sx={{ width: '35%', paddingRight: '30px', height: 'auto' }}
                required={false}
                multiline
                minRows={1}
                {...register('item_03')}
              />
              <Checkbox
                size="small"
                disabled={disabled}
                defaultChecked={getValues('no_03')}
                {...register('no_03')}
                sx={{
                  marginLeft: '8vw',
                }}
              />
            </div>
          ),
        },
      ],
    },
    {
      label: '4',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <MuiTextField
                sx={{ width: '35%', paddingRight: '30px', height: 'auto' }}
                required={false}
                multiline
                minRows={1}
                {...register('item_04')}
              />
              <MuiTextField
                sx={{ width: '35%', paddingRight: '30px', height: 'auto' }}
                required={false}
                multiline
                minRows={1}
                {...register('item_04')}
              />
              <Checkbox
                size="small"
                disabled={disabled}
                defaultChecked={getValues('no_04')}
                {...register('no_04')}
                sx={{
                  marginLeft: '8vw',
                }}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <Fragment>
      <SectionTitle title="비급여 진료 내용 및 비용" />
      <Grid item xs={12}>
        <Table
          sx={{ minWidth: 650, marginTop: '30px' }}
          aria-label="simple table"
        >
          <TableBody>
            {!disabled &&
              inputRows.map(row => (
                <TableRow
                  key={row.label}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    style={{
                      width: '20%',
                      verticalAlign: 'top',
                    }}
                  >
                    {row.label}
                  </TableCell>
                  {row.elements.map(element =>
                    element.type === 'date' || element.type === 'time' ? (
                      <TableCell>{element.element}</TableCell>
                    ) : element.type === 'button' ? (
                      <TableCell align="right">{element.element}</TableCell>
                    ) : (
                      <TableCell colSpan={3}>{element.element}</TableCell>
                    )
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Typography
          sx={{
            width: '98%',
            textAlign: 'center',
            fontSize: '21px',
            margin: '30px 0px 30px 0px',
          }}
        >
          본인은 상기 비급여 진료대상과 항목, 비용에 대하여
          <br />
          충분한 설명을 들었으며 이에 동의합니다.
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default CautionList;
