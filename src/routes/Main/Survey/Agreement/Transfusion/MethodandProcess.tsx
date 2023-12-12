import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from './SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '종교적인 이유 등으로 수혈을 거부하는 분은 혈액량을 보충하기 위한 수액치료 등을 시도할 수 있으나 수혈에 비해 효과가 매우 제한적이며 사망의 위험 또한 높습니다. ',
];

const MethodandProcess = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="4. 수혈이외의 치료대안" />
      <Box sx={{ width: '98%', margin: '48px auto 24px auto' }}>
        {contents.map((v, i) => (
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '24px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {v}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default MethodandProcess;
