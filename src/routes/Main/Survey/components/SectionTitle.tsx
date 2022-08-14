import { Grid, Typography } from '@mui/material';

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => (
  <Grid item xs={12} sx={{ mb: -3 }}>
    <Typography
      fontSize={13}
      fontWeight="bold"
      sx={{ p: 1, backgroundColor: '#F2F2F2', borderTop: 'solid 1px' }}
    >
      {title}
    </Typography>
  </Grid>
);

export default SectionTitle;
