import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import { Box, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
    time: null | string;
    setTime: (time: null | string) => void;
}  

const OperationInfo = (props: Props) => {
    const { disabled, register, time, setTime } = props;

    const asa_class_labels = ["ASAI", "ASAII", "ASAIII", "ASAIV", "ASAV", "ASAVI"];

    const contents = [
        {
            label: "수술과",
            element: 
                <Form.MuiTextField
                    {...register("anesthesia.operation_info.department")}
                />,
        },
        {
            label: "수술날짜",
            element: 
                <Form.MuiTextField
                    type="date"
                    required={false}
                    disabled={disabled}
                    {...register("anesthesia.operation_info.date")}
                />
        },
        {
            label: "수술시간",
            element:
                <MobileTimePicker
                    value={time}
                    onChange={setTime}
                    renderInput={params => (
                    <Form.MuiTextField
                        {...params}
                        required={false}
                        placeholder="00:00 pm"
                        InputProps={{ endAdornment: <AccessTime /> }}
                    />
                    )}
                />
        },
        {
            label: "수술명",
            element: 
                <Form.MuiTextField
                    {...register("anesthesia.operation_info.title")}
                />,
        },
        {
            label: "금식여부",
            element: 
                <Box display="flex">
                    <Form.MuiTextField
                        select
                        required={false}
                        {...register("anethesia.operation_info.fast")}
                        sx={{ width: "37%" }}
                    >
                        <MenuItem value="금식">금식</MenuItem>
                        <MenuItem value="금식안함">금식안함</MenuItem>
                    </Form.MuiTextField>
                    <FormControlLabel
                        control={<Checkbox defaultChecked {...register("anesthesia.operation_info.x_ray")} />}
                        label="수술 전 흉부 X-ray"
                        sx={{ marginLeft: "20px" }}
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked {...register("anesthesia.operation_info.ecg")} />}
                        label="수술 전 심전도"
                        sx={{ marginLeft: "20px" }}
                    />
                </Box>
        }, 
        {
            label: "수술자세",
            element: 
                <Form.MuiTextField
                    {...register("anesthesia.operation_info.posture")}
                />,
        },
        {
            label: "",
            element: null,
        },
        {
            label: "응급여부",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("anethesia.operation_info.emergency")}
                >
                    <MenuItem value="응급">응급</MenuItem>
                    <MenuItem value="비응급">비응급</MenuItem>
                </Form.MuiTextField>
        },
        {
            label: "ASA class",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("anethesia.operation_info.asa_class")}
                >
                    {asa_class_labels.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
                </Form.MuiTextField>
        },
        {
            label: "예방적 항생제",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("anethesia.operation_info.antibiotics")}
                >
                    <MenuItem value="투여완료">투여완료</MenuItem>
                    <MenuItem value="없음">없음</MenuItem>
                </Form.MuiTextField>
        },
        {
            label: "마취방법",
            element: 
                <Form.MuiTextField
                    {...register("anesthesia.operation_info.method")}
                />,
        },
    ];

    return (
        <>
            <SectionTitle title="수술 정보"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent
                            title={label}
                            titleRatio={1}
                            childrenRatio={label === "금식여부" ? 5 : 2}
                        >
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default OperationInfo;