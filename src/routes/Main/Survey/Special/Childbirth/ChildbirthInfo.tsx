import Form from 'components/Form';

import { Fragment } from 'react';
import { AccessTime } from '@mui/icons-material';
import { Grid, IconButton, MenuItem, Box, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const ChildbirthInfo = (props: Props) => {
  const { disabled, register, watch, setValue } = props;

  const columns = [
    { fieldId: 'date', label: '분만 일자', sx: { width: 200 } },
    { fieldId: 'time', label: '분만 시간', sx: { width: 200 } },
    { fieldId: 'type', label: '분만 형태', sx: { width: 200 } },
  ];

  const labels = ["분만 일자", "분만 시간", "분만 형태"];
  const elements = [
    <Form.MuiTextField
      type="date"
      required={false}
      disabled={disabled}
      {...register("child_birth_information.date")}
    />,
    <MobileTimePicker
      disabled={disabled}
      value={watch("child_birth_information.time") || null}
      onChange={(v) => setValue("child_birth_information.time", v)}
      renderInput={params => (
        <MuiTextField
          {...params}
          required={false}
          placeholder="00:00 pm"
          InputProps={{ endAdornment: <AccessTime /> }}
        />
      )}
    />,
    <MuiTextField
      {...register("child_birth_information.type")}
      required={false}
      disabled={disabled}
    />
  ];

  return (
    <Fragment>
      <SectionTitle title="분만 정보" />
      <Grid item xs={12}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {labels.map((label, i) => (
                <TableCell style={{ width: i === 2 ? "54%" : "23%" }}>{label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
                {elements.map((element, i) => (
                  <TableCell>{element}</TableCell>
                ))}
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Fragment>
  );
};

export default ChildbirthInfo;