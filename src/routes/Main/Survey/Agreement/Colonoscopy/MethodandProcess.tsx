import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '대장내시경 검사는 비교적 안전한 검사지만 내시경 검사를 시행하는 동안 투약하는 약물의 과민반응 또는 기저 질환의 약화로 심근경색, 호흡장애, 뇌졸증, 쇼크 등이 발생할 수 있으며, 내시경 기계와 조직 검사로 \n    인한 천공, 출혈, 복통, 감염 등의 합병증이 발생할 수 있습니다. 이러한 합병증은 용종절제술을 시행하는 경우 다소 증가할 수 있습니다. 진단내시경 도중 천공은 0.02~0.8%, 용종절제술을 포함한 치료내시경에서\n    는 0.13~3.0%에서 발생할 수 있습니다. 천공이 발생한 경우 내시경을 이용한 봉합술, 금식 및 항생제 치료 또는 수술을 시행합니다. 출혈의 경우는 대부분 내시경으로 지혈이 가능하지만 여러가지 노력에도 불구하\n    고 내시경 시야가 확보되지 않는 과도한 출혈은 혈관색전술이나 수술이 필요할 수도 있습니다.  ',
  '검사 중에는 이러한 합병증 발생을 지속적으로 감시하며, 신속한 대처를 위해 여러 장비가 비치되어 있습니다. 만일 긴급한 사태가 발생하는 경우 본원의 의료진은 그 해결에 최선을 다하겠지만 합병증 발생 시 그 \n    정도에 따라 상급병원으로 전원할 수 있으며 응급수술이 시행될 수도 있고 치료에 반응하지 않는 경우 드물지만 사망에 이를 수 있습니다.',
  '조직 검사나 용종절제술을 시행한 경우 추가비용이 발생하며, 식은땀, 어지러움, 심한 통증, 붉은 혈변 등이 지속되면 병원으로 연락 주시기 바랍니다.',
];

const MethodandProcess = (props: Props) => {
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

export default MethodandProcess;
