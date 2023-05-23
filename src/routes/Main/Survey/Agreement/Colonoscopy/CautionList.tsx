import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '도난이나 분실의 위험성이 있는 귀중품은 검사 당일 가지고 오지 마십시오. ',
  '젤 네일 (네일 액세서리 포함)은 진정내시경 시 산소포화도 감지를 방해하므로, 검사 전 반드시 지우고 오시기 바랍니다. ',
  '진정내시경 검사가 예정된 경우에는 검사 종료 후 자가운전은 절대 삼가해야 하며, 안전한 귀가와 낙상 예방을 위해 보호자를 동반하십시오. ',
  '기저질환으로 약을 복용하고 있거나 아스피린이나 항응고제를 드시는 분은 담당의사에게 약물 복용 여부를 상의하고 검사전 중단 여부를 반드시 확인 받으시기 바랍니다. ',
  '인슐린 주사나 당뇨약은 복용하지 않으나 혈압약, 심장약, 천식약, 간질약 등과 같이 검사에 영향을 줄 수 있는 약물을 검사 당일 아침 드십시오.',
  '전립성 비대증이나 녹내장이 있으신 분은 검사 전에 미리 말씀해 주십시오. ',
  '적절한 장정결을 위해서 검사 3일전부터 나물류, 버섯, 해조류, 잡곡류, 견과류, 씨 있는 과일(포도, 참외, 수박)은 피하십시오. 검사 전날 하루 동안은 죽이나 미음을 드십시오.  ',
  '충분한 장정결이 되지 않으면 검사가 불가능하여 검사 당일 추가로 장정결제를 복용하거나 다른 날로 검사가 연기될 수 있으므로 장정결제 복용 방법을 잘 지켜주시기 바랍니다.  ',
];

const CautionList = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="검사 전 주의사항" />
      <Box sx={{ width: '98%', margin: '48px auto 24px auto' }}>
        {contents.map((v, i) => (
          <Typography
            sx={{ fontWeight: '400', fontSize: '14px', lineHeight: '40px' }}
          >
            {i + 1}. {v}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default CautionList;
