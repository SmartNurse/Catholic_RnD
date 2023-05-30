import { Grid, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const checks = [
  {
    label: '연명의료의 시행방법 및 연명의료중단 결정에 대한 사항',
    key: 'fall_education.checked1',
  },
  {
    label: '호스피스의 선택 및 이용에 관한 사항',
    key: 'fall_education.checked2',
  },
  {
    label: '사전연명의료의향서의 효력 및 효력 상실에 관한 사항',
    key: 'fall_education.checked3',
  },
  {
    label: '사전연명의료의향서의 작성, 등록, 보관 및 통보에 관한 사항',
    key: 'fall_education.checked4',
  },
  {
    label: '사전연명의료의향서의 변경, 철회 및 그에 따른 조치에 관한 사항',
    key: 'fall_education.checked5',
  },
  {
    label: '등록기관의 폐업, 휴업 및 지정 취소에 따른 기록의 이관에 관한 사항 ',
    key: 'fall_education.checked6',
  },
];

const EducationList = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="사전연명의료의향서 등록기관의 설명사항" />
      <Box sx={{ width: '98%', margin: '48px auto 24px 33px' }}>
        <Grid container xs={12}>
          {checks.map((v, i) => (
            <Grid item xs={12}>
              <Form.MuiCheckbox
                label={v.label}
                disabled={disabled}
                defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                onChange={(_, checked) => {
                  setValue(v.key, checked);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default EducationList;
