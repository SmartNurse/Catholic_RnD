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
    {
      title: '수액 투여량',
      variable: 'patient_status_record.infusion_amount',
    },
    {
      title: '수혈량',
      variable: 'patient_status_record.transfusion_amount',
    },
    { title: '기타', variable: 'patient_status_record.intake_etc' },
  ];

  const output = [
    {
      title: '소변 배출량',
      variable: 'patient_status_record.urine_amount',
    },
    {
      title: '실혈량',
      variable: 'patient_status_record.blood_clot_amount',
    },
    { title: '기타', variable: 'patient_status_record.output_etc' },
  ];

  return (
    <>
      <RowContainer xs={12}>
        <RowContent title="INTAKE" titleRatio={1} childrenRatio={11}>
          <Box display="flex" alignItems="center">
            {intake.map(({ title, variable }) => (
              <>
                <Typography fontSize="12px">{title}</Typography>
                <MuiTextField
                  {...register(variable)}
                  sx={{ width: '15%', margin: '0px 15px' }}
                />
              </>
            ))}
          </Box>
        </RowContent>
        <RowContent title="OUTPUT" titleRatio={1} childrenRatio={11}>
          <Box display="flex" alignItems="center">
            {output.map(({ title, variable }) => (
              <>
                <Typography fontSize="12px">{title}</Typography>
                <MuiTextField
                  {...register(variable)}
                  sx={{ width: '15%', margin: '0px 15px' }}
                />
              </>
            ))}
          </Box>
        </RowContent>
      </RowContainer>
    </>
  );
};

export default IntakeOutput;
