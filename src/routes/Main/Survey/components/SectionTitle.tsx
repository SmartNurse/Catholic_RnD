import { Grid, Typography, useTheme } from '@mui/material';

interface Props {
  title: string;
  mb?: number;
}

const SectionTitle = ({ title, mb = -3 }: Props) => {
  const { palette } = useTheme();

  return (
    <Grid item xs={12} sx={{ mb }}>
      <Typography
        color={palette.mode === "dark" ? "black" : "white"}
        fontSize={13}
        fontWeight="bold"
        sx={{ p: 1, backgroundColor: '#F2F2F2', borderTop: 'solid 1px' }}
      >
        {title}
      </Typography>
    </Grid>
)};

export default SectionTitle;
