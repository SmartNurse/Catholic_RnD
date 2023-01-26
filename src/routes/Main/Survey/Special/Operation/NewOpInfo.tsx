import { useEffect, useState } from "react";

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
}  

const NewOpInfo = (props: Props) => {
    const { disabled, register, watch, setValue, getValues } = props;

    const [postureEtc, setPostureEtc] = useState(0);

    const asa_class_labels = ["ASAI", "ASAII", "ASAIII", "ASAIV", "ASAV", "ASAVI"];
    const position_labels = ["Fowler", "Lateral", "Lithotomy", "Orthopnea", "Prone", "Recumbent", "Sims", "Supine"];

    const contents = [
        {
            label: "수술과",
            element: 
                <Form.MuiTextField
                    {...register("operation_information.operating_department")}
                    required={false}
                />,
        },
        {
            label: "수술날짜",
            element: 
                <Form.MuiTextField
                    type="date"
                    required={false}
                    disabled={disabled}
                    {...register("operation_information.operating_date")}
                />
        },
        {
            label: "수술시간",
            element:
                <MobileTimePicker
                    value={watch("operation_information.operating_time") || null}
                    onChange={(v) => setValue("operation_information.operating_time", v)}
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
                    defaultValue={getValues("operation_information.asa_class")}
                    {...register("operation_information.asa_class")}
                >
                    {asa_class_labels.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
                </Form.MuiTextField>
        },
        {
            label: "주수술명",
            element: 
                <Form.MuiTextField
                    {...register("operation_information.main_operation_name")}
                    required={false}
                />,
        },
        {
            label: "부수술명",
            element: 
                <Form.MuiTextField
                    {...register("operation_information.minor_operation_name")}
                    required={false}
                />,
        },
        {
            label: "과거력",
            element: 
                <Form.MuiTextField
                    {...register("operation_information.past_history")}
                    required={false}
                />,
        },
        {
            label: "알레르기",
            element: 
                <Form.MuiTextField
                    {...register("operation_information.allergy")}
                    required={false}
                />,
        },
        {
            label: "금식여부",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    defaultValue={getValues("operation_information.npo_status")}
                    {...register("operation_information.npo_status")}
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
                    defaultValue={getValues("operation_information.prophylactic_antibiotics")}
                    {...register("operation_information.prophylactic_antibiotics")}
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
                        defaultValue={
                            [...position_labels, undefined].includes(getValues("operation_information.position"))
                            ? getValues("operation_information.position")
                            : "etc"
                        }
                        {...register("operation_information.position")}
                        onChange={(e) => {
                            if (e.target.value === "etc") setPostureEtc(1);
                            else setPostureEtc(0);
                        }}
                    >
                        {position_labels.map((v) => 
                            <MenuItem value={v}>{v} position</MenuItem>
                        )}
                        <MenuItem value="etc">직접 입력</MenuItem>
                    </Form.MuiTextField>
                    {postureEtc
                    ?
                    <Form.MuiTextField
                        {...register("operation_information.position_etc")}
                        placeholder="직접 입력"
                        sx={{ marginLeft: "5px", width: "18%" }}
                    />
                    :
                    null
                    }
                    <FormControlLabel
                        control={<Checkbox defaultChecked={getValues("operation_information.preoperative_xray")} {...register("operation_information.preoperative_xray")} />}
                        label="수술 전 흉부 X-ray"
                        sx={{ marginLeft: "20px" }}
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked={getValues("operation_information.preoperative_ekg")} {...register("operation_information.preoperative_ekg")} />}
                        defaultValue={getValues("operation_information.preoperative_ekg")}
                        label="수술 전 심전도"
                        sx={{ marginLeft: "20px" }}
                    />
                </Box>
        },
    ];

    useEffect(() => {
        if (![...position_labels, undefined].includes(getValues("operation_information.position"))) {
            setValue("operation_information.position_etc", getValues("operation_information.position"));
            setPostureEtc(1);
        }
    }, []);

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