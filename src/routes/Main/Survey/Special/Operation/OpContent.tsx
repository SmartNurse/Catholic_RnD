import { useState, useEffect } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Grid, Box, MenuItem } from "@mui/material";

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
}  

const OpContent = (props: Props) => {
    const { disabled, register, watch, setValue, getValues } = props;

    const [methodEtc, setMethodEtc] = useState(0);

    const method_labels = ["Local", "General", "Spinal", "Epidural"];
    const timePickers = [
        { title: "환자도착시간", variable: "surgery_details.arrival_time" },
        { title: "마취시간", variable: "surgery_details.anesthesia_start_time" },
        { title: "수술시작시간", variable: "surgery_details.surgery_start_time" },
        { title: "수술종료시간", variable: "surgery_details.surgery_end_time" },
        { title: "마취종료시간", variable: "surgery_details.anesthesia_end_time" },
        { title: "환자퇴실시간", variable: "surgery_details.discharge_time" },
    ];

    useEffect(() => {
        if (![...method_labels, undefined].includes(getValues("surgery_details.anesthetic_method"))) {
            setValue("surgery_details.anesthetic_method_etc", getValues("surgery_details.anesthetic_method"));
            setMethodEtc(1);
        }
    }, []);

    return (
        <>
            <SectionTitle title="수술 내용"/>
            <RowContainer xs={12}>
                <Grid item xs={12}>
                    <Form.MuiTextField
                        multiline
                        minRows={15}
                        disabled={disabled}
                        required={false}
                        {...register("surgery_details.content")}
                    />
                </Grid>
                {timePickers.map(({title, variable}, _) => 
                    <RowContent key={variable} title={title} titleRatio={1} childrenRatio={2}>
                        <MobileTimePicker
                            value={watch(variable) || null}
                            onChange={(value) => setValue(variable, value)}
                            renderInput={params => (
                            <MuiTextField
                                {...params}
                                required={false}
                                placeholder="00:00 pm"
                                InputProps={{ endAdornment: <AccessTime /> }}
                            />
                            )}
                        />
                    </RowContent>
                )}
                <RowContent title="마취 방법" titleRatio={1} childrenRatio={2}>
                    <Box display="flex">
                        <Form.MuiTextField
                            select
                            required={false}
                            {...register("surgery_details.anesthetic_method")}
                            defaultValue={
                                [...method_labels, undefined].includes(getValues("surgery_details.anesthetic_method")) 
                                ? getValues("surgery_details.anesthetic_method")
                                : "etc"
                            }
                            onChange={(e) => {
                                if (e.target.value === "etc") setMethodEtc(1);
                                else setMethodEtc(0);
                            }}
                        >
                            {method_labels.map((v) => 
                                <MenuItem key={v} value={v}>{v} Anesthesia</MenuItem>
                            )}
                            <MenuItem value="etc">직접 입력</MenuItem>
                        </Form.MuiTextField>
                        {methodEtc
                        ?
                        <Form.MuiTextField
                            {...register("surgery_details.anesthetic_method_etc")}
                            placeholder="직접 입력"
                            sx={{ marginLeft: "5px" }}
                            required={false}
                        />
                        :
                        null
                        }
                    </Box>
                </RowContent>
                <RowContent title="마취 의사" titleRatio={1} childrenRatio={2}>
                    <MuiTextField
                        {...register("surgery_details.anesthesiologist")}
                        required={false}
                    />
                </RowContent>
            </RowContainer>
        </>
    );
}

export default OpContent;