import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Grid, Box, MenuItem } from "@mui/material";

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister {
    disabled?: boolean;
}  

interface IContents {
    [index: string]: string | null;
    desc: string; 
    arrived: string | null,
    anesthesia_start: string | null,
    op_start: string | null,
    op_end: string | null,
    anesthesia_end: string | null,
    left: string | null,
    method: string,
    doctor: string,
}

const OpContent = (props: Props) => {
    const { disabled, register } = props;

    const [contents, setContents] = useState<IContents>({
        desc: "",
        arrived: null,
        anesthesia_start: null,
        op_start: null,
        op_end: null,
        anesthesia_end: null,
        left: null,
        method: "",
        doctor: "",
    });
    const [methodEtc, setMethodEtc] = useState(0);

    const timePickers = [
        { title: "환자도착시간", variable: "arrived" },
        { title: "마취시간", variable: "anesthesia_start" },
        { title: "수술시작시간", variable: "op_start" },
        { title: "수술종료시간", variable: "op_end" },
        { title: "마취종료시간", variable: "anesthesia_end" },
        { title: "환자퇴실시간", variable: "left" },
    ];

    return (
        <>
            <SectionTitle title="수술 내용"/>
            <RowContainer xs={12}>
                <Grid item xs={12}>
                    <Form.MuiTextField
                        multiline
                        minRows={15}
                        disabled={disabled}
                        value={contents.desc}
                        onChange={(e) => setContents({...contents, desc: e.target.value})}
                    />
                </Grid>
                {timePickers.map(({title, variable}, _) => 
                    <RowContent key={variable} title={title} titleRatio={1} childrenRatio={2}>
                        <MobileTimePicker
                            value={contents[variable]}
                            onChange={(value) => {
                                const newContents = {...contents};
                                newContents[variable] = value;
                                setContents({...newContents});
                            }}
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
                            {...register("anethesia.operation_info.method")}
                            onChange={(e) => {
                                if (e.target.value === "etc") setMethodEtc(1);
                                else setMethodEtc(0);
                            }}
                        >
                            <MenuItem value="local">Local Anesthesia</MenuItem>
                            <MenuItem value="general">General Anesthesia</MenuItem>
                            <MenuItem value="spinal">Spinal Anesthesia</MenuItem>
                            <MenuItem value="epidural">Epidural Anesthesia</MenuItem>
                            <MenuItem value="etc">직접 입력</MenuItem>
                        </Form.MuiTextField>
                        {methodEtc
                        ?
                        <Form.MuiTextField
                            {...register("anethesia.operation_info.method_etc")}
                            placeholder="직접 입력"
                            sx={{ marginLeft: "5px" }}
                        />
                        :
                        null
                        }
                    </Box>
                </RowContent>
                <RowContent title="마취 의사" titleRatio={1} childrenRatio={2}>
                    <MuiTextField
                        value={contents["doctor"]}
                        onChange={(e) => {
                            const newContents = {...contents};
                            newContents["doctor"] = e.target.value;
                            setContents({...newContents});
                        }}
                        required={false}
                    />
                </RowContent>
            </RowContainer>
        </>
    );
}

export default OpContent;