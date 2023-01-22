import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Grid } from "@mui/material";

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
    blood: string;
}  

const BloodInfo = (props: Props) => {
    const { blood, disabled, register, watch, setValue } = props;

    const rows = [
        { title: "혈액번호", variable: "blood_number", type: "text" },
        { title: "혈액명", variable: "blood_name", type: "text" },
        { title: "혈액형*", variable: "type", type: "label" },
        { title: "용량(mL)*", variable: "volume", type: "text" },
        { title: "도착확인시간", variable: "arrival_time", type: "time" },
        { title: "수혈도착확인자", variable: "blood_transfusion_arrival", type: "text" },
        { title: "수혈확인자1", variable: "transfusion_check1", type: "text" },
        { title: "수혈확인자2", variable: "transfusion_check2", type: "text" },
        { title: "수혈시작일시*", variable: "transfusion_start_time", type: "time" },
        { title: "수혈시작의료인", variable: "practitioner_start", type: "text" },
        { title: "수혈종료일시*", variable: "transfusion_end_time", type: "time" },
        { title: "수혈종료의료인", variable: "practitioner_end", type: "text" },
    ]

    return (
        <>
            <RowContainer xs={12} sx={{ marginTop: "-32px" }}>
                {rows.map(({title, variable, type }) => 
                <RowContent key={variable} title={title} titleRatio={1} childrenRatio={2}>
                    {type === "text"
                    &&
                    <MuiTextField
                        value={watch(`${variable}`)}
                        onChange={(e) => setValue(variable, e.target.value)}
                        required={variable === "volume" || variable === "transfusion_start_time" || variable === "transfusion_end_time" ? true : false}
                    />
                    }
                    {type === "label"
                    &&
                    <Form.MuiTextField
                        value={blood}
                        InputProps={{ readOnly: true }}
                    />
                    }
                    {type === "time"
                    &&
                    <MobileTimePicker
                        value={watch(`${variable}`)}
                        onChange={(value) => setValue(variable, value)}
                        renderInput={params => (
                        <MuiTextField
                            {...params}
                            required={false}
                            placeholder="00:00 pm"
                            InputProps={{ endAdornment: <AccessTime /> }}
                            error={false}
                        />
                        )}
                    />
                    }
                </RowContent>
                )}
            </RowContainer>
        </>
    );
}

export default BloodInfo;