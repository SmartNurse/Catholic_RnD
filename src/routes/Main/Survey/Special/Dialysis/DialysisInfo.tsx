import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Box } from "@mui/material";

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues, IFormWatch {
    dialysisTime: string | null;
    setDialysisTime: (dialysisTime: string | null) => void;
    disabled?: boolean;
}  

const DialysisInfo = (props: Props) => {
    const { dialysisTime, setDialysisTime, disabled, register, getValues, setValue, watch } = props;

    const [bloodVessel, setBloodVessel] = useState(-1);

    const contents = [
        {
            label: "투석일*",
            element: 
                <Form.MuiTextField
                    required
                    type="date"
                    disabled={disabled}
                    {...register('dialysis_info.date')}
                    sx={{ marginRight: "10px" }}
                />,
        },
        {
            label: "투석시간*",
            element: 
                <MobileTimePicker
                    value={dialysisTime}
                    onChange={setDialysisTime}
                    renderInput={params => (
                    <MuiTextField
                        {...params}
                        required={false}
                        placeholder="00:00 pm"
                        InputProps={{ endAdornment: <AccessTime /> }}
                    />
                    )}
                />,
        },
        {
            label: "투석기",
            element: 
                <Form.MuiTextField
                    {...register("dialysis.dialysis_info.catapult")}
                />,
        },
        {
            label: "투석기계",
            element: 
                <Form.MuiTextField
                    {...register("dialysis.dialysis_info.machine")}
                />,
        },
        {
            label: "투석실 내원경로",
            element:
                <Box display="flex"> 
                    <Form.MuiRadioGroup
                        i18nKey='DIALYSIS.DIALYSIS_INFO.ROUTE'
                        values={[1, 2, 3, 0]}
                        defaultValue={getValues('dialysis.dialysis_info.route')}
                        onChange={v => setValue('dialysis.dialysis_info.route', v)}
                        width="80px"
                    />
                    <Form.MuiTextField
                        {...register("anethesia.operation_info.method_etc")}
                        placeholder="직접 입력"
                        fullWidth={false}
                    />
                </Box>
        },
        {
            label: "투석액",
            element: 
                <Form.MuiTextField
                    {...register("dialysis.dialysis_info.amount")}
                />,
        },
        {
            label: "혈관 종류",
            element: 
                <Form.MuiRadioGroup
                    i18nKey='DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL'
                    values={[1, 2, 3, 4]}
                    defaultValue={bloodVessel}
                    value={bloodVessel}
                    onChange={v => {
                        setValue('dialysis.dialysis_info.blood_vessel', v);
                        setBloodVessel(v);
                    }}
                    width="80px"
                />,
        },
        {
            label: "시작간호사",
            element: 
                <Form.MuiTextField
                    {...register("dialysis.dialysis_info.start_nurse")}
                />,
        },
        {
            label: "",
            element: 
                <Box display="flex">
                    <Form.MuiRadioGroup
                        i18nKey='DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL'
                        values={[5, 6, 0]}
                        defaultValue={bloodVessel}
                        value={bloodVessel}
                        onChange={v => {
                            setValue('dialysis.dialysis_info.blood_vessel', v);
                            setBloodVessel(v);
                        }}
                        width="80px"
                    />
                    <Form.MuiTextField
                        {...register("anethesia.operation_info.method_etc")}
                        placeholder="직접 입력"
                        fullWidth={false}
                    />
                </Box>
        },
        {
            label: "종료간호사",
            element: 
                <Form.MuiTextField
                    {...register("dialysis.dialysis_info.end_nurse")}
                />,
        },
    ];
    return (
        <>
            <SectionTitle title="투석 정보"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent title={label} titleRatio={1} childrenRatio={5}>
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default DialysisInfo;