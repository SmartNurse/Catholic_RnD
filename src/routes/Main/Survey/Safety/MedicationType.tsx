import Form from 'components/Form';
import { IFormValues, IFormRegister } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues, IFormRegister {
  disabled?: boolean;
}

const MedicationType = (props: Props) => {
  const { disabled, getValues, setValue, register } = props;

  return (
    <>
        <SectionTitle title="오류 유형 - 투약" />
        <RowContainer xs={12}>
            <RowContent title="처방 오류" titleRatio={1} childrenRatio={11}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.TYPE.PRESCRIPTION"
                    values={[1, 2, 3, 4, 0]}
                    disabled={disabled}
                    defaultValue={getValues('medication_type.prescription_error')}
                    onChange={v => setValue('medication_type.prescription_error', v)}
                    width="auto"
                />
                <Form.MuiTextField
                    required={false}
                    fullWidth={false}
                    disabled={disabled}
                    placeholder="직접 입력"
                    sx={{ marginLeft: "10px" }}
                    {...register('medication_type.prescription_error_etc')}
                />
            </RowContent>
            <RowContent title="약품조제 오류" titleRatio={1} childrenRatio={11}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.TYPE.PRESCRIPTION"
                    values={[1, 2, 3, 4, 0]}
                    disabled={disabled}
                    defaultValue={getValues('medication_type.drug_preparation_error')}
                    onChange={v => setValue('medication_type.drug_preparation_error', v)}
                    width="auto"
                />
                <Form.MuiTextField
                    required={false}
                    fullWidth={false}
                    disabled={disabled}
                    placeholder="직접 입력"
                    sx={{ marginLeft: "10px" }}
                    {...register('medication_type.drug_preparation_error_etc')}
                />
            </RowContent>
            <RowContent title="확인 오류" titleRatio={1} childrenRatio={11}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.TYPE.CONFIRM"
                    values={[1, 2, 3, 4, 5, 6, 7]}
                    disabled={disabled}
                    defaultValue={getValues('medication_type.confirm_error')}
                    onChange={v => setValue('medication_type.confirm_error', v)}
                    width="auto"
                />
            </RowContent>
            <RowContent title="해석 오류" titleRatio={1} childrenRatio={11}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.TYPE.INTERPRETATION"
                    values={[1, 2]}
                    disabled={disabled}
                    defaultValue={getValues('medication_type.interpretation_error')}
                    onChange={v => setValue('interpretation_error', v)}
                    width="auto"
                />
            </RowContent>
        </RowContainer>
    </>
  );
};

export default MedicationType;
