import Form from 'components/Form';
import { IFormValues, IFormRegister } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues, IFormRegister {
  disabled?: boolean;
}

const ConsequencesDetails = (props: Props) => {
  const { disabled, getValues, setValue, register } = props;

  return (
    <>
        <SectionTitle title="사고 발생 상황 및 결과" />
        <RowContainer xs={12}>
            <RowContent title="발생 일시" titleRatio={1} childrenRatio={11}>
                <Form.MuiTextField
                    required={false}
                    fullWidth={false}
                    type="date"
                    disabled={disabled}
                    {...register("accident_consequences_details.accidence_date")}
                />
            </RowContent>
            <RowContent title="발견 일시" titleRatio={1} childrenRatio={11}>
                <Form.MuiTextField
                    fullWidth={false}
                    type="date"
                    disabled={disabled}
                    {...register("accident_consequences_details.discovery_date")}
                />
            </RowContent>
            <RowContent title="발생 장소" titleRatio={1} childrenRatio={11}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.DISCOVERY.PLACE"
                    values={[1, 2, 3, 4, 5, 0]}
                    disabled={disabled}
                    defaultValue={getValues('accident_consequences_details.discovery_place')}
                    onChange={v => setValue('accident_consequences_details.discovery_place', v)}
                    width="auto"
                />
                <Form.MuiTextField
                    required={false}
                    fullWidth={false}
                    disabled={disabled}
                    placeholder="직접 입력"
                    sx={{ marginLeft: "10px" }}
                    {...register('accident_consequences_details.discovery_place_etc')}
                />
            </RowContent>
            <RowContent title="사고 유형" titleRatio={1} childrenRatio={11}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.ACCIDENT.TYPE"
                    values={[1, 2, 3]}
                    disabled={disabled}
                    defaultValue={getValues('accident_consequences_details.accident_type')}
                    onChange={v => setValue('accident_consequences_details.accident_type', v)}
                    width="auto"
                />
            </RowContent>
            <RowContent title="사고 분류" titleRatio={1} childrenRatio={11}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.ACCIDENT.CLASSIFICATION"
                    values={[1, 2, 3, 4, 5, 6, 7, 8, 0]}
                    disabled={disabled}
                    defaultValue={getValues('accident_consequences_details.accident_classification')}
                    onChange={v => setValue('accident_consequences_details.accident_classification', v)}
                    width="auto"
                />
                <Form.MuiTextField
                    required={false}
                    fullWidth={false}
                    disabled={disabled}
                    placeholder="직접 입력"
                    sx={{ marginLeft: "10px" }}
                    {...register('accident_consequences_details.accident_classification_etc')}
                />
            </RowContent>
        </RowContainer>
    </>
  );
};

export default ConsequencesDetails;
