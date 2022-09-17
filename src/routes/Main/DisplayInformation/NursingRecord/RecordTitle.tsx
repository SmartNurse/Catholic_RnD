import { format } from 'date-fns/esm';
import { Grid, Typography } from '@mui/material';

interface Props {
  title: string;
  nurseName: string;
  create_at: string;
  record_time: string;
  actionButtons: React.ReactNode;
}

const RecordTitle = (props: Props) => {
  const { title, nurseName, create_at, record_time, actionButtons } = props;

  const dateTime = () => {
    const createAt = format(new Date(create_at), 'yyyy-MM-dd');
    const recordTime = format(new Date(record_time), 'hh:mm a');
    return `${createAt} ${recordTime}`;
  };

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Typography variant="caption" component="p">
        <Typography variant="caption" fontWeight="bold" mr={1}>
          {title}
        </Typography>
        <Typography variant="caption" color="#00000080">
          {nurseName} 간호사 {dateTime()}
        </Typography>
      </Typography>
      {actionButtons}
    </Grid>
  );
};

export default RecordTitle;
