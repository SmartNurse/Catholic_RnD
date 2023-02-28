import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { MenuItem } from "@mui/material";

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
} 

const MotherStatus = (props: Props) => {
    const { disabled, register, getValues, setValue, watch } = props;

    const incisions = ["RML", "Median", "LML"];
    const lacerations = ["1도", "2도", "3도", "4도"];
    const contractions = ["약함", "좋음", "매우 좋음"];

    const contents = [
        {
            label: "회음 절개",
            element: 
                <>
                    <Form.MuiRadioGroup
                        disabled={disabled}
                        i18nKey='CHILDBIRTH.YES_OR_NO'
                        values={[1, 2]}
                        defaultValue={watch("maternal_condition.episiotomy")}
                        value={watch("maternal_condition.episiotomy")}
                        onChange={v => {
                            setValue('maternal_condition.episiotomy', v);
                            if (v == 1) setValue("maternal_condition.episiotomy_content", "");
                        }}
                        width="50px"
                    />
                    <MuiTextField
                        select
                        required={false}
                        disabled={disabled}
                        sx={{ width: "50%", marginLeft: "18px" }}
                        defaultValue={getValues("maternal_condition.episiotomy_content")}
                        {...register('maternal_condition.episiotomy_content', {
                            onChange: (v) => {
                                if (v) setValue("maternal_condition.episiotomy", 2);
                            }
                        })}
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
                        disabled={disabled}
                        i18nKey='CHILDBIRTH.YES_OR_NO'
                        values={[1, 2]}
                        defaultValue={watch('maternal_condition.perineal_laceration')}
                        value={watch("maternal_condition.perineal_laceration")}
                        onChange={v => {
                            setValue('maternal_condition.perineal_laceration', v);
                            if (v == 1) setValue("maternal_condition.perineal_laceration_content", "");
                        }}
                        width="50px"
                    />
                    <MuiTextField
                        select
                        required={false}
                        disabled={disabled}
                        sx={{ width: "50%", marginLeft: "18px" }}
                        defaultValue={getValues('maternal_condition.perineal_laceration_content')}
                        {...register('maternal_condition.perineal_laceration_content', {
                            onChange: (v) => {
                                if (v) setValue("maternal_condition.perineal_laceration", 2);
                            }
                        })}
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
                    disabled={disabled}
                    sx={{ width: "50%" }}
                    defaultValue={getValues('maternal_condition.uterus_contraction')}
                    {...register('maternal_condition.uterus_contraction')}
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