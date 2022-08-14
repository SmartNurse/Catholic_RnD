import { Fragment } from 'react';
import { Typography } from '@mui/material';

interface Props {
  title: string;
  content: string;
}

const RecordContent = ({ title, content }: Props) => (
  <Fragment>
    <Typography component="li" variant="caption" fontWeight="bold">
      • {title}
    </Typography>
    <Typography
      component="li"
      variant="caption"
      sx={{ pl: 1, whiteSpace: 'pre-wrap' }}
    >
      {content}
    </Typography>
  </Fragment>
);

export default RecordContent;
