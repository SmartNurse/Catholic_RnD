import { useState } from "react";

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    TTransfusionDefaultValues,
  } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { IBloodRecord } from "apis/survey/type";
import { updateTransfusion } from "apis/survey";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import BloodInfo from "./BloodInfo";
import BloodRecords from "./BloodRecords";

const Transfusion = (props: SurveyDialogProps<TTransfusionDefaultValues>) => {
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

    const onSubmit = (data: TTransfusionDefaultValues) => {
      const {
        blood_number,
        blood_name,
        volume,
        arrival_time,
        blood_transfusion_arrival,
        transfusion_check1,
        transfusion_check2,
        transfusion_start_time,
        practitioner_start,
        transfusion_end_time,
        practitioner_end,
        transfusion_record,
      } = data;

      const request = {
        user_id,
        patient_id: patientInfo.patient_id,
        transfusion_survey: {
          transfusion_information: {
            blood_number, blood_name,
            volume, arrival_time,
            blood_transfusion_arrival,
            transfusion_check1, transfusion_check2,
            transfusion_start_time, practitioner_start,
            transfusion_end_time, practitioner_end,
          },
          transfusion_record: transfusion_record?.map(
            ({ time, division, sbp, dbp, pr, rr, bt, side_effects, notes }: IBloodRecord) => ({
              time,
              division,
              sbp,
              dbp,
              pr,
              rr,
              bt,
              side_effects,
              notes
            })
          )  
        }
      }

      updateTransfusion(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('수혈 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('수혈 기록지 저장에 실패하였습니다.', e));
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
                수혈 기록지
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <BloodInfo {...formProps} blood={patientInfo.blood} />
            <BloodRecords {...formProps} />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default Transfusion;