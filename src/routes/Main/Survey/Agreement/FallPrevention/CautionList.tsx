import { Box, Typography } from "@mui/material";

import SectionTitle from "../../components/SectionTitle";

interface Props {
    disabled?: boolean;
}

const contents = [
    "70세 이상 또는 14세 이하",
    "이뇨제, 진정제, 항경련제 등의 약물을 복용하시는 분",
    "낙상경험, 보행장애, 혼미, 어지러움증이 있으신 분",
    "전신쇠약, 시력 및 청력장애, 배뇨 및 배설장애, 골다공증이 있으신 분",
    "기타 낙상의 위험이 높으신 분",
];

const CautionList = (props: Props) => {
    const { disabled } = props;

    return (
        <>
            <SectionTitle title="아래와 같이 낙상의 위험이 높으신 분들은 특히 주의하여 주시기 바랍니다." />
            <Box sx={{ width: "98%", margin: "48px auto 24px auto" }}>
                {contents.map((v, i) => 
                    <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "40px" }}>{i+1}) {v}</Typography>
                )}
            </Box>
        </>
    );
}

export default CautionList;