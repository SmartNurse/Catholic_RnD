import { Fragment } from 'react';
import { Grid, GridSize, Typography } from '@mui/material';

interface Props {
  title?: string;
  children?: React.ReactNode;
  titleRatio?: GridSize;
  childrenRatio?: GridSize;
}

const RowContent = (props: Props) => {
  const { title, titleRatio = 2, children, childrenRatio = 10 } = props;

  return (
    <Fragment>
      <Grid item xs={titleRatio}>
        <Typography
          noWrap
          variant="caption"
          lineHeight="38px"
          sx={{ fontSize: '15px', color: 'red' }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={childrenRatio}>
        {children}
      </Grid>
    </Fragment>
  );
};

export default RowContent;
