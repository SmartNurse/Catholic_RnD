import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import { Box, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
    time: null | string;
    setTime: (time: null | string) => void;
}  

const NewOpInfo = (props: Props) => {
    const { disabled, register, watch, time, setTime } = props;

    const [postureEtc, setPostureEtc] = useState(0);
    const [methodEtc, setMethodEtc] = useState(0);

    const asa_class_labels = ["ASAI", "ASAII", "ASAIII", "ASAIV", "ASAV", "ASAVI"];

    const contents = [
        {
            label: "수술과",
            element: 
                <Form.MuiTextField
                    {...register("operation.operation_info.department")}
                />,
        },
        {
            label: "수술날짜",
            element: 
                <Form.MuiTextField
                    type="date"
                    required={false}
                    disabled={disabled}
                    {...register("operation.operation_info.date")}
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
            label: "ASA class",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("operation.operation_info.asa_class")}
                >
                    {asa_class_labels.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
                </Form.MuiTextField>
        },
        {
            label: "주수술명",
            element: 
                <Form.MuiTextField
                    {...register("operation.operation_info.main_title")}
                />,
        },
        {
            label: "부수술명",
            element: 
                <Form.MuiTextField
                    {...register("operation.operation_info.sub_title")}
                />,
        },
        {
            label: "과거력",
            element: 
                <Form.MuiTextField
                    {...register("operation.operation_info.history")}
                />,
        },
        {
            label: "알레르기",
            element: 
                <Form.MuiTextField
                    {...register("operation.operation_info.allergy")}
                />,
        },
        {
            label: "금식여부",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("operation.operation_info.fast")}
                >
                    <MenuItem value="금식">금식</MenuItem>
                    <MenuItem value="금식안함">금식안함</MenuItem>
                </Form.MuiTextField>
        },
        {
            label: "예방적 항생제",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("operation.operation_info.antibiotics")}
                >
                    <MenuItem value="투여완료">투여완료</MenuItem>
                    <MenuItem value="없음">없음</MenuItem>
                </Form.MuiTextField>
        },

        {
            label: "수술자세",
            element: 
                <Box display="flex">
                    <Form.MuiTextField
                        select
                        required={false}
                        sx={{ width: `${postureEtc ? "18%" : "37%"}` }}
                        {...register("operation.operation_info.posture")}
                        onChange={(e) => {
                            if (e.target.value === "etc") setPostureEtc(1);
                            else setPostureEtc(0);
                        }}
                    >
                        <MenuItem value="fowler">Fowler position</MenuItem>
                        <MenuItem value="lateral">Lateral position</MenuItem>
                        <MenuItem value="lithotomy">Lithotomy position</MenuItem>
                        <MenuItem value="orthopnea">Orthopnea position</MenuItem>
                        <MenuItem value="prone">Prone position</MenuItem>
                        <MenuItem value="recumbent">Recumbent position</MenuItem>
                        <MenuItem value="sims">Sims position</MenuItem>
                        <MenuItem value="supine">Supine position</MenuItem>
                        <MenuItem value="etc">직접 입력</MenuItem>
                    </Form.MuiTextField>
                    {postureEtc
                    ?
                    <Form.MuiTextField
                        {...register("operation.operation_info.posture_etc")}
                        placeholder="직접 입력"
                        sx={{ marginLeft: "5px", width: "18%" }}
                    />
                    :
                    null
                    }
                    <FormControlLabel
                        control={<Checkbox defaultChecked {...register("operation.operation_info.x_ray")} />}
                        label="수술 전 흉부 X-ray"
                        sx={{ marginLeft: "20px" }}
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked {...register("operation.operation_info.ecg")} />}
                        label="수술 전 심전도"
                        sx={{ marginLeft: "20px" }}
                    />
                </Box>
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
                            childrenRatio={label === "수술자세" ? 5 : 2}
                        >
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default NewOpInfo;