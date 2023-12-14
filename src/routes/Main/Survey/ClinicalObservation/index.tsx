import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateClinicObservation } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TClinicalObservationDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import VitalSignGraph from './VitalSignGraph';

const ClinicalObservation = (
  props: SurveyDialogProps<TClinicalObservationDefaultValues>
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

  const { handleSubmit, watch, getValues, setValue, register } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TClinicalObservationDefaultValues) => {
    const {
      vital_sign,
      weight_height,
      intake,
      output,
      position_change,
      restraint,
      ipc,
      vent,
      crrt,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      catholic_clinical_observation: {
        vital_sign: {
          date: JSON.stringify(vital_sign.date),
          time: JSON.stringify(vital_sign.time),
          sbp: JSON.stringify(vital_sign.sbp),
          dbp: JSON.stringify(vital_sign.dbp),
          pr: JSON.stringify(vital_sign.pr),
          rr: JSON.stringify(vital_sign.rr),
          bt: JSON.stringify(vital_sign.bt),
          spo2: JSON.stringify(vital_sign.spo2),
          o2: JSON.stringify(vital_sign.o2),
          etc: JSON.stringify(vital_sign.etc),
        },
        weight_height: {
          weight: JSON.stringify(weight_height.weight),
          height: JSON.stringify(weight_height.height),
        },
        intake: {
          oral: JSON.stringify(intake.oral),
          veinal: JSON.stringify(intake.veinal),
          blood_and_more: JSON.stringify(intake.blood_and_more),
          total: JSON.stringify(intake.total),
        },
        output: {
          urine: JSON.stringify(output.urine),
          vomit: JSON.stringify(output.vomit),
          stool: JSON.stringify(output.stool),
          drainage: JSON.stringify(output.drainage),
          total: JSON.stringify(output.total),
        },
        position_change: {
          do_or_not: JSON.stringify(position_change.do_or_not),
          position: JSON.stringify(position_change.position),
          condition: JSON.stringify(position_change.condition),
        },
        restraint: {
          date: JSON.stringify(restraint.date),
          reason: JSON.stringify(restraint.reason),
          part: JSON.stringify(restraint.part),
          condition: JSON.stringify(restraint.condition),
          cyanosis: JSON.stringify(restraint.cyanosis),
          temp: JSON.stringify(restraint.temp),
          sense: JSON.stringify(restraint.sense),
          adverse_reaction: JSON.stringify(restraint.adverse_reaction),
          prevention: JSON.stringify(restraint.prevention),
        },
        ipc: JSON.stringify(ipc),
        vent: {
          date: JSON.stringify(vent.date),
          mode: JSON.stringify(vent.mode),
          fio2: JSON.stringify(vent.fio2),
          peep: JSON.stringify(vent.peep),
          f: JSON.stringify(vent.f),
          vsennse: JSON.stringify(vent.vsennse),
          pi: JSON.stringify(vent.pi),
          ti: JSON.stringify(vent.ti),
          tv: JSON.stringify(vent.tv),
          mv: JSON.stringify(vent.mv),
          cstat: JSON.stringify(vent.cstat),
          pf_ration: JSON.stringify(vent.pf_ration),
        },
        crrt: {
          mode: JSON.stringify(crrt.mode),
          blood_flow: JSON.stringify(crrt.blood_flow),
          dialysate: JSON.stringify(crrt.dialysate),
          pre: JSON.stringify(crrt.pre),
          post: JSON.stringify(crrt.post),
          pbp: JSON.stringify(crrt.pbp),
          pt_fluid_rmv: JSON.stringify(crrt.pt_fluid_rmv),
          anti_coagulation: JSON.stringify(crrt.anti_coagulation),
          crrt_ck: JSON.stringify(crrt.crrt_ck),
          access_prs: JSON.stringify(crrt.access_prs),
          return_prs: JSON.stringify(crrt.return_prs),
          filter_prs: JSON.stringify(crrt.filter_prs),
          effluent_prs: JSON.stringify(crrt.effluent_prs),
          tmp_prs: JSON.stringify(crrt.tmp_prs),
          prs_drop: JSON.stringify(crrt.prs_drop),
        },
      },
    };

    updateClinicObservation(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('임상관찰 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('임상관찰 기록지 저장에 실패하였습니다.', e));
  };

  const formProps = {
    disabled,
    watch,
    getValues,
    setValue,
    onSuccess,
    onRequired,
    register,
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
          임상관찰 기록지
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <VitalSignGraph {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default ClinicalObservation;
