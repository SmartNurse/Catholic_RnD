import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Grid } from "@mui/material";

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
    dialysisTime: string | null;
    setDialysisTime: (dialysisTime: string | null) => void;
    disabled?: boolean;
}  

const DialysisInfo = (props: Props) => {
    const { dialysisTime, setDialysisTime, disabled, register, getValues, setValue } = props;


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
            label: "투석실 내원경로",
            element: 
                <Form.MuiRadioGroup
                    i18nKey='DIALYSIS.DIALYSIS_INFO.ROUTE'
                    values={[1, 2, 3]}
                    defaultValue={getValues('dialysis.dialysis_info.route')}
                    onChange={v => setValue('dialysis.dialysis_info.route', v)}
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
            label: "투석기",
            element: 
                <Form.MuiTextField
                    {...register("dialysis.dialysis_info.catapult")}
                />,
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
                    values={[1, 2, 3, 4, 5, 6]}
                    defaultValue={getValues('dialysis.dialysis_info.blood_vessel')}
                    onChange={v => setValue('dialysis.dialysis_info.blood_vessel', v)}
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
                        <RowContent title={label} titleRatio={1} childrenRatio={2}>
                            {element}
                        </RowContent>
                        <RowContent title="" titleRatio={1} childrenRatio={2} />
                        {label === "혈관 종류" && <RowContent title="" titleRatio={1} childrenRatio={5} />}
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default DialysisInfo;