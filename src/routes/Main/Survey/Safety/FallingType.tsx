import Form from 'components/Form';
import { IFormValues, IFormRegister, IFormWatch } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues, IFormRegister, IFormWatch {
  disabled?: boolean;
}

const FallingType = (props: Props) => {
  const { disabled, getValues, setValue, register } = props;

  return (
    <>
      <SectionTitle title="오류 유형 - 낙상" />
      <RowContainer xs={12}>
        <RowContent title="의식상태" titleRatio={1} childrenRatio={11}>
          <Form.MuiRadioGroup
            i18nKey="SAFETY.TYPE.CONSCIOUSNESS.LEVEL"
            values={[1, 2, 3, 4, 5]}
            disabled={disabled}
            defaultValue={getValues('falling_type.consciousness_level')}
            onChange={v => setValue('falling_type.consciousness_level', v)}
            width="auto"
          />
        </RowContent>
        <RowContent title="활동상태" titleRatio={1} childrenRatio={11}>
          <Form.MuiRadioGroup
            i18nKey="SAFETY.TYPE.ACTIVITY.STATUS"
            values={[1, 2, 3, 4, 5]}
            disabled={disabled}
            defaultValue={getValues('falling_type.activity_status')}
            onChange={v => setValue('falling_type.activity_status', v)}
            width="auto"
          />
        </RowContent>
        <RowContent title="보조기구 사용" titleRatio={1} childrenRatio={11}>
          <Form.MuiRadioGroup
            i18nKey="SAFETY.TYPE.ASSISTING.DEVICES"
            values={[1, 2, 0]}
            disabled={disabled}
            defaultValue={getValues('falling_type.assisting_devices')}
            onChange={v => setValue('falling_type.assisting_devices', v)}
            width="auto"
          />
        </RowContent>
        <RowContent title="낙상장소" titleRatio={1} childrenRatio={11}>
          <Form.MuiRadioGroup
            i18nKey="SAFETY.TYPE.PLACE.FALLING.ACCIDENT"
            values={[1, 2, 3, 4, 5, 0]}
            disabled={disabled}
            defaultValue={getValues('falling_type.place_falling_accident')}
            onChange={v => setValue('falling_type.place_falling_accident', v)}
            width="auto"
          />
          <Form.MuiTextField
            required={false}
            fullWidth={false}
            disabled={disabled}
            placeholder="직접 입력"
            sx={{ marginLeft: '10px' }}
            {...register('falling_type.place_falling_accident_etc')}
          />
        </RowContent>
        <RowContent title="환자 위험요인" titleRatio={1} childrenRatio={11}>
          <Form.MuiCheckboxGroup
            i18nNullKey="ETC"
            disabled={disabled}
            i18nKey="SAFETY.PATIENT.RISK.FACTORS"
            values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            defaultValue={getValues('falling_type.patient_risk_factors')}
            onChange={v => setValue('falling_type.patient_risk_factors', v)}
          />
        </RowContent>
        <RowContent
          title="낙상위험도 평가도구 점수"
          titleRatio={1.2}
          childrenRatio={2.4}
        >
          <Form.MuiTextField
            required={false}
            fullWidth={false}
            disabled={disabled}
            {...register('falling_type.score')}
            InputProps={{
              endAdornment: '점',
            }}
          />
        </RowContent>
        <RowContent title="평가 날짜" titleRatio={1} childrenRatio={7}>
          <Form.MuiTextField
            fullWidth={false}
            required={false}
            type="date"
            disabled={disabled}
            {...register('falling_type.date')}
          />
        </RowContent>
        <RowContent title="낙상 유형" titleRatio={1} childrenRatio={11}>
          <Form.MuiRadioGroup
            i18nKey="SAFETY.TYPE.FALL.TYPE"
            values={[1, 2, 3, 4]}
            disabled={disabled}
            defaultValue={getValues('falling_type.fall_type')}
            onChange={v => setValue('falling_type.fall_type', v)}
            width="auto"
          />
        </RowContent>
        <RowContent title="낙상 위험요인" titleRatio={1} childrenRatio={11}>
          <Form.MuiRadioGroup
            i18nKey="SAFETY.TYPE.RISK.FACTOR"
            values={[1, 2, 3, 4, 5, 0]}
            disabled={disabled}
            defaultValue={getValues('falling_type.risk_factor')}
            onChange={v => setValue('falling_type.risk_factor', v)}
            width="auto"
          />
          <Form.MuiTextField
            required={false}
            fullWidth={false}
            disabled={disabled}
            placeholder="직접 입력"
            sx={{ marginLeft: '10px' }}
            {...register('falling_type.risk_factor_etc')}
          />
        </RowContent>
      </RowContainer>
    </>
  );
};

export default FallingType;
