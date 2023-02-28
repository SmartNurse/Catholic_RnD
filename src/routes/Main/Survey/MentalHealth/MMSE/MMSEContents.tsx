import { useState } from "react";
import { Box, Typography, Table, TableBody, TableHead, TableRow, InputAdornment, useTheme } from "@mui/material";
import { StyledTableCellWithoutLeft, StyledTableCellWithoutLeftRight } from "routes/Main/style";
import Form from "components/Form";

import useTableForm from "../../hooks/useTableForm";
import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';

import { ReactComponent as MMSE9pic } from "assets/MMSE_9_pic.svg";

const contentLabel = [
    {
        id: 1,
        ko: "지남력",
        desc: [
            "1. 오늘은 (   )년 (   )월 (   )일 (   )요일 (   )계절입니다. [무학시 가산점 1점]",
            "2. 당신의 주소는 (   )시 (   )구 (   )동 (   )번지 [(   )아파트 (   )동 (   )호] 여기는 어떤 곳입니까?[예) 학교, 시장, 병원, 가정집]",
            "3. 여기는 무엇을 하는 곳입니까? [예) 마당, 안방, 화장실, 진찰실 등]"
        ],
        scores: [5, 4, 1],
        ids: [0, 1, 2],
    },
    {
        id: 2,
        ko: "기억등록",
        desc: [
            "4. 물건 이름 세 가지 [예) 나무, 자동차, 모자]",
        ],
        scores: [3],
        ids: [3],
    },
    {
        id: 3,
        ko: "주의집중/계산",
        desc: [
            "5.100 - 7 = (   ) - 7 = (   ) - 7 = (   ) - 7 = (   ) - 7 = (   ) - 7 = (   ) [만약 할 수 없거나 잘못하면 ‘삼천리강산' 거꾸로 말하기로 대체]"
        ],
        scores: [5],
        ids: [4],
    },
    {
        id: 4,
        ko: "언어기능",
        desc: [
            "6. 이것을 무엇이라고 합니까? [예) 연필, 시계] [무학시 가산점 1점]",
            "7. 오른손으로 종이를 접어서 반으로 접고 무릎 위에 놓기 (3단계 명령)",
            "8. '간장 공장 공장장' 따라하기",
            "9. 5각형 2개를 겹쳐 그리기",
        ],
        scores: [2, 1, 1, 3],
        ids: [5, 6, 7, 8],
    },
    {
        id: 5, 
        ko: "기억회상",
        desc: [
            "10. 위의 물건 3가지 회상하기",
        ],
        scores: [1],
        ids: [9],
    },
    {
        id: 6,
        ko: "이해/판단",
        desc: [
            "11. 옷은 왜 빨아서 입습니까? 라고 질문하기",
            "12. 길에서 남의 주민등록증을 주웠을 때 어떻게 하면 쉽게 주인에게 되돌려 줄 수 있습니까? 라고 질문하기",
        ],
        scores: [1, 1],
        ids: [10, 11],
    }
];
const scoreLabel = [
    {score: "24점 이상", label: "확정적 정상"},
    {score: "20 - 23점", label: "치매 의심"},
    {score: "19점 이하", label: "확정적 치매"},
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
    disabled?: boolean;
}

const MMSEContents = (props: Props) => {
    const { palette } = useTheme();
    const { disabled, setValue, getValues, register, watch } = props;
    const { sumValues } = useTableForm(props);

    const [sumValue, setSumValue] = useState(0);
    
    const watchSumValues = () => {
        const values = Array(12).fill(0).map((_, id) => watch(`score[${id}]`) ? Number(watch(`score[${id}]`)) : 0);
        const sum = sumValues(values);
        setValue("sum", sum);
        return sum;
      };

    return (
        <Box sx={{ width: "max-content", margin: "20px auto" }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCellWithoutLeftRight align="center" sx={{ padding: "16px" }}>항목</StyledTableCellWithoutLeftRight>
                        <StyledTableCellWithoutLeftRight align="center">문항</StyledTableCellWithoutLeftRight>
                        <StyledTableCellWithoutLeftRight align="center" sx={{ padding: "16px" }}>점수</StyledTableCellWithoutLeftRight>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contentLabel.map((content: {id: number, ko: string, desc: string[], scores: number[], ids: number[]}, _) => (
                        <TableRow>
                            <StyledTableCellWithoutLeft align="center" sx={{ padding: "16px", width: "200px" }}>{content.ko}</StyledTableCellWithoutLeft>
                            <StyledTableCellWithoutLeftRight>
                                {content.desc.map((v, i) =>
                                    <TableRow sx={{
                                        height: "48px",
                                        lineHeight: "48px",
                                        borderBottom: i !== content.desc.length-1 ? "1px solid lightgray" : ""
                                    }}>
                                        <Box sx={{ paddingLeft: "16px", minWidth: "800px" }}>
                                            {v}
                                            <br/>
                                            {v === "9. 5각형 2개를 겹쳐 그리기" && <MMSE9pic />}
                                        </Box>        
                                    </TableRow>
                                    )}
                            </StyledTableCellWithoutLeftRight>
                            <StyledTableCellWithoutLeftRight>
                                    {content.scores.map((score, i) =>
                                        <TableRow sx={{
                                            height: i === 3 ? "171.5px" : "48px",
                                            lineHeight: i === 3 ? "171.5px" : "48px",
                                            textAlign: "center",
                                            borderBottom: i !== content.desc.length-1 ? "1px solid lightgray" : ""
                                        }}>
                                            <Box sx={{ width: "120px", height: i === 3 ? "171.5px" : "48px", display: "flex", alignItems: "center" }}>
                                                <Form.MuiTextField
                                                    disabled={disabled}
                                                    InputProps={{
                                                        endAdornment: <InputAdornment position="end">/{score}</InputAdornment>
                                                    }}
                                                    {...register(`score[${content.ids[i]}]`)}
                                                />
                                            </Box>
                                        </TableRow>
                                    )}                               
                            </StyledTableCellWithoutLeftRight>
                        </TableRow> 
                    ))}
                </TableBody>
            </Table>
            <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'} sx={{ marginTop: "20px" }}>
                <Typography
                    gutterBottom
                    minWidth={115}
                    fontWeight={700}
                    variant="subtitle1"
                >
                    합계: {watchSumValues()}점
                </Typography>
                <Typography minWidth={115} variant="caption" sx={{ color: `${palette.primary.main}`}}>
                    {scoreLabel.map(({ score, label }) => 
                        <Typography variant="inherit">
                            <Box component={'strong'} mr={0.5}>
                                {label} :
                            </Box>
                                {score}
                        </Typography>                            
                    )}
                </Typography>
            </Box>
        </Box>
    );
}

export default MMSEContents;