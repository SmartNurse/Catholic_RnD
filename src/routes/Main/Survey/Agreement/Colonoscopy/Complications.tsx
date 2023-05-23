import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '속옷 탈의 후 대장 내시경 전용 검사복으로 갈아입습니다. (머리핀, 시계, 귀걸이, 반지 등 금속물질은 모두 제거하여 주십시오.)',
  '검사 전 장운동을 억제하기 위한 진경제 주사를 맞고 검사를 시작합니다. 항문을 통해 내시경을 삽입하여 대장이 시작되는 회맹부까지 도달 한 후, 내시경을 서서히 빼내면서 이상 유무를 확인하며, 필요에 따라 조직\n    생검을 하거나, 용종이 발견되면 용종절제술을 시행하게 됩니다. ',
  '검사 중 공기를 넣어 대장을 부풀리고 내시경이 구불구불한 장을 압박하면서 진행하므로 복부팽만감이나 통증을 느낄 수 있습니다. 또한 내시경 진입을 용이하게 하기 위해 자세를 변경할 수도 있습니다.',
  '검사 시간은 대개 10~20분 정도 소요되나, 이상 부위의 조직생검이나 용종절제술을 시행하는 경우 시간이 더 소요될 수 있습니다.  ',
  '용종을 제거하기 위해서는 대장내시경을 통해 절제용 올가미를 넣어 용종을 조여맨 다음 전기를 통하여 잘라냅니다. 잘라낸 용종은 회수하여 현미경으로 자세히 관찰한 후 어떤 종류의 용종인지 확인합니다. ',
  '적절한 장정결이 되지 않은 경우에는 장정결제를 추가로 복용 후 검사하거나 다른 날로 연기할 수 있습니다.',
  '드물지만 일부 환자에서 대장의 심한 유동성, 복부수술이나 복막염 등으로 인한 장유착 때문에 대장 전체의 관찰이 불가능한 경우가 있으며 이러한 경우라도 검사 비용은 환불되지 않습니다.',
];

const Complications = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="검사의 과정 및 방법" />
      <Box sx={{ width: '98%', margin: '48px auto 24px auto' }}>
        {contents.map((v, i) => (
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '40px',
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
