import { Grid, Typography, useTheme } from '@mui/material';

interface Props {
  title: string;
  mb?: number;
  mt?: number;
}

const SectionTitle = ({ title, mb = -3, mt }: Props) => {
  const { palette } = useTheme();

  return (
    <Grid item xs={12} sx={{ mb, mt }}>
      <Typography
        color={palette.mode === 'dark' ? 'black' : palette.text.primary}
        fontSize={16}
        fontWeight="bold"
        sx={{
          p: 1,
          backgroundColor: palette.mode === 'dark' ? 'lightgrey' : '#F2F2F2',
          borderTop: 'solid 1px',
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default SectionTitle;
