import { Grid, Typography, useTheme } from '@mui/material';

interface Props {
  mb?: number;
}

const SectionTitle = ({ mb = 0 }: Props) => {
  const { palette } = useTheme();

  return (
    <Grid item xs={12} sx={{ mb }}>
      <Typography
        color={palette.mode === 'dark' ? 'black' : palette.text.primary}
        sx={{ borderTop: 'solid 0.5px lightGray' }}
      ></Typography>
    </Grid>
  );
};

export default SectionTitle;
