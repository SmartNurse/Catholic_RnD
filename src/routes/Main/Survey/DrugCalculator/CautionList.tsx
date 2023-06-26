import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../Survey/components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  'mcg/kg/min , mg/kg/min = 처방속도 X 몸무게 X 60 X 혼합액 총량(cc) / 약품용량(mcg or mg)',
  'mcg/kg/hr , mg/kg/hr = 처방속도 X 몸무게 X 혼합액 총량(cc) / 약품용량(mcg or mg)',
  'mg/hr = 처방속도 X 혼합액 총량(cc) / 약품용량(mg)',
  'mg/min, u/min = 처방속도 X 60 X 혼합액 총량(cc) / 약품용량(mg or u)',
  '1분당 방울 수(gtt) = 시간당 주입량(ml/hr) / 3 ',
  '시간당 주입량(ml/hr) = 1분당 방울 수(gtt) X 3',
];

const CautionList = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="유의사항" />
      <Box sx={{ width: '98%', margin: '48px auto 50px 25px' }}>
        {contents.map((v, i) => (
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
        ))}
      </Box>
    </>
  );
};

export default CautionList;
