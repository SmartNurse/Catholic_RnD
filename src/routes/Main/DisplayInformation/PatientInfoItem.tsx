import { Box, Typography } from '@mui/material';

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
    if (content && isContentElement) return content;

    return (
      <Typography component="span" variant="body2" color="#000000E5">
        {content ? content : '-'}
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
