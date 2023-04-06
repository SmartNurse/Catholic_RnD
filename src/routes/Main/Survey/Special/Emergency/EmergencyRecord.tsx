import { useState } from 'react';

import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';

import { Grid, Box, MenuItem } from "@mui/material";
import { MobileTimePicker } from '@mui/x-date-pickers';
import { AccessTime } from '@mui/icons-material';

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';


interface Props extends IFormRegister {
    disabled?: boolean;
}  

interface IContents {
    [index: string]: string | null;
    accident_date: string; 
    accident_time: string | null,
    arrival_time: string | null,
    visitMethod: string,
    visitReason : string
}


const EmergencyRecord = (props: Props) => {
    const { disabled, register } = props;

    const [contents, setContents] = useState<IContents>({
        accident_date: "",
        accident_time: null,
        arrival_time: null,
        visitMethod: "",
        visitReason:"",
    });
    const [methodEtc, setMethodEtc] = useState(0);


    const timePickers = [
        { title: "발생시간", variable: "accident_time" },
        { title: "도착시간", variable: "arrival_time" },
    ];

    return (
        <>
            <SectionTitle title="응급간호기록"/>
            <RowContainer xs={12}>
                <RowContent title="발생날짜" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField
                        type="date"
                        required={false}
                        disabled={disabled}
                        sx={{width:'200px'}}
                        {...register("accident_date")}
                    />
                </RowContent>
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
                <RowContent title="내원수단" titleRatio={1} childrenRatio={2}>
                    <Box display="flex">
                        <Form.MuiTextField
                            select
                            required={false}
                            {...register("visitMethod")}
                            onChange={(e) => {
                                if (e.target.value === "etc") setMethodEtc(1);
                                else setMethodEtc(0);
                            }}
                        >
                            <MenuItem value="police">112</MenuItem>
                            <MenuItem value="ambulance">119</MenuItem>
                            <MenuItem value="walk">도보</MenuItem>
                            <MenuItem value="car">자동차</MenuItem>
                            <MenuItem value="etc">직접 입력</MenuItem>
                        </Form.MuiTextField>
                        {methodEtc
                        ?
                        <Form.MuiTextField
                            {...register("visitMethodEtc")}
                            placeholder="직접 입력"
                            sx={{ marginLeft: "5px" }}
                        />
                        :
                        null
                        }
                    </Box>
                </RowContent>
                <Grid item xs={12}>
                    <Form.MuiTextField
                        multiline
                        minRows={8}
                        disabled={disabled}
                        value={contents.visitReason}
                        placeholder={'내원 동기 및 현상태를 서술하여 주세요'}
                        onChange={(e) => setContents({...contents, visitReason: e.target.value})}
                    />
                </Grid>
            </RowContainer>
        </>
    );

}

export default EmergencyRecord;