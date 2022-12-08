import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Grid } from "@mui/material";

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister {
    disabled?: boolean;
    blood: string;
}  

interface IBloodInfos {
    [index: string]: string | null;
    id: string;
    title: string;
    cc: string;
    arrivedTime: string | null;
    arrivedChecker: string;
    checker1: string;
    checker2: string;
    startTime: string | null;
    startStaff: string;
    endTime: string | null;
    endStaff: string;
}

const BloodInfo = (props: Props) => {
    const { blood, disabled, register } = props;

    const [bloodInfos, setBloodInfos] = useState<IBloodInfos>({
        id: "",
        title: "",
        cc: "",
        arrivedTime: "",
        arrivedChecker: "",
        checker1: "",
        checker2: "",
        startTime: "",
        startStaff: "",
        endTime: "",
        endStaff: "",
    });

    const rows = [
        { title: "혈액번호", variable: "id", type: "text" },
        { title: "혈액명", variable: "name", type: "text" },
        { title: "혈액형*", variable: "type", type: "label" },
        { title: "용량(mL)*", variable: "cc", type: "text" },
        { title: "도착확인시간", variable: "arrivedTime", type: "time" },
        { title: "수혈도착확인자", variable: "arrivedChecker", type: "text" },
        { title: "수혈확인자1", variable: "checker1", type: "text" },
        { title: "수혈확인자2", variable: "checker2", type: "text" },
        { title: "수혈시작일시*", variable: "startTime", type: "time" },
        { title: "수혈시작의료인", variable: "startStaff", type: "text" },
        { title: "수혈종료일시*", variable: "endTime", type: "time" },
        { title: "수혈종료의료인", variable: "endStaff", type: "text" },
    ]

    return (
        <>
            <RowContainer xs={12}>
                {rows.map(({title, variable, type }) => 
                <RowContent key={variable} title={title} titleRatio={1} childrenRatio={2}>
                    {type === "text"
                    &&
                    <MuiTextField
                        value={bloodInfos[variable]}
                        onChange={(e) => {
                            const newBloodInfos = {...bloodInfos};
                            newBloodInfos[variable] = e.target.value;
                            setBloodInfos({...newBloodInfos});
                        }}
                        required={false}
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
                        value={bloodInfos[variable]}
                        onChange={(value) => {
                            const newBloodInfos = {...bloodInfos};
                            newBloodInfos[variable] = value;
                            setBloodInfos({...newBloodInfos});
                        }}
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