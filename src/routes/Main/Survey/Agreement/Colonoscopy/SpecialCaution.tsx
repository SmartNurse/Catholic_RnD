import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';
import RowContent from './RowContent';
import RowContainer from '../../components/RowContainer';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const SpecialCaution = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="특별한 주의를 요하는 환자" />
      <Box sx={{ width: '98%', margin: '30px auto 24px auto' }}>
        <RowContainer ratio={12} sx={{ mb: 'auto' }}>
          <Typography sx={{ fontSize: '14px', margin: '20px 0 0 30px' }}>
            녹내장, 전립선 비대증, 고혈압 및 심장질환, 출혈성 질환 및 기타
            혈액질환, 만성간질환 / 신질환, 폐질환 및 기관지 천식, 알레르기질환,
            약물에 대한 과민반응, 아스피린 또는 혈전 용해제 등 약물복용 당뇨병,
            임신
          </Typography>
          <RowContent
            title="※ 검사 도중 이상 소견이 발견되는 경우 진단 및 치료 목적으로 조직검사를 추가할 수 있고 추가비용이 발생할 수 있습니다. 내시경검사 중 조직검사 시행에 동의하십니까? "
            titleRatio={10}
            childrenRatio={2}
          >
            <Form.MuiRadioGroup
              i18nKey="YESORNO"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('economy_history.counseling')}
              onChange={v => setValue('economy_history.counseling', v)}
            />
          </RowContent>

          <RowContent
            title="※ 검사 도중 용종이 발견되는 경우 진단 및 치료 목적으로 용종절제술을 시행할 수 있고 추가비용이 발생할 수 있습니다. 용종절제술 시행에 동의하십니까?"
            titleRatio={10}
            childrenRatio={2}
          >
            <Form.MuiRadioGroup
              i18nKey="YESORNO"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('economy_history.counseling')}
              onChange={v => setValue('economy_history.counseling', v)}
            />
          </RowContent>
          <Typography sx={{ fontSize: '14px', margin: '20px 0 0 30px' }}>
            본인(또는 대리인)은 대장내시경검사에 대하여 시술의 필요성, 검사
            과정, 검사 후 발생할 수 있는 합병증과 후유증 및 이 검사방법 이외의
            대체 검사방법에 대하여 의료진으로부터 설명을 듣고 그 내용을
            이해하였으며 검사 전 후
            <br />
            불가항력적인 합병증 또는 환자의 특이체질로 인한 우발적 사고가 있을
            수 있음을 사전 설명으로 충분히 이해하였습니다. 이에 본인은 귀 병원이
            상기 검사를 하여 줄 것을 서면으로 요청합니다.
          </Typography>
        </RowContainer>
      </Box>
    </>
  );
};

export default SpecialCaution;
