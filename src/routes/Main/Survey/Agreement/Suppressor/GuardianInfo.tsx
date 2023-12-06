import Form from 'components/Form';

import { Fragment } from 'react';
import { Typography } from '@mui/material';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

import { Ti18nId } from 'hooks/useI18n';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const GuardianInfo = (props: Props) => {
  const { disabled, register } = props;

  const infos = [
    { title: '가. 신체 억제대 사용이유', value: 'no2_1' },
    {
      title: '나. 신체 억제대를 대신하여 실시한 방법 및 그 효과 ',
      value: 'no2_2',
    },
    {
      title: '다. 신체 억제대 사용부위, 억제대 종류(유형) 및 사용방법 ',
      value: 'no2_3',
    },
    {
      title: '라. 신체 억제대 사용시 발생할 수 있는 부작용 및 대처방법',
      value: 'no2_4',
    },
    { title: '마. 기타사항', value: 'no2_5' },
  ];

  const labels = [
    { title: '', variable: '' },
    { title: '의사 성명', variable: 'no2_dr_name' },
    { title: '의사 서명', variable: 'no2_dr_sign' },
  ];

  return (
    <Fragment>
      <SectionTitle title="2. 설명 및 기재사항 (가~라 항목은 반드시 포함)" />
      <RowContainer xs={11.5} sx={{ margin: '20px 0px 30px 0px' }}>
        {infos.map(({ title, value }) => (
          <>
            <Typography
              sx={{
                lineHeight: '20px',
                margin: '20px 0 0 15px',
                fontSize: '14px',
              }}
            >
              {title}
            </Typography>
            <Form.MuiTextField
              sx={{
                margin: '0px 0 0 15px',
              }}
              multiline
              minRows={3}
              required={false}
              disabled={disabled}
              {...register(`${value}`)}
            />
          </>
        ))}

        {labels.map(({ title, variable }, _) => (
          <>
            {Array(2)
              .fill(0)
              .map(() => (
                <RowContent titleRatio={1.5} childrenRatio={2.5} />
              ))}
            {variable === '' ? (
              <RowContent
                key={variable}
                title={title}
                titleRatio={1.5}
                childrenRatio={2.5}
              ></RowContent>
            ) : (
              <RowContent
                key={variable}
                title={title}
                titleRatio={1.5}
                childrenRatio={2.5}
              >
                <Form.MuiTextField
                  disabled={disabled}
                  {...register(`${variable}`)}
                />
              </RowContent>
            )}
          </>
        ))}
      </RowContainer>
    </Fragment>
  );
};

export default GuardianInfo;
