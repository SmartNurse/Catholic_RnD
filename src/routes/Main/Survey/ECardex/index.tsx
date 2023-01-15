import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    TECardexDefaultValues,
  } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import TextareaSection from '../components/TextAreaSection';
import CommonPatientInfo from '../components/CommonPatientInfo';
import Remark from './Remark';
import Dosage from './Dosage';
import Lab from './Lab';
import ImageTest from './ImageTest';

import { updateECardex } from 'apis/survey';
import { IECardexRemark, IECardexDosage, IECardexLab, IECardexImagingTest } from 'apis/survey/type';

const ECardex = (props: SurveyDialogProps<TECardexDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        user_id,
        nurseName,
        patientInfo,
        onClose,
    } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

    const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
    });

    const onSubmit = (data: TECardexDefaultValues) => {
      const { 
        other_remarks,
        remark_data,
        medication_data,
        lab_data,
        imaging_test_data,
        concerns,
        plans,
        evaluation
      } = data;

      const request = {
        user_id,
        patient_id: patientInfo.patient_id,
        e_cardex_survey: {
          other_remarks,
          remark_data: remark_data?.map(
            ({ date, remark }: IECardexRemark) => ({ date, remark})
          ),
          medication_data: medication_data?.map(
            ({ date, medication, method, time, end }: IECardexDosage) => ({ date, medication, method, time, end })
          ),
          lab_data: lab_data?.map(
            ({ date, lab, implementing_and_inspection, result }: IECardexLab) => ({ date, lab, implementing_and_inspection, result })
          ),
          imaging_test_data: imaging_test_data?.map(
            ({ date, imaging_test, implementing_and_inspection, result }: IECardexImagingTest) => ({ date, imaging_test, implementing_and_inspection, result })
          ),
          concerns,
          plans,
          evaluation
        }
      };

      updateECardex(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('e-Cardex 저장에 성공하였습니다.');
      })
      .catch(e => onFail('e-Cardex 저장에 실패하였습니다.', e));
    };

    const formProps = { disabled, watch, register, getValues, setValue, onSuccess, onRequired };

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
            <Typography sx={{ margin: "40px auto 0px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>e-Cardex (Kardex)</Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <TextareaSection {...formProps} title="기타 인계사항" registerId="other_remarks" />
            <Remark {...formProps} />
            <Dosage {...formProps} />
            <Lab {...formProps} />
            <ImageTest {...formProps} />
            <TextareaSection {...formProps} title="간호문제" registerId="concerns" />
            <TextareaSection {...formProps} title="간호 계획 및 지시" registerId="plans" />
            <TextareaSection {...formProps} title="평가" registerId="evaluation" />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default ECardex;