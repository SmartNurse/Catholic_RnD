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
          whiteSpace={'pre-wrap'}
          variant="caption"
          fontWeight="bold"
          lineHeight="2px"
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
