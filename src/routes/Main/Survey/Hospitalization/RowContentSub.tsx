import { Fragment } from 'react';
import { Grid, GridSize, Typography } from '@mui/material';

interface Props {
  title?: string;
  children?: React.ReactNode;
  titleRatio?: GridSize;
  childrenRatio?: GridSize;
}

const RowContentSub = (props: Props) => {
  const { title, titleRatio = 1, children, childrenRatio = 11 } = props;

  return (
    <Fragment>
      <Grid item xs={titleRatio}>
        <Typography
          noWrap
          variant="caption"
          fontWeight="bold"
          lineHeight="38px"
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

export default RowContentSub;