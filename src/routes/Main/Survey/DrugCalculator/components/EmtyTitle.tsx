import { Grid, Typography, useTheme } from '@mui/material';

interface Props {
  mb?: number;
}

const SectionTitle = ({ mb = -3 }: Props) => {
  const { palette } = useTheme();

  return (
    <Grid item xs={12} sx={{ mb }}>
      <Typography
        color={palette.mode === 'dark' ? 'black' : palette.text.primary}
      ></Typography>
    </Grid>
  );
};

export default SectionTitle;
