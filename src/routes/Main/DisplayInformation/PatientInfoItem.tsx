import { Box, Typography, useTheme } from '@mui/material';

interface Props {
  title: string;
  content?: string | number | React.ReactNode;
}

const PatientInfoItem = ({ title, content }: Props) => {
  const contentType = typeof content;
  const isContentElement = !(
    contentType === 'string' || contentType === 'number'
  );

  const Content = () => {
    const { palette } = useTheme();
    if (content && isContentElement) return content;

    return (
      <Typography
        component="span"
        variant="body2"
        color={palette.text.primary}
        sx={{ minWidth: 50 }}
      >
        {!content && content !== 0 ? '-' : content}
      </Typography>
    );
  };

  return (
    <Box
      display="flex"
      color="#000000B2"
      alignItems={isContentElement ? 'center' : 'flex-start'}
    >
      <Typography
        component="span"
        variant="body2"
        sx={{ minWidth: 85, display: 'inline-block', whiteSpace: 'nowrap' }}
      >
        {title}
      </Typography>

      {Content()}
    </Box>
  );
};

export default PatientInfoItem;
