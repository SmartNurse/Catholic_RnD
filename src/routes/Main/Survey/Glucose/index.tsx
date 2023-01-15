import { useState } from "react";

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    TGlucoseDefaultValues,
  } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import PatientInfo from "./PatientInfo";
import GlucoseRecords from "./GlucoseRecords";
import PrescriptionRecords from "./PrescriptionRecords";

import { IGlucoseRecord, IGlucosePrescriptionRecord } from "apis/survey/type";
import { updateGlucose } from "apis/survey";

const Glucose = (props: SurveyDialogProps<TGlucoseDefaultValues>) => {
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

    const [opDate, setOpDate] = useState("");

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

    const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
    });

    const onSubmit = (data: TGlucoseDefaultValues) => {
      const { blood_sugar_log, prescription } = data;

      const request = {
        user_id,
        patient_id: patientInfo.patient_id,
        blood_sugar_survey: {
          blood_sugar_log: blood_sugar_log.map(
            ({ date, time, activity, category, level }: IGlucoseRecord) => ({ date, time, activity, category, level })
          ),
          prescription: prescription.map(
            ({ date, time, medication, content, unit, dose, administration_no, methods, completed }: IGlucosePrescriptionRecord) => ({ date, time, medication, content, unit, dose, administration_no, methods, completed })
          )
        }
      }

      updateGlucose(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('혈당기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('혈당기록지 저장에 실패하였습니다.', e));
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
            <Typography sx={{ margin: "40px auto 0px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>
                혈당 기록지
            </Typography>
            <PatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <GlucoseRecords {...formProps} />
            <PrescriptionRecords {...formProps} />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default Glucose;