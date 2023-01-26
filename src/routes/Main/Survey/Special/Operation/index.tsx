import { useState } from "react";

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    TOperationDefaultValues,
  } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import { updateOperation } from "apis/survey";

import PatientStaffInfo from "./PatientStaffInfo";
import NewOpInfo from "./NewOpInfo";
import OpContent from "./OpContent";

const Operation = (props: SurveyDialogProps<TOperationDefaultValues>) => {
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

    const onSubmit = (data: TOperationDefaultValues) => {
      const { surgery_information, operation_information, surgery_details } = data;
      
      const request = {
        user_id,
        patient_id: patientInfo.patient_id,
        surgical_survey: {
          surgery_information: {...surgery_information},
          operation_information: {
            ...operation_information,
            position: operation_information.position === "etc" ? operation_information.position_etc : operation_information.position,
          },
          surgery_details: {
            ...surgery_details,
            anesthetic_method: surgery_details.anesthetic_method === "etc" ? surgery_details.anesthetic_method_etc : surgery_details.anesthetic_method,
          }
        }
      };

      updateOperation(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('수술 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('수술 기록지 저장에 실패하였습니다.', e));
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
                수술 기록지
            </Typography>
            <PatientStaffInfo {...formProps} patientInfo={patientInfo} nurseName={nurseName} />
            <NewOpInfo {...formProps} />
            <OpContent {...formProps} />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default Operation;