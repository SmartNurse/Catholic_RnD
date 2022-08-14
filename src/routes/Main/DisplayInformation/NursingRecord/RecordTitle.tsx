import { format } from 'date-fns/esm';
import { Grid, List, Typography } from '@mui/material';

interface Props {
  title: string;
  nurseName: string;
  create_at: string;
  actionButtons: React.ReactNode;
}

const RecordTitle = (props: Props) => {
  const { title, nurseName, create_at, actionButtons } = props;

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Typography variant="caption" component="p">
        <Typography variant="caption" fontWeight="bold" mr={1}>
          {title}
        </Typography>
        <Typography variant="caption" color="#00000080">
          {nurseName} 간호사 {format(new Date(create_at), 'yyyy-MM-dd hh:mm a')}
        </Typography>
      </Typography>
      {actionButtons}
    </Grid>
  );
};

export default RecordTitle;
