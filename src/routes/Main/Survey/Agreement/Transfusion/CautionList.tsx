import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from './SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '환자에게 다음의 수혈제제를 정맥주사를 통해 투여합니다.',
  'A. 적혈구제제 : 혈액량보충, 빈혈교정, 산소운반능력 향상',
  'B. 혈소판제제 : 혈소판 감소 혹은 기능이상에 의한 출혈증상의 치료 및 예방',
  'C. 일상제제 : 혈액응고인자보충 또는 이상기능을 교정',
  'D. 기타',
];

const CautionList = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="2. 수혈의 종류와 방법" />
      <Box sx={{ width: '98%', margin: '48px auto 24px auto' }}>
        {contents.map((v, i) => (
          <Typography
            sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '24px' }}
          >
            {v}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default CautionList;
