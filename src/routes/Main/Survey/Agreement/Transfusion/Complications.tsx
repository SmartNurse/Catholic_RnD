import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from './SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  'A. 미리 안정성을 확인한 혈액을 수혈하게 되지만 매우 드물게 발열, 오한, 오심, 구토, 알레르기, 흉통 등이 발생할 수 있습니다.',
  'B. 그 외에 드문 부작용',
  ' 1) 적혈구의 비정상적인 파괴 등이 나타날 수 있습니다.',
  ' 2) 빠른 시간에 많은 양을 수혈 받은 경우 호흡곤란 등이 발생할 수 있습니다.',
  ' 3) 면역반응에 의한 급성 폐손상이 발생할 수 있으며 특히 가임기 여성에서 이 부작용이 발생한 경우 임신 시 태아에 영향을 미칠 수 있습니다.',
  ' 4) 간염, 후천성면역결핍증 등 수혈전파성 감염 및 기타 병원체로 인한 감염을 완전히 배제할 수 없습니다. ',
];

const Complications = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="3. 수혈과 관련하여 발생할 수 있는 문제" />
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

export default Complications;
