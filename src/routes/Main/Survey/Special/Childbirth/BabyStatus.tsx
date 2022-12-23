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
                    defaultValue={getValues('childbirth.baby_status.gender')}
                    onChange={v => setValue('childbirth.baby_status.gender', v)}
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
                    {...register("childbirth.baby_status.weight")}
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
                        {...register("childbirth.baby_status.apgar.one_min")}
                    />
                    <Typography fontSize="14px">5분</Typography>
                    <Form.MuiTextField
                        placeholder="0~10점까지 입력가능"
                        sx={{ width: "30%" }}
                        {...register("childbirth.baby_status.apgar.five_min")}
                    />
                </Box> 
        },
        {
            label: "산소 흡입",
            element: 
                <Form.MuiRadioGroup
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[0, 1]}
                    defaultValue={getValues('childbirth.baby_status.breathe')}
                    onChange={v => setValue('childbirth.baby_status.breathe', v)}
                />
        },
        {
            label: "첫 소변",
            element: 
                <Form.MuiRadioGroup
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[0, 1]}
                    defaultValue={getValues('childbirth.baby_status.urine')}
                    onChange={v => setValue('childbirth.baby_status.urine', v)}
                />
        }, 
        {
            label: "태변 배출",
            element: 
                <Form.MuiRadioGroup
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[0, 1]}
                    defaultValue={getValues('childbirth.baby_status.placenta_discharge')}
                    onChange={v => setValue('childbirth.baby_status.placenta_discharge', v)}
                />
        },
        {
            label: "태변 착색",
            element: 
                <Form.MuiRadioGroup
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[0, 1]}
                    defaultValue={getValues('childbirth.baby_status.placenta_color')}
                    onChange={v => setValue('childbirth.baby_status.placenta_color', v)}
                />
        },
        {
            label: "Nuchal cord",
            element: 
                <>
                    <Form.MuiRadioGroup
                        i18nKey='CHILDBIRTH.YES_OR_NO'
                        values={[0, 1]}
                        defaultValue={getValues('childbirth.baby_status.nuchal_cord.value')}
                        onChange={v => setValue('childbirth.baby_status.nuchal_cord.value', v)}
                    />
                    <Form.MuiTextField
                        required={false}
                        fullWidth={false}
                        disabled={disabled}
                        placeholder="직접 입력"
                        sx={{ width: "50%", marginLeft: "36px" }}
                        {...register('childbirth.baby_status.nuchal_cord.input')}
                    />
                </>
        },
        {
            label: "소생술",
            element: 
                <>
                    <Form.MuiRadioGroup
                        i18nKey='CHILDBIRTH.YES_OR_NO'
                        values={[0, 1]}
                        defaultValue={getValues('childbirth.baby_status.resuscitation.value')}
                        onChange={v => setValue('childbirth.baby_status.resuscitation.value', v)}
                    />
                    <Form.MuiTextField
                        required={false}
                        fullWidth={false}
                        disabled={disabled}
                        placeholder="직접 입력"
                        sx={{ width: "50%", marginLeft: "36px" }}
                        {...register('childbirth.baby_status.nuchal_cord.input')}
                    />
                </>
        },
        {
            label: "외관상 기형 및 특이사항",
            element: 
                <Form.MuiTextField
                    {...register("childbirth.baby_status.special_note")}
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