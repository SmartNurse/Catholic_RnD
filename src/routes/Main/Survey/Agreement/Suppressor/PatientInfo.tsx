import { Fragment } from 'react';
import { Typography } from '@mui/material';

import RowContainer from '../../components/RowContainer';
import { Ti18nId } from 'hooks/useI18n';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const PatientInfo = (props: Props) => {
  const { disabled, register } = props;

  return (
    <Fragment>
      <SectionTitle title="1. 신체 억제대 사용 배경" />
      <RowContainer xs={11.5} sx={{ margin: '20px 0px 30px 0px' }}>
        <Typography
          sx={{ lineHeight: '20px', margin: '20px 0 0 15px', fontSize: '14px' }}
        >
          입원환자는 질환의 특성상 인지기능과 운동능력의 손상을 보이는 분들이
          많으며 그로 인하여 치료를 위한 장치들을 스스로 제거하거나 손상시키기도
          합니다. 이를 해결하기 위한 다양한 노력을 기울이고 있으나
          <br />
          최소한의 신체 억제대 사용이 필요한 경우가 있습니다.
        </Typography>
      </RowContainer>
    </Fragment>
  );
};

export default PatientInfo;
