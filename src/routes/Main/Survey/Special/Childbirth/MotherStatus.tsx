import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import { MenuItem } from "@mui/material";

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
} 

const MotherStatus = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;

    const incisions = ["RML", "Median", "LML"];
    const lacerations = ["1도", "2도", "3도", "4도"];
    const contractions = ["약함", "좋음", "매우 좋음"];

    const contents = [
        {
            label: "회음 절개",
            element: 
                <>
                    <Form.MuiRadioGroup
                        i18nKey='CHILDBIRTH.YES_OR_NO'
                        values={[0, 1]}
                        defaultValue={getValues('childbirth.mother_status.incision.value')}
                        onChange={v => setValue('childbirth.mother_status.incision.value', v)}
                    />
                    <MuiTextField
                        select
                        required={false}
                        sx={{ width: "50%", marginLeft: "18px" }}
                        {...register('childbirth.mother_status.incision.select')}
                    >
                        {incisions.map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </MuiTextField>

                </>
        },
        {
            label: "회음 열상",
            element: 
                <>
                    <Form.MuiRadioGroup
                        i18nKey='CHILDBIRTH.YES_OR_NO'
                        values={[0, 1]}
                        defaultValue={getValues('childbirth.mother_status.laceration.value')}
                        onChange={v => setValue('childbirth.mother_status.laceration.value', v)}
                    />
                    <MuiTextField
                        select
                        required={false}
                        sx={{ width: "50%", marginLeft: "18px" }}
                        {...register('childbirth.mother_status.laceration.select')}
                    >
                        {lacerations.map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </MuiTextField>
                </>
        },
        {
            label: "자궁 수축",
            element: 
                <MuiTextField
                    select
                    required={false}
                    sx={{ width: "50%" }}
                    {...register('childbirth.mother_status.contraction')}
                >
                    {contractions.map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                </MuiTextField>
        },
    ];
    return (
        <>
            <SectionTitle title="산모 상태"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent title={label} titleRatio={1} childrenRatio={3}>
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default MotherStatus;