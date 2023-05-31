import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '이 유전자검사의 결과는 10년간 보존되며, 법 제52조제2항에 따라 본인이나 법정대리인이 요청하는 경우 열람할 수 있습니다.',
  '검사 후 남은 검사대상물을 인체유래물연구 또는 허가받은 인체유래물은행에 기증하는 것에 동의하는 경우에는 연구의 목적, 개인정보의 제공에 관한 사항 등 제공에 관한 구체적인 설명을 충분히 듣고, \n    별지 제34호의 인체유래물연구 동의서 또는 별지 제41호의 인체유래물등의 기증동의서를 추가로 작성하여야합니다. ',
];

const CautionList = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="유의사항" />
      <Box sx={{ width: '98%', margin: '48px auto 50px 33px' }}>
        {contents.map((v, i) => (
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '38px',
              whiteSpace: 'pre',
            }}
          >
            {i + 1}. {v}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default CautionList;
