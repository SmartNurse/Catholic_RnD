import { IFormRegister } from 'routes/Main/type';

import { Typography, Box } from '@mui/material';

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

interface Props extends IFormRegister {
    disabled?: boolean;
}  

const IntakeOutput = (props: Props) => {
    const { disabled, register } = props;

    const intake = [
        { title: "수액 투여량", variable: "anesthesia.patient_status.intake.infusion" },
        { title: "수혈량", variable: "anesthesia.patient_status.intake.transfusion" },
        { title: "기타", variable: "anesthesia.patient_status.intake.etc" },
    ];

    const output = [
        { title: "소변 배출량", variable: "anesthesia.patient_status.output.urine" },
        { title: "실혈량", variable: "anesthesia.patient_status.output.blood_lost" },
        { title: "기타", variable: "anesthesia.patient_status.output.etc" },
    ];

    return (
        <>
            <RowContainer xs={12}>
                <RowContent title="INTAKE" titleRatio={1} childrenRatio={11}>
                    <Box display="flex" alignItems="center">
                        {intake.map(({ title, variable }) => (
                            <>
                                <Typography fontSize="12px">{title}</Typography>
                                <MuiTextField {...register(variable)} sx={{ width: "15%", margin: "0px 15px" }} />
                            </>
                        ))}
                    </Box>
                </RowContent>
                <RowContent title="OUTPUT" titleRatio={1} childrenRatio={11}>
                    <Box display="flex" alignItems="center">
                        {output.map(({ title, variable }) => (
                            <>
                                <Typography fontSize="12px">{title}</Typography>
                                <MuiTextField {...register(variable)} sx={{ width: "15%", margin: "0px 15px" }} />
                            </>
                        ))}
                    </Box>
                </RowContent>
            </RowContainer>

        </>
    );
}

export default IntakeOutput;