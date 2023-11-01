import { Fragment } from 'react';
import { Grid, GridSize, Typography } from '@mui/material';

interface Props {
  title?: string;
  children?: React.ReactNode;
  titleRatio?: GridSize;
  childrenRatio?: GridSize;
}

const RowContent = (props: Props) => {
  const { title, titleRatio = 2.65, children, childrenRatio = 9.35 } = props;

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

export default RowContent;
