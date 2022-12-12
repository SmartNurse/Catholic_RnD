import { Typography, Box, TextField } from "@mui/material";

interface Props {
    selected: boolean[];
    calorie: string;
    dietList: string[];
    etc: string;
};

const label = ["조식", "중식", "석식"];

const DietResultBox = (props: Props) => {
    const { selected, calorie, dietList, etc } = props;

    return (
        <Box sx={{ width: "90%", margin: "30px auto", display: "flex", justifyContent: "space-between" }}>
            {label.map((v, i) => 
                <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "13px", lineHeight: "24px", paddingLeft: "16px" }}>{v}</Typography> 
                    <TextField
                        placeholder={selected[i] ? `${dietList}${etc && (dietList.length !== 0 ? ',' + etc : etc)}\n${calorie && "-> " + calorie + " KCAL/day"}` : v + " 목록"}
                        multiline={true}
                        minRows={3}
                        InputProps={{ readOnly: true }}
                    />
                </Box>
            )}
        </Box>
    )
}

export default DietResultBox;