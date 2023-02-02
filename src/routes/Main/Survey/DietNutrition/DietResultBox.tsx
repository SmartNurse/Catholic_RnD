import { Typography, Box, TextField } from "@mui/material";

import { IFormWatch } from "routes/Main/type";

interface Props extends IFormWatch {
    dietList: string[];
};

const label = ["조식", "중식", "석식"];

const DietResultBox = (props: Props) => {
    const { dietList, watch } = props;

    return (
        <Box sx={{ width: "90%", margin: "30px auto", display: "flex", justifyContent: "space-between" }}>
            {label.map((v, i) => 
                <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "13px", lineHeight: "24px", paddingLeft: "16px" }}>{v}</Typography> 
                    <TextField
                        placeholder={
                            watch(`select_meal.checked${i+1}`) ?
                            `${dietList}${watch("specifics.placeholder") ? (dietList.length !== 0 ? ',' + watch("specifics.placeholder") : watch("specifics.placeholder")) : ""}\n${watch("select_meal.calorie") ? "-> " + watch("select_meal.calorie") + " KCAL/day" : ""}`
                            :
                            v + " 목록"
                        }
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