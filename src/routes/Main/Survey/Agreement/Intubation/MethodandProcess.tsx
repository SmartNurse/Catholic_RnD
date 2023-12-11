import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from './SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = ['귀하의 경우 현재 다음과 같은 특이 사항이 있습니다.'];

const MethodandProcess = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="4. 특이사항" />
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
        <Form.MuiTextField
          placeholder="직접 입력"
          multiline
          minRows={3}
          disabled={disabled}
        />
        <Typography
          sx={{ margin: '30px 0 20px 0', fontSize: '12px', fontWeight: 500 }}
        >
          본인은 기관내 삽관술의 필요성, 시술 방법과 시술에 따른 후유증 및
          합병증에 대하여 충분히 이해하였으므로 본 시술을 받을 것을 신청합니다.
          <br />
          아울러 시술에 따른 모든 지시사항을 충실히 이행하며 주치의 및
          시술의사의 지시와 판단에 전적으로 협조할 것을 서약합니다.
        </Typography>
      </Box>
    </>
  );
};

export default MethodandProcess;
