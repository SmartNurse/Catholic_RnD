import { useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import { Box, Typography, InputAdornment, FormHelperText, Stack } from "@mui/material";

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
}  

const BabyStatus = (props: Props) => {
    const { disabled, register, getValues, setValue, watch } = props;

    const contents = [
        {
            label: "성별",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.BABY_STATUS.GENDER'
                    values={[1, 2]}
                    defaultValue={getValues('newborn_condition.gender')}
                    onChange={v => setValue('newborn_condition.gender', v)}
                    width="50px"
                />
        },
        {
            label: "체중",
            element: 
                <Form.MuiTextField
                    placeholder="체중"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>
                    }}
                    required={false}
                    disabled={disabled}
                    {...register("newborn_condition.weight")}
                />,
        },
        {
            label: "산소 흡입",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[1, 2]}
                    defaultValue={getValues('newborn_condition.oxygen_intake')}
                    onChange={v => setValue('newborn_condition.oxygen_intake', v)}
                    width="50px"
                />
        },
        {
            label: "첫 소변",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[1, 2]}
                    defaultValue={getValues('newborn_condition.first_urine')}
                    onChange={v => setValue('newborn_condition.first_urine', v)}
                    width="50px"
                />
        }, 
        {
            label: "태변 배출",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[1, 2]}
                    defaultValue={getValues('newborn_condition.placenta_discharge')}
                    onChange={v => setValue('newborn_condition.placenta_discharge', v)}
                    width="50px"
                />
        },
        {
            label: "태변 착색",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[1, 2]}
                    defaultValue={getValues('newborn_condition.fetal_staining')}
                    onChange={v => setValue('newborn_condition.fetal_staining', v)}
                    width="50px"
                />
        },
        {
            label: "Nuchal cord",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[1, 2]}
                    defaultValue={getValues('newborn_condition.nuchal_cord')}
                    onChange={v => {
                        setValue('newborn_condition.nuchal_cord', v);
                        if (v == 1) setValue("newborn_condition.nuchal_cord_content", "");
                    }}
                    width="50px"
                />
        },
        {
            label: "소생술",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[1, 2]}
                    defaultValue={getValues('newborn_condition.resuscitation')}
                    onChange={v => {
                        setValue('newborn_condition.resuscitation', v);
                        if (v == 1) setValue("newborn_condition.resuscitation_content", "");
                    }}
                    width="50px"
                />
        },
        {
            label: "외관상 기형 및 특이사항",
            element: 
                <Form.MuiTextField
                required={false}
                disabled={disabled}
                    {...register("newborn_condition.specifications")}
                />,
        },
    ];
    return (
        <>
            <SectionTitle title="신생아 정보"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent
                            title={label}
                            titleRatio={label === "외관상 기형 및 특이사항" ? 1.5 : 1}
                            childrenRatio={label === "외관상 기형 및 특이사항" ? 10.5 : 2}
                        >
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default BabyStatus;