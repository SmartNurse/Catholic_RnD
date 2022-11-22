import Form from "components/Form";
import { IFormRegister } from "routes/Main/type";
import { IPatientInfo } from "apis/admin/type";

import { RadioGroup, Radio, Stack, FormControlLabel } from "@mui/material";

import RowContainer from "../components/RowContainer";
import RowContent from "../components/RowContent";

interface Props extends IPatientInfo, IFormRegister {
    disabled?: boolean;
}

const PatientInfo = (props: Props) => {
    const { patient_id, name, age, disabled, register } = props;

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
                <RadioGroup
                    row
                    defaultValue={0}
                    sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap', display: 'inline-flex' }}
                    >
                    <Stack direction={'row'} spacing={1}>
                        <FormControlLabel
                            key={0}
                            value={0}
                            disabled={disabled}
                            control={<Radio size="small" />}
                            label={"환자"}
                        />
                        <FormControlLabel
                            key={1}
                            value={1}
                            disabled={disabled}
                            control={<Radio size="small" />}
                            label={"보호자"}
                        />
                    </Stack>
                </RadioGroup>
            </RowContent>
        </RowContainer>
    );
}

export default PatientInfo;