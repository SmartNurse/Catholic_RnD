import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '상부위장관 내시경검사는 비교적 안전한 검사이지만 내시경검사를 시행하는 동안 투약하는 약물의 과민반응 또는 기저 질환의 약화로 심근경색, 호흡장애, 뇌졸증, 쇼크 등이 발생할 수 있으며, 내시경 기계와 조직\n     검사로 인한 천공, 출혈, 복통, 감염 등의 합병증이 발생 할 수 있습니다. 천공이 발생한 경우 내시경을 이용한 봉합술, 금식 및 항생제 치료 또는 수술을 시행합니다. 출혈의 경우는 대부분 내시경으로 지혈술이 가능\n    하지만 여러가지 노력에도 불구하고 내시경 시야가 확보되지 않는 과도한 출혈은 혈관색전술이나 수술을 요하는 경우가 있습니다. ',
  '검사 중에는 이러한 합병증 발생을 지속적으로 감시하며, 신속한 대처를 위해 여러장비가 비치되어 있습니다. 만일 긴급한 사태가 발생하는 경우 본원의 의료진은 그 해결에 최선을 다하겠지만 합병증 발생시 그 정\n    도에 따라 상급병원으로 전원할 수 있으며 응급 수술이 시행될 수 있고 치료에 반응하지 않는 경우 드물지만 사망에 이를 수 있습니다. ',
  '검사 전 위장운동억제제를 투여하는 경우 녹내장 환자는 일시적으로 시야가 흐려지거나 복시가 나타날 수 있고, 전립선비대증 환자를 일시적으로 소변이 안나올 수도 있습니다.',
  '흔들리는 치아가 있는 경우 검사 도중 치아가 부러지거나 빠져서 기도에 들어가면 응급상황이 발생할 수 있습니다.',
];

const Complications = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="발생 가능한 합병증 및 대처법" />
      <Box sx={{ width: '98%', margin: '48px auto 24px auto' }}>
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

export default Complications;
