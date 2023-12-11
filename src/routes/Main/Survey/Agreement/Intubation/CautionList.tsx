import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from './SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '필요에 따라서 진정제나 근육이완제를 주사한 후, 환자를 침대에 반듯이 눕힌 상태에서 후두경을 입 속으로 집어넣어 성대를 통하여 플라스틱 관을 환자의 기관내로 삽입하게 됩니다.',
];

const CautionList = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="2. 시술방법" />
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
