import { useState } from "react";
import MuiDialog from "components/MuiDialog";
import { AccessTime, Delete } from "@mui/icons-material";
import { Typography, Box, IconButton, Button } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { SurveyDialogProps, TNRSDefaultValues } from "../../type";

import NRS_face1 from "assets/NRS_face1.svg";
import NRS_face2 from "assets/NRS_face2.svg";
import NRS_face3 from "assets/NRS_face3.svg";
import NRS_face4 from "assets/NRS_face4.svg";
import NRS_face5 from "assets/NRS_face5.svg";
import NRS_face6 from "assets/NRS_face6.svg";

import { StyledMiniBox, StyledSlider } from "routes/Main/style";
import MuiTable from "components/MuiTable";
import MuiTextField from 'components/Form/MuiTextField';
import { formatStringToDate } from 'utils/formatting';

import { useForm } from "react-hook-form";
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { IPainScore } from "apis/survey/type";


const marks = [
    {
        value: 0,
        label: 0,
    },
    {
        value: 1,
        label: 1,
    },
    {
        value: 2,
        label: 2,
    },
    {
        value: 3,
        label: 3,
    },
    {
        value: 4,
        label: 4,
    },
    {
        value: 5,
        label: 5,
    },
    {
        value: 6,
        label: 6,
    },
    {
        value: 7,
        label: 7,
    },
    {
        value: 8,
        label: 8,
    },
    {
        value: 9,
        label: 9,
    },
    {
        value: 10,
        label: 10,
    },
];

const NRS = (props: SurveyDialogProps<TNRSDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        user_id,
        patientInfo,
        onClose
    } = props;

    const [checkTime, setCheckTime] = useState(null);
    const [painScore, setPainScore] = useState('');

    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();
    const { handleSubmit, watch, getValues, setValue } = useForm({
        defaultValues,
    });
    
    const painScoreList: IPainScore[] = watch("pain_score");

    const columns = [
        { fieldId: "checkTime", label: "체크시간", sx: { width: 200 }},
        { fieldId: "painScore", label: "PAIN SCORE" }
    ];

    const onAddRow = () => {
        const request = { checkTime, painScore };
        if (Object.values(request).filter(v => !v).length > 0) {
          return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
        }
    
        onSuccess('Pain Score 추가되었습니다.');
        //setValue('pain_score', [...painScoreList, request]);
        setCheckTime(null);
        setPainScore('');
    };

    const inputRow = {
        id: 'add-pain-score',
        checkTime: (
            <MobileTimePicker
            value={checkTime}
            onChange={setCheckTime}
            renderInput={params => (
                <MuiTextField
                    {...params}
                    required={false}
                    placeholder="00:00 pm"
                    InputProps={{ endAdornment: <AccessTime /> }}
                />
            )}
            />
        ),
        painScore: (
            <MuiTextField
                value={painScore}
                required={false}
                onChange={({ target: { value } }) => setPainScore(value)}
            />
        ),
        action: (
            <Button variant="contained" size="small" onClick={onAddRow}>
            추가
            </Button>
        ),
    };

    /*
    const onDeleteRow = (index: number) => {
        setValue(
            'pain_score',
            painScoreList.filter((_, i) => i !== index)
        );
    };

    const displayRows = painScoreList?.map((item, i) => ({
        ...item,
        id: i,
        checkTime: formatStringToDate(item.checkTime, 'hh:mm a'),
        action: (
            <IconButton
            size="small"
            // onClick={() => onDeleteRow(i)}
            sx={{ display: disabled ? 'none' : 'block' }}
            >
                <Delete />
            </IconButton>
        ),
    }));
    
    const tableRow = disabled ? displayRows : [inputRow, ...displayRows];
    */

    return (
        <MuiDialog.SurveyForm
            title={title}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={undefined}
            update_at={defaultValues?.update_at}
        >
            <Typography fontSize={16} fontWeight="bold" align="center" sx={{ marginTop: "12px", marginBottom: "40px" }}>NRS (테스트 중)<br/> PAIN SCORE 0-10 NUMERICAL RATING</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: "800px", display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <img src={NRS_face1} />
                    <img src={NRS_face2} />
                    <img src={NRS_face3} />
                    <img src={NRS_face4} />
                    <img src={NRS_face5} />
                    <img src={NRS_face6} />
                </Box>
                <StyledSlider min={0} max={10} marks={marks} sx={{ width: "800px"}}/>
                <Box sx={{ width: "800px", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <StyledMiniBox>No <br/> Pain</StyledMiniBox>
                    <StyledMiniBox>Mild <br/> Pain</StyledMiniBox>
                    <StyledMiniBox>Moderate <br/> Pain</StyledMiniBox>
                    <StyledMiniBox>Severe <br/> Pain</StyledMiniBox>
                    <StyledMiniBox>Extreme <br/> Pain</StyledMiniBox>
                </Box>
                </Box>
        </MuiDialog.SurveyForm>
    );
}

export default NRS;