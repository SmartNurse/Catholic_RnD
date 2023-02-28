import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import { Stack } from "@mui/material";

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
}  

const BasicInformation = (props: Props) => {
    const { disabled, register, watch, setValue, getValues } = props;

    const contents = [
        {
            label: "직업",
            element: 
                <Form.MuiTextField
                    {...register("basic_information.occupation")}
                    required={false}
                    disabled={disabled}
                    placeholder="직접입력"
                />
        },
        {
            label: "보험유형",
            element: 
                <Form.MuiRadioGroup
                    i18nKey="HOME_CARE.INSURANCE_TYPE"
                    values={[1, 2, 3]}
                    disabled={disabled}
                    defaultValue={getValues("basic_information.insurance_type")}
                    onChange={v => setValue("basic_information.insurance_type", v)}
                />
        },
        {
            label: "주거형태",
            element:
                <Stack direction="row" spacing={1}>
                    <Form.MuiRadioGroup
                        i18nKey="HOME_CARE.RESIDENCE"
                        values={[1, 2, 3]}
                        disabled={disabled}
                        defaultValue={getValues("basic_information.residence")}
                        onChange={v => setValue("basic_information.residence", v)}
                        width="auto"
                    />
                    <Form.MuiTextField
                        {...register("basic_information.residence_etc")}
                        required={false}
                        disabled={disabled}
                        placeholder="기타"
                    />
                </Stack>
        },
        {
            label: "종교",
            element: 
                <Form.MuiTextField
                    {...register("basic_information.religion")}
                    required={false}
                    disabled={disabled}
                    placeholder="직접입력"
                />,
        },
        {
            label: "간호제공자",
            element: 
                <Form.MuiTextField
                    {...register("basic_information.nursing_provider")}
                    required={false}
                    disabled={disabled}
                    placeholder="직접입력"
                />,
        },
        {
            label: "위생상태",
            element: 
                <Stack direction="row" spacing={1}>
                    <Form.MuiRadioGroup
                        i18nKey="HOME_CARE.SANITARY"
                        values={[1, 2]}
                        disabled={disabled}
                        defaultValue={getValues("basic_information.sanitary")}
                        onChange={v => setValue("basic_information.sanitary", v)}
                        width="auto"
                    />
                    <Form.MuiTextField
                        {...register("basic_information.sanitary_notes")}
                        required={false}
                        disabled={disabled}
                        placeholder="직접입력"
                    />
                </Stack>
        },
        {
            label: "결혼상태",
            element: 
                <Form.MuiTextField
                    {...register("basic_information.marital_status")}
                    required={false}
                    disabled={disabled}
                    placeholder="직접입력"
                />,
        },
        {
            label: "과거력",
            element: 
                <Form.MuiTextField
                    {...register("basic_information.past_history")}
                    required={false}
                    disabled={disabled}
                    placeholder="직접입력"
                />,
        },
        {
            label: "안전상태",
            element: 
                <Stack direction="row" spacing={1}>
                    <Form.MuiRadioGroup
                        i18nKey="HOME_CARE.SAFETY"
                        values={[1, 2]}
                        disabled={disabled}
                        defaultValue={getValues("basic_information.safety")}
                        onChange={v => setValue("basic_information.safety", v)}
                        width="auto"
                    />
                    <Form.MuiTextField
                        {...register("basic_information.safety_notes")}
                        required={false}
                        disabled={disabled}
                        placeholder="직접입력"
                    />
                </Stack>
        },
    ];

    return (
        <>
            <SectionTitle title="기본 정보"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent
                            title={label}
                            titleRatio={1}
                            childrenRatio={3}
                        >
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default BasicInformation;