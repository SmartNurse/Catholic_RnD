import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateCheckListRoom } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TCheckListRoomDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import CheckList from './CheckList';
import CheckList2 from './CheckList2';
import CheckList3 from './CheckList3';
import CheckList4 from './CheckList4';
import CheckList5 from './CheckList5';
import CheckList6 from './CheckList6';
import CheckList7 from './CheckList7';

const NurseCheckListRoom = (
  props: SurveyDialogProps<TCheckListRoomDefaultValues>
) => {
  const {
    title,
    isOpen,
    disabled,
    defaultValues,
    user_id,
    patientInfo,
    nurseName,
    onClose,
  } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TCheckListRoomDefaultValues) => {
    const { patient_id } = patientInfo;
    const {
      info_info01,
      info_info02,
      info_info03,

      info_mental01,

      fall01,
      fall02,
      fall03,
      fall04,
      fall05,

      bed_sore01,
      bed_sore02,
      bed_sore03,
      bed_sore04,
      bed_sore05,

      edu01,
      edu02,

      care_plan01,
      care_plan02,
      care_plan03,

      surgery01,
      surgery02,
      surgery03,

      medicine01,
      medicine02,

      hospitalization01,
      hospitalization02,
      hospitalization03,
      hospitalization04,
      hospitalization05,
      hospitalization06,
      hospitalization07,
      hospitalization08,

      ns_fall01,
      ns_fall02,

      ns_bedsore01,

      ns_pt_moving01,
      ns_pt_moving02,

      ns_edu01,

      ns_surgery01,

      ns_transfusion01,

      ns_infection01,

      ns_pain01,
      ns_pain02,
      ns_pain03,

      ns_re_pain01,
      ns_re_pain02,
      ns_re_pain03,
      ns_re_pain04,

      ns_pca01,
      ns_pca02,
      ns_pca03,
      ns_pca04,

      ns_nausea01,
      ns_nausea02,

      ns_chemo_side_eff01,

      ns_restraint01,
      ns_restraint02,
      ns_restraint03,
      ns_restraint04,
      ns_restraint05,

      ns_high_risk01,
      ns_high_risk02,

      right01,

      discharge01,
      discharge02,
      discharge03,
      discharge04,

      ocs01,
    } = data;

    // const contentsValues = Object.values(contents);
    // if (contentsValues.includes('')) return onRequired('REQUIRED.FALL');

    const request = {
      user_id,
      patient_id,
      nursing_check_list_ward: data,
    };

    // console.log('데이터', request);

    updateCheckListRoom(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('간호기록 체크리스트(병동) 저장에 성공하였습니다.');
      })
      .catch(e =>
        onFail('간호기록 체크리스트(병동) 저장에 실패하였습니다.', e)
      );
  };

  const formProps = {
    disabled,
    watch,
    register,
    getValues,
    setValue,
  };

  return (
    <MuiDialog.SurveyForm
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={disabled ? undefined : handleSubmit(onSubmit)}
      update_at={defaultValues?.update_at}
    >
      <Grid
        container
        wrap="wrap"
        rowSpacing={5}
        columnSpacing={3}
        sx={{ py: 5, px: 1 }}
      >
        <Typography
          sx={{
            margin: '40px auto 0px auto',
            fontWeight: '700',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          간호기록 체크리스트(병동)
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        {/* 간호정보조사 */}
        <CheckList {...formProps} />
        {/* 낙상-욕창 */}
        <CheckList2 {...formProps} />
        {/* 교육-CarePlan*/}
        <CheckList3 {...formProps} />
        {/* 수술-자가약 관리  */}
        <CheckList4 {...formProps} />
        {/* 입원시 간호 기록 */}
        <CheckList5 {...formProps} />
        {/* 간호기록  */}
        <CheckList6 {...formProps} />
        {/* 사생활보호 - 퇴원 메모  */}
        <CheckList7 {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default NurseCheckListRoom;
