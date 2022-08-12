import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
  content?: string | number | JSX.Element;
}

const PatientInfoItem = ({ title, content }: Props) => {
  const contentType = typeof content;
  const isContentElement = !(
    contentType === 'string' || contentType === 'number'
  );

  return (
    <Box
      display="flex"
      color="#000000B2"
      alignItems={isContentElement ? 'center' : 'flex-start'}
    >
      <Typography
        component="span"
        variant="body2"
        sx={{ width: 85, display: 'inline-block' }}
      >
        {title}
      </Typography>
      {isContentElement ? (
        content
      ) : (
        <Typography component="span" variant="body2" color="#000000E5">
          {content}
        </Typography>
      )}
    </Box>
  );
};

export default PatientInfoItem;
