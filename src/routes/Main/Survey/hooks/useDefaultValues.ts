import {
  getECardex,
  getTakingOver,
  getBedScore,
  getClinicObservation,
  getGlucose,
  getFall,
  getFallTwo,
  getPediatric_fall,
  getGCS,
  getPediatric_GCS,
  getFourScore,
  getHospitalization,
  getMedication,
  getNeeds,
  getOutHospital,
  getPathology,
  getRadiology,
  getSafety,
  getNRS,
  getFLACC,
  getCNPS,
  getBDI,
  getBAI,
  getMMSE,
  getCIST,
  getOperation,
  getAnesthesia,
  getTransfusion,
  getDialysis,
  getEmergency,
  getChildbirth,
  getHomeCare,
  getDietNutrition,
  getFallConfirm,
  getHospitalConfirm,
  getColonoscopy,
  getUpperEndoscopy,
  getNonSalary,
  getMedicalRecords,
  getDNR,
  getDNA,
  getMentalNursing,
  getCheckListRoom,
  getFFI,
  getLEFS,
  getSTarT,
  getKOOS,
  getNDI,
  getBedScoreTwo,
  getKPCS,
  getTransfusionAgree,
  getSuppressor,
  getCentralVenous,
  getCPR,
  getNursingProcess,
} from 'apis/survey';
import useNotification from 'hooks/useNotification';
import { findKeyValueToObj, findKeyValueToObjNoParse } from 'utils/convert';

import {
  initialECardex,
  initialTakingOver,
  initialOutHospitalSurvey,
  initialHospitalizationSurvey,
  initialMedicationSurvey,
  initialRadiology,
  initialPathology,
  initialBedScore,
  initialBedScoreTwo,
  initialFall,
  initialFallTwo,
  initialNeeds,
  initialPediatric_fall,
  initialGCS,
  initialPediatric_GCS,
  initialFourScore,
  initialClinicalObservation,
  initialGlucose,
  initialSafety,
  initialNRS,
  initialFLACC,
  initialCNPS,
  initialMentalNursing,
  initialBDI,
  initialBAI,
  initialMMSE,
  initialCIST,
  initialOperation,
  initialAnesthesia,
  initialTransfusion,
  initialDialysis,
  initialEmergency,
  initialChildbirth,
  initialHomeCare,
  initialHospitalConfirm,
  initialFallConfirm,
  initialColonoscopy,
  initialUpperEndoscopy,
  initialNonSalary,
  initialMedicalRecords,
  initialDNR,
  initialDNA,
  initialCoreNursingSkillVideo,
  initialCoreNursingSkillVideoExemple,
  initialCheckListRoom,
  initialFFI,
  initialLEFS,
  initialSTarTBack,
  initialKOOS,
  initialNDI,
  initialKPCS,
  initialTransfusionAgree,
  initialDietList,
  initialSuppressor,
  initialCRRT,
  initialIntubation,
  initialCentralVenous,
  initialCPR,
  initialNursingProcess,
} from '../initialStates';
import { MENU } from '../type';

interface Props {
  user_id: number;
  setDefaultValues: (v: any) => void;
}

const useDefaultValues = ({ setDefaultValues, user_id }: Props) => {
  const { onFail } = useNotification();

  const convertDataToStates = (data: any, states: any) => {
    const values = { ...states };
    const keys = Object.keys(states);

    for (let key of keys) {
      const getValue = data[key];

      if (typeof getValue !== 'object' || Array.isArray(getValue)) {
        values[key] = getValue;
      } else if (getValue) {
        try {
          values[key] = findKeyValueToObj(getValue, Object.keys(getValue));
        } catch {
          values[key] = findKeyValueToObjNoParse(
            getValue,
            Object.keys(getValue)
          );
        }
      }
    }

    setDefaultValues(values);
  };

  const onGetDefaultValues = (patient_id: number, type: string) => {
    switch (type) {
      case MENU.E_CARDEX:
        getECardex({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, ecardex_survey } = data;
            convertDataToStates(
              { update_at, ...ecardex_survey },
              initialECardex
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.TAKING_OVER:
        getTakingOver({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, take_over_survey } = data;
            convertDataToStates(
              { update_at, ...take_over_survey },
              initialTakingOver
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.HOSPITALIZATION:
        getHospitalization({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, hospitalization_survey } = data;
            convertDataToStates(
              { update_at, ...hospitalization_survey },
              initialHospitalizationSurvey
            );
          })

          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.OUT_HOSPITAL:
        getOutHospital({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, out_hospital_survey } = data;
            convertDataToStates(
              { update_at, ...out_hospital_survey },
              initialOutHospitalSurvey
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.MEDICATION:
        getMedication({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialMedicationSurvey);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.RADIOLOGY:
        getRadiology({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialRadiology);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.PATHOLOGY:
        getPathology({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialPathology);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CLINICAL_OBSERVATION:
        getClinicObservation({ user_id, patient_id })
          .then(({ data }) => {
            const { vital_sign, io_check } = data;
            const m_data = {
              ...data,
              vital_sign: JSON.parse(vital_sign),
              io_check: JSON.parse(io_check),
            };
            convertDataToStates(m_data, initialClinicalObservation);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;

      case MENU.IORECORD:
        getClinicObservation({ user_id, patient_id })
          .then(({ data }) => {
            const { vital_sign, io_check } = data;
            const m_data = {
              ...data,
              vital_sign: JSON.parse(vital_sign),
              io_check: JSON.parse(io_check),
            };
            convertDataToStates(m_data, initialClinicalObservation);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.GLUCOSE:
        getGlucose({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, blood_sugar_survey } = data;
            convertDataToStates(
              { update_at, ...blood_sugar_survey },
              initialGlucose
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.BEDSORES:
        getBedScore({ user_id, patient_id })
          .then(({ data }) => {
            const { contents } = data;
            const m_data = { ...data, contents: JSON.parse(contents) };
            convertDataToStates(m_data, initialBedScore);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.BEDSORESTWO:
        getBedScoreTwo({ user_id, patient_id })
          .then(({ data }) => {
            const { contents } = data;
            const m_data = { ...data, contents: JSON.parse(contents) };
            convertDataToStates(m_data, initialBedScoreTwo);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.NEEDS:
        getNeeds({ user_id, patient_id })
          .then(({ data }) => {
            const { body_status, disease_status } = data;
            const m_data = {
              ...data,
              body_status: JSON.parse(body_status),
              disease_status: JSON.parse(disease_status),
            };
            convertDataToStates(m_data, initialNeeds);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.FALL:
        getFall({ user_id, patient_id })
          .then(({ data }) => {
            const { contents } = data;
            const m_data = { ...data, contents: JSON.parse(contents) };
            convertDataToStates(m_data, initialFall);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.FALLTWO:
        getFallTwo({ user_id, patient_id })
          .then(({ data }) => {
            const { contents } = data;
            const m_data = { ...data, contents: JSON.parse(contents) };
            convertDataToStates(m_data, initialFallTwo);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.FALLSCALE:
        getPediatric_fall({ user_id, patient_id })
          .then(({ data }) => {
            const { contents } = data;
            const m_data = { ...data, contents: JSON.parse(contents) };
            convertDataToStates(m_data, initialPediatric_fall);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.GCS:
        getGCS({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, gcs_survey } = data;
            convertDataToStates({ update_at, ...gcs_survey }, initialGCS);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.Pediatric_GCS:
        getPediatric_GCS({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, pediatric_gcs_survey } = data;
            convertDataToStates(
              { update_at, ...pediatric_gcs_survey },
              initialPediatric_GCS
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.FourScore:
        getFourScore({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, four_score_survey } = data;
            convertDataToStates(
              { update_at, ...four_score_survey },
              initialFourScore
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.SAFETY:
        getSafety({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, safety_survey } = data;
            convertDataToStates(
              {
                update_at,
                accident_consequences_details:
                  safety_survey?.accident_consequences_details,
                event_classification: safety_survey?.event_classification,
                falling_type: {
                  ...safety_survey?.falling_type,
                  patient_risk_factors: safety_survey
                    ? JSON.parse(
                        safety_survey.falling_type?.patient_risk_factors
                      )
                    : [],
                },
                medication_type: safety_survey?.medication_type,
                other_type: safety_survey?.other_type,
                accident_detail: safety_survey?.accident_detail,
                accident_handling: safety_survey?.accident_handling,
                accident_result: safety_survey?.accident_result,
              },
              initialSafety
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.NRS:
        getNRS({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialNRS);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다', e));
        break;
      case MENU.FLACC:
        getFLACC({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialFLACC);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다', e));
        break;
      case MENU.CNPS:
        getCNPS({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, cnps_survey } = data;
            convertDataToStates({ update_at, ...cnps_survey }, initialCNPS);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.MENTAL_NURSING:
        getMentalNursing({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialMentalNursing);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.BDI:
        getBDI({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, bdi_survey } = data;
            convertDataToStates({ update_at, ...bdi_survey }, initialBDI);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.BAI:
        getBAI({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, bai_survey } = data;
            convertDataToStates({ update_at, ...bai_survey }, initialBAI);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.MMSE:
        getMMSE({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialMMSE);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CIST:
        getCIST({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, cist_survey } = data;
            convertDataToStates(
              {
                update_at,
                orientation1: cist_survey?.orientation1,
                orientation2: cist_survey?.orientation2,
                orientation3: cist_survey?.orientation3,
                orientation4: cist_survey?.orientation4,
                orientation5: cist_survey?.orientation5,
                memory1: cist_survey ? JSON.parse(cist_survey.memory1) : {},
                memory2: cist_survey ? JSON.parse(cist_survey.memory2) : {},
                attention1: cist_survey?.attention1,
                attention2: cist_survey?.attention2,
                attention3: cist_survey?.attention3,
                visual_spatial_ability: cist_survey?.visual_spatial_ability,
                executive_function1_1: cist_survey?.executive_function1_1,
                executive_function1_2: cist_survey?.executive_function1_2,
                executive_function1_3: cist_survey?.executive_function1_3,
                memory3: cist_survey ? JSON.parse(cist_survey.memory3) : {},
                memory4: cist_survey ? JSON.parse(cist_survey.memory4) : {},
                language_function1: cist_survey?.language_function1,
                language_function2: cist_survey?.language_function2,
                language_function3: cist_survey?.language_function3,
                language_function4: cist_survey?.language_function4,
                executive_function2: cist_survey?.executive_function2,
              },
              initialCIST
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.OPERATION:
        getOperation({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, surgical_survey } = data;
            convertDataToStates(
              { update_at, ...surgical_survey },
              initialOperation
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.ANESTHESIA:
        getAnesthesia({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialAnesthesia);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.TRANSFUSION:
        getTransfusion({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, transfusion_survey } = data;
            convertDataToStates(
              {
                update_at,
                ...transfusion_survey?.transfusion_information,
                transfusion_record: transfusion_survey?.transfusion_record,
              },
              initialTransfusion
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CPR:
        getCPR({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, cnps_survey } = data;
            convertDataToStates({ update_at, ...cnps_survey }, initialCPR);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.DIALYSIS:
        getDialysis({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, hemodialysis_survey } = data;
            convertDataToStates(
              {
                update_at,
                ...hemodialysis_survey?.dialysis_information,
                ...hemodialysis_survey?.weight_information,
                dialysis_db: hemodialysis_survey?.dialysis_db,
                crrt: hemodialysis_survey?.crrt,
                additional_information:
                  hemodialysis_survey?.additional_information,
              },
              initialDialysis
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.INTUBATION:
        getDialysis({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, hemodialysis_survey } = data;
            convertDataToStates(
              {
                update_at,
                ...hemodialysis_survey?.dialysis_information,
                ...hemodialysis_survey?.weight_information,
                dialysis_db: hemodialysis_survey?.dialysis_db,
                additional_information:
                  hemodialysis_survey?.additional_information,
              },
              initialIntubation
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.EMERGENCY:
        getEmergency({ user_id, patient_id }).then(({ data }) => {
          const { update_at, emergency_register_survey } = data;
          convertDataToStates(
            { update_at, ...emergency_register_survey },
            initialEmergency
          );
        });
        break;
      case MENU.CHILDBIRTH:
        getChildbirth({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, delivery_survey } = data;
            convertDataToStates(
              { update_at, ...delivery_survey },
              initialChildbirth
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.HOME_CARE:
        getHomeCare({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, homecare_survey } = data;
            convertDataToStates(
              { update_at, ...homecare_survey },
              initialHomeCare
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.KPCS:
        getKPCS({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, kpcs_survey } = data;
            convertDataToStates({ update_at, ...kpcs_survey }, initialKPCS);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.DIET_NUTRITION:
        getDietNutrition({ user_id, patient_id })
          .then(({ data }) => {
            const { dietary_survey } = data;

            const m_data = {
              ...dietary_survey,
            };

            convertDataToStates(m_data, initialDietList);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.HOSPITAL_CONFIRM:
        getHospitalConfirm({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, hospital_confirm } = data;
            convertDataToStates(
              {
                update_at,
                nursing_care: hospital_confirm
                  ? JSON.parse(hospital_confirm.nursing_care)
                  : {},
                facilities_in: hospital_confirm
                  ? JSON.parse(hospital_confirm.facilities_in)
                  : {},
                facilities: hospital_confirm
                  ? JSON.parse(hospital_confirm.facilities)
                  : {},
                name: hospital_confirm?.name,
                relationship: hospital_confirm?.relationship,
                signature: hospital_confirm?.signature,
                date: hospital_confirm?.date,
                personnel_signature: hospital_confirm?.personnel_signature,
              },
              initialHospitalConfirm
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.FALL_CONFIRM:
        getFallConfirm({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, fall_confirm } = data;
            convertDataToStates(
              {
                update_at,
                fall_education: fall_confirm
                  ? JSON.parse(fall_confirm.fall_education)
                  : {},
                signature: fall_confirm?.signature,
                date: fall_confirm?.date,
                personnel_signature: fall_confirm?.personnel_signature,
              },
              initialFallConfirm
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.COLONOSCOPY:
        getColonoscopy({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, colono_scopy_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...colono_scopy_confirmation,
              },
              initialColonoscopy
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.TRANSFUSIONAGREEMENT:
        getTransfusionAgree({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, transfusion_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...transfusion_confirmation,
              },
              initialTransfusionAgree
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CRRT_AGREEMENT:
        getCentralVenous({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, crrt_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...crrt_confirmation,
              },
              initialCRRT
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CENTRALVENOUS:
        getCentralVenous({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, chart_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...chart_confirmation,
              },
              initialCentralVenous
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.UPPER_ENDOSCOPY:
        getUpperEndoscopy({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, upper_endo_scopy_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...upper_endo_scopy_confirmation,
              },
              initialUpperEndoscopy
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.SUPPRESSOR:
        getSuppressor({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, restraints_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...restraints_confirmation,
              },
              initialSuppressor
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.NONSALARY:
        getNonSalary({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, uninsured_benefit_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...uninsured_benefit_confirmation,
              },
              initialNonSalary
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.MEDICALRECORDS:
        getMedicalRecords({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, chart_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...chart_confirmation,
              },
              initialMedicalRecords
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.DNR:
        getDNR({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, advance_directive_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...advance_directive_confirmation,
              },
              initialDNR
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.DNA:
        getDNA({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, gene_test_confirmation } = data;
            convertDataToStates(
              {
                update_at,
                ...gene_test_confirmation,
              },
              initialDNA
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.NURSING_PROCESS:
        getNursingProcess({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialNursingProcess);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.DRUG_CALCULATOR:
        getFall({ user_id, patient_id })
          .then(({ data }) => {
            const { contents } = data;
            const m_data = { ...data, contents: JSON.parse(contents) };
            convertDataToStates(m_data, initialFall);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CORE_NURSING_SKILL_VIDEO:
        convertDataToStates(
          initialCoreNursingSkillVideo,
          initialCoreNursingSkillVideo
        );
        break;
      case MENU.CORE_NURSING_SKILL_VIDEO_EXEMPLE:
        convertDataToStates(
          initialCoreNursingSkillVideoExemple,
          initialCoreNursingSkillVideoExemple
        );
        break;
      case MENU.NURSE_CHECKLIST_ROOM:
        getCheckListRoom({ user_id, patient_id })
          .then(({ data }) => {
            const { nursing_check_list_ward, update_at } = data;

            convertDataToStates(
              { update_at, ...nursing_check_list_ward },
              initialCheckListRoom
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.FFI:
        getFFI({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, ffi_survey } = data;
            convertDataToStates({ update_at, ...ffi_survey }, initialFFI);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다', e));
        break;
      case MENU.KOOS:
        getKOOS({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, contents } = data;
            convertDataToStates({ update_at, ...contents }, initialKOOS);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.LEFS:
        getLEFS({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, contents } = data;
            convertDataToStates({ update_at, ...contents }, initialLEFS);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.NDI:
        getNDI({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, contents } = data;
            convertDataToStates({ update_at, ...contents }, initialNDI);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.STarT_BacknScreening:
        getSTarT({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, contents } = data;
            convertDataToStates({ update_at, ...contents }, initialSTarTBack);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;

      default:
        setDefaultValues(null);
        break;
    }
  };

  return { onGetDefaultValues };
};

export default useDefaultValues;
