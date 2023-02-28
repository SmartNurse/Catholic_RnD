import { useState } from "react";

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    THomeCareDefaultValues,
  } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import CommonPatientInfo from "../../components/CommonPatientInfo";
import BasicInformation from "./BasicInformation";
import RequestStatus from "./RequestStatus";
import InspectionFindings from "./InspectionFindings";
import MedicationRecords from "./MedicationRecords";
import TextAreaSection from "../../components/TextAreaSection";

import { IHomeCareRecord } from "apis/survey/type";
import { updateHomeCare } from "apis/survey";

const HomeCare = (props: SurveyDialogProps<THomeCareDefaultValues>) => {
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

    const onSubmit = (data: THomeCareDefaultValues) => {
      /*
      const { basic_information, request_status, inspection_findings, medication_records, need_service } = data;

      const request = {
        user_id,
        patient_id: patientInfo.patient_id,
        homecare_survey: {
          basic_information: {
            ...basic_information,
            residence: basic_information.residence + "&" + basic_information.residence_etc,
            sanitary: basic_information.sanitary + "&" + basic_information.sanitary_notes,
            safety: basic_information.safety + "&" + basic_information.safety_notes,
          },
          request_status,
          inspection_findings,
          medication_records,
          need_service,
        }
      }

      updateHomeCare(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('가정간호 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('가정간호 기록지 저장에 실패하였습니다.', e));
      */
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
                가정간호 기록지
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <BasicInformation {...formProps} />
            <RequestStatus {...formProps} />
            <InspectionFindings {...formProps} />
            <MedicationRecords {...formProps} />
            <TextAreaSection {...formProps} title="필요로 되는 가정간호서비스" registerId="need_service" required={false} />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default HomeCare;