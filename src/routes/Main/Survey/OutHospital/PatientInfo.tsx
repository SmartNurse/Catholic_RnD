import { IPatientInfo } from '../../../../apis/admin/type';
import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyInput from '../components/SurveyInput';

interface Props extends FormProps {
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { patientInfo, register } = props;

  return (
    <RowContainer xs={12}>
      <RowContent title="환자명" titleRatio={1} childrenRatio={3}>
        <SurveyInput fullWidth={false} disabled value={patientInfo.name} />
      </RowContent>
      <RowContent title="환자등록번호" titleRatio={1} childrenRatio={3}>
        <SurveyInput
          fullWidth={false}
          disabled
          value={patientInfo.patient_id}
        />
      </RowContent>
      <RowContent title="퇴원일" titleRatio={1} childrenRatio={3}>
        <SurveyInput fullWidth={false} type="date" {...register('date')} />
      </RowContent>
    </RowContainer>
  );
};

export default PatientInfo;
