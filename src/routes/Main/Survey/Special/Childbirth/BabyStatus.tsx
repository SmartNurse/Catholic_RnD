import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import { Box, Typography, InputAdornment } from "@mui/material";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
}  

const BabyStatus = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;


    const contents = [
        {
            label: "성별",
            element: 
                <Form.MuiRadioGroup
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
                    {...register("newborn_condition.weight")}
                />,
        },
        {
            label: "Apgar 점수",
            element:
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Typography fontSize="14px">1분</Typography>
                    <Form.MuiTextField
                        placeholder="0~10점까지 입력가능"
                        sx={{ width: "30%" }}
                        required={false}
                        {...register("newborn_condition.apgar_score1m")}
                    />
                    <Typography fontSize="14px">5분</Typography>
                    <Form.MuiTextField
                        placeholder="0~10점까지 입력가능"
                        sx={{ width: "30%" }}
                        required={false}
                        {...register("newborn_condition.apgar_score5m")}
                    />
                </Box> 
        },
        {
            label: "산소 흡입",
            element: 
                <Form.MuiRadioGroup
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
                <>
                    <Form.MuiRadioGroup
                        i18nKey='CHILDBIRTH.YES_OR_NO'
                        values={[1, 2]}
                        defaultValue={getValues('newborn_condition.nuchal_cord')}
                        onChange={v => {
                            setValue('newborn_condition.nuchal_cord', v);
                            if (v == 1) setValue("newborn_condition.nuchal_cord_content", "");
                        }}
                        width="50px"
                    />
                    <Form.MuiTextField
                        required={false}
                        fullWidth={false}
                        disabled={disabled}
                        placeholder="직접 입력"
                        sx={{ width: "50%", marginLeft: "36px" }}
                        {...register('newborn_condition.nuchal_cord_content')}
                    />
                </>
        },
        {
            label: "소생술",
            element: 
                <>
                    <Form.MuiRadioGroup
                        i18nKey='CHILDBIRTH.YES_OR_NO'
                        values={[1, 2]}
                        defaultValue={getValues('newborn_condition.resuscitation')}
                        onChange={v => {
                            setValue('newborn_condition.resuscitation', v);
                            if (v == 1) setValue("newborn_condition.resuscitation_content", "");
                        }}
                        width="50px"
                    />
                    <Form.MuiTextField
                        required={false}
                        fullWidth={false}
                        disabled={disabled}
                        placeholder="직접 입력"
                        sx={{ width: "50%", marginLeft: "36px" }}
                        {...register('newborn_condition.resuscitation_content')}
                    />
                </>
        },
        {
            label: "외관상 기형 및 특이사항",
            element: 
                <Form.MuiTextField
                required={false}
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
                            titleRatio={1}
                            childrenRatio={
                                label === "Apgar 점수" || label === "Nuchal cord" || label === "소생술" ? 5
                                : (label === "외관상 기형 및 특이사항" ? 11 : 2)}
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