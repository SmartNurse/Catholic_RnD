import { useEffect, useState } from "react";

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
    disabled?: boolean;
}  

const DialysisInfo = (props: Props) => {
    const { disabled, register, getValues, setValue, watch } = props;

    const [bloodVessel, setBloodVessel] = useState(-1);

    useEffect(() => {
        if (isNaN(Number(getValues("visiting_route")))) {
            setValue("visiting_route_etc", getValues("visiting_route"));
            setValue("visiting_route", "0");
        }
        if (isNaN(Number(getValues("vascular_access")))) {
        setValue("vascular_access_etc", getValues("vascular_access"));
        setValue("vascular_access", "0");
        }
    }, []);

    const contents = [
        {
            label: "투석일*",
            element: 
                <Form.MuiTextField
                    required
                    type="date"
                    disabled={disabled}
                    {...register('date')}
                    sx={{ marginRight: "10px" }}
                />,
        },
        {
            label: "투석시간*",
            element: 
                <MobileTimePicker
                    disabled={disabled}
                    value={watch("time") || null}
                    onChange={(v) => setValue("time", v)}
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
                    {...register("dialyzer")}
                    required={false}
                    disabled={disabled}
                />,
        },
        {
            label: "투석기계",
            element: 
                <Form.MuiTextField
                    {...register("dialysis_machine")}
                    required={false}
                    disabled={disabled}
                />,
        },
        {
            label: "투석실 내원경로",
            element:
                <Box display="flex"> 
                    <Form.MuiRadioGroup
                        disabled={disabled}
                        i18nKey='DIALYSIS.DIALYSIS_INFO.ROUTE'
                        values={[1, 2, 3, 0]}
                        defaultValue={getValues('visiting_route')}
                        onChange={v => {
                            setValue('visiting_route', v);
                            if (v !== 0) setValue("visiting_route_etc", "");
                        }}
                        width="80px"
                    />
                    <Form.MuiTextField
                        {...register("visiting_route_etc")}
                        placeholder="직접 입력"
                        fullWidth={false}
                        required={false}
                        disabled={disabled}
                    />
                </Box>
        },
        {
            label: "투석액",
            element: 
                <Form.MuiTextField
                    {...register("dialysate")}
                    required={false}
                    disabled={disabled}
                />,
        },
        {
            label: "혈관 종류",
            element: 
                <>
                    <Form.MuiRadioGroup
                        disabled={disabled}
                        i18nKey='DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL'
                        values={[1, 2, 3, 0]}
                        defaultValue={bloodVessel}
                        value={bloodVessel}
                        onChange={v => {
                            setValue('vascular_access', v);
                            setBloodVessel(v);
                            setValue("vascular_access_etc", "");
                        }}
                        width="80px"
                    />
                    <Form.MuiTextField
                        {...register("vascular_access_etc")}
                        placeholder="직접 입력"
                        fullWidth={false}
                        required={false}
                        disabled={disabled}
                    />
                </>
            ,
        },
        {
            label: "시작간호사",
            element: 
                <Form.MuiTextField
                    {...register("starting_nurse")}
                    required={false}
                    disabled={disabled}
                />,
        },
        {
            label: "",
            element: 
                <Box display="flex">
                    <Form.MuiRadioGroup
                        disabled={disabled}
                        i18nKey='DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL'
                        values={[4, 5, 6]}
                        defaultValue={bloodVessel}
                        value={bloodVessel}
                        onChange={v => {
                            setValue('vascular_access', v);
                            setBloodVessel(v);
                            if (v !== 0) setValue("vascular_access_etc", "");
                        }}
                        width="80px"
                    />
                </Box>
        },
        {
            label: "종료간호사",
            element: 
                <Form.MuiTextField
                    {...register("ending_nurse")}
                    required={false}
                    disabled={disabled}
                />,
        },
    ];
    return (
        <>
            <SectionTitle title="투석 정보"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent key={label} title={label} titleRatio={1} childrenRatio={5}>
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default DialysisInfo;