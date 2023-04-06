import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import { Box, MenuItem } from "@mui/material";

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
    time: null | string;
    setTime: (time: null | string) => void;
}  

const NewInfo = (props: Props) => {
    const { disabled, register, watch, time, setTime } = props;

    const [damageEtc, setDamageEtc] = useState(0);
    const [intentionalEtc, setIntentionalEtc] = useState(0);
    const [diseaseEtc, setDiseaseEtc] = useState(0);
    const [postureEtc, setintentionalEtc] = useState(0);


    const [methodEtc, setMethodEtc] = useState(0);


    const contents = [
        {
            label: "주증상",
            element: 
                <Form.MuiTextField
                    {...register("symptom")}
                />,
        },
        {
            label: "기타 증상",
            element: 
                <Form.MuiTextField
                {...register("etc_symptom")}
            />,
        },
        {
            label: "손상기전",
            element: 
            <Box display="flex">
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("damage")}
                    onChange={(e) => {
                        if (e.target.value === "etc") setDamageEtc(1);
                        else setDamageEtc(0);
                    }}
                >
                    <MenuItem value="trafficAccident">교통사고</MenuItem>
                    <MenuItem value="fall">추락</MenuItem>
                    <MenuItem value="slide">미끄러짐</MenuItem>
                    <MenuItem value="bluntTrauma">둔상</MenuItem>
                    <MenuItem value="penetration">관통</MenuItem>
                    <MenuItem value="machine">기계</MenuItem>
                    <MenuItem value="burn">화상</MenuItem>
                    <MenuItem value="fallIntoWater">물에 빠짐</MenuItem>
                    <MenuItem value="poisoning">중독</MenuItem>
                    <MenuItem value="etc_damage">직접 입력</MenuItem>
                </Form.MuiTextField>
                {damageEtc
                ?
                <Form.MuiTextField
                    {...register("etc_damage")}
                    placeholder="직접 입력"
                    sx={{ marginLeft: "5px"}}
                />
                :
                null
                }
            </Box>
        },
        {
            label: "의도성",
            element: 
            <Box display="flex">
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("intentional")}
                    onChange={(e) => {
                        if (e.target.value === "etc") setIntentionalEtc(1);
                        else setIntentionalEtc(0);
                    }}
                >
                    <MenuItem value="unintentionalAccident">비의도적사고</MenuItem>
                    <MenuItem value="selfInjury_suicide">자해 / 자살</MenuItem>
                    <MenuItem value="violence">폭력</MenuItem>
                    <MenuItem value="murder">타살</MenuItem>
                    <MenuItem value="unknown">미상</MenuItem>
                    <MenuItem value="intentionalEtc">직접 입력</MenuItem>
                </Form.MuiTextField>
                {intentionalEtc
                ?
                <Form.MuiTextField
                    {...register("intentionalEtc")}
                    placeholder="직접 입력"
                    sx={{ marginLeft: "5px"}}
                />
                :
                null
                }
            </Box>
        },
        {
            label: "질병여부",
            element: 
                <Box display="flex">
                    <Form.MuiTextField
                        select
                        required={false}
                        {...register("disease")}
                        onChange={(e) => {
                            if (e.target.value === "etc") setDiseaseEtc(1);
                            else setDiseaseEtc(0);
                        }}
                    >
                        <MenuItem value="disease">질병</MenuItem>
                        <MenuItem value="diseaseOther">질병 외</MenuItem>
                        <MenuItem value="diseaseEtcVisit">진료외방문</MenuItem>
                        <MenuItem value="penetration">미상</MenuItem>
                        <MenuItem value="etc">직접 입력</MenuItem>
                    </Form.MuiTextField>
                    {diseaseEtc
                    ?
                    <Form.MuiTextField
                        {...register("diseaseEtc")}
                        placeholder="직접 입력"
                        sx={{ marginLeft: "5px"}}
                    />
                    :
                    null
                }
            </Box>
        },
        {
            label: "과거력",
            element: 
                <Form.MuiTextField
                    {...register("history")}
                />,
        },
        {
            label: "알레르기",
            element: 
                <Form.MuiTextField
                    {...register("allergy")}
                />,
        },
        {
            label: "투약상태",
            element: 
                <Form.MuiTextField
                {...register("medicine")}
            />,
        },
        {
            label: "의식수준",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("antibiotics")}
                >
                    <MenuItem value="Alert">Alert</MenuItem>
                    <MenuItem value="Drowsy">Drowsy</MenuItem>
                    <MenuItem value="Stupor">Stupor</MenuItem>
                    <MenuItem value="Semicoma">Semicoma</MenuItem>
                    <MenuItem value="Coma">Coma</MenuItem>
                </Form.MuiTextField>
        },

        {
            label: "GCS",
            element: 
                <Form.MuiTextField
                    {...register("GCS")}
                />,
        },

        {
            label: "MOTOR",
            element: 
                <Form.MuiTextField
                    {...register("MOTOR")}
                />,
        },

        {
            label: "PUPIL",
            element: 
                <Form.MuiTextField
                    {...register("PUPIL")}
                />,
        },

        {
            label: "NRS",
            element: 
                <Form.MuiTextField
                    {...register("NRS")}
                />,
        },

        {
            label: "PQRST",
            element: 
                <Form.MuiTextField
                    {...register("PQRST")}
                />,
        },

        {
            label: "KTAS",
            element: 
                <Form.MuiTextField
                    select
                    required={false}
                    {...register("KTAS")}
                >
                    <MenuItem value="one">1단계</MenuItem>
                    <MenuItem value="two">2단계</MenuItem>
                    <MenuItem value="three">3단계</MenuItem>
                    <MenuItem value="four">4단계</MenuItem>
                    <MenuItem value="five">5단계</MenuItem>
                </Form.MuiTextField>
        },

        {
            label: "예상되는 진단명",
            element: 
                <Form.MuiTextField
                    {...register("Diagnostic")}
                />,
        },
    ];

    return (
        <>
            <SectionTitle title="환자 정보"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent
                            title={label}
                            titleRatio={1}
                            childrenRatio={label === "수술자세" ? 5 : 2}
                        >
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default NewInfo;