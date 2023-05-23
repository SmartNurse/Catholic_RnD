import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '사전연명의료의향서란   「호스피스·완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한 법률」 제 12조에 따라 19세 이상인 사람이 자신의 연명의료중단등결정 및 호스피스에 관한 문서로 작성한 것을 말하\n    며, 호스피스전문기관에서 호스피스를 이용하려는 경우에는 같은 법 제28조에 따라 신청해야 합니다.',
  '사전연명의료의향서를 작성하고자 하는 사람은 보건복지부장관이 지정한 사전연명의료의향서 등록기관을 통하여 직접 작성해야합니다. ',
  '사전연명의료의향서를 작성한 사람은 언제든지 그 의사를 변경하거나 철회할 수 있으며, 이 경우 등록기관의 장은 지체없이 사전연명의료의향서를 변경하거나 등록을 말소해야 합니다. ',
  '사전연명의료의향서는 ①본인이 직접 작성하지 않은 경우, ② 본인의 자발적 의사에 따라 작성되지 않은 경우, ③사전연명의료의향서 등록기관으로부터  「호스피스·완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한 법률」\n    제12조제2항에 따른 설명이 제공되지 않거나 작성자의 확인을 받지 않는 경우, ④사전연명의료의향서 작성·등록 후에 연명의료계획서가 다시 작성된 경우에는 효력을 잃습니다. ',
  '사전연명의료의향서에 기록된 연명의료중단 등 결정에 대한 작성자의 의사는 향후 작성자를 진료하게 될 담당의사와 해당 분야의 전문의 1명이 모두 작성자를 임종과정에 있는 환자라고 판단한 경우에만 이행할 수 있습니다. ',
];

const CautionList = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="유의사항" />
      <Box sx={{ width: '98%', margin: '48px auto 50px auto' }}>
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
