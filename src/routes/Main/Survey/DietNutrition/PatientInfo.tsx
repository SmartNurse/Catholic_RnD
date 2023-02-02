import Form from "components/Form";
import { IFormRegister, IFormValues, } from "routes/Main/type";
import { IPatientInfo } from "apis/admin/type";

import { RadioGroup, Radio, Stack, FormControlLabel } from "@mui/material";

import RowContainer from "../components/RowContainer";
import RowContent from "../components/RowContent";

interface Props extends IPatientInfo, IFormRegister, IFormValues {
    disabled?: boolean;
}

const PatientInfo = (props: Props) => {
    const { patient_id, name, age, disabled, register, setValue, getValues } = props;

    return (
        <RowContainer xs={12}>
            <RowContent title="등록번호" titleRatio={1} childrenRatio={2}>
                <Form.MuiTextField
                    value={patient_id}
                    fullWidth={false}
                    disabled={disabled}
                    InputProps={{ readOnly: true }}
                />
            </RowContent>
            <RowContent title="환자명" titleRatio={1} childrenRatio={2}>
                <Form.MuiTextField
                    value={name}
                    fullWidth={false}
                    disabled={disabled}
                    InputProps={{ readOnly: true }}
                />
            </RowContent>
            <RowContent title="나이" titleRatio={1} childrenRatio={2}>
                <Form.MuiTextField
                    value={age}
                    fullWidth={false}
                    disabled={disabled}
                    InputProps={{ readOnly: true }}
                />
            </RowContent>
            <RowContent title="구분" titleRatio={1} childrenRatio={2}>
                <Form.MuiRadioGroup
                    i18nKey="DIET_NUTRITION.CLASSIFICATION"
                    values={[1, 2]}
                    disabled={disabled}
                    defaultValue={getValues('classification')}
                    onChange={v => setValue('classification', v)}
                />
            </RowContent>
        </RowContainer>
    );
}

export default PatientInfo;