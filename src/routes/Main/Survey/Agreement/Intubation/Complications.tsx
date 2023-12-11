import { Typography, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from './SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const contents = [
  '1) 삽관시 후두경과 튜브의 삽입에 의해서 입술, 잇몸, 혀, 인두, 성대, 기관 등에 상처를 낼 수 있고, 치아가 부러질 수 있습니다.',
  '2) 삽관 과정 중의 자극으로 인해 고혈압, 부정맥이 올 수 있습니다. ',
  '3) 자발 호흡이 없는 환자에서 삽관 시간이 길어지면서 저산소증이 올 수 있으며 이로 인해 심각한 뇌손상, 기타 장기 손상 등이 초래될 수 있습니다. ',
  '4) 기도 자극으로 인한 치명적인 기관지 경련이 발생할 수 있고, 삽관시 위내용물이 기도내로 흡인되어 폐렴을 유발하고 심하면 질식할 수도 있습니다. ',
  '5) 삽관 후에는 기관 분비물에 의한 튜브의 폐쇄, 튜브의 위치 변동으로 인한 발관 등으로 응급 상황이 발생할 수 있고, 이 때에는 재 삽관술을 시행해야 합니다.',
  '6) 발관 후에는 후두경련, 인후통, 후두부종, 성대마비, 후두육아종, 기관연화증, 기관협착 등의 후유증이 발생할 수 있습니다.',
];

const Complications = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="3. 시술후의 후유증 내지 합병증" />
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
