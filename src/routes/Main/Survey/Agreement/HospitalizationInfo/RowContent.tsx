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
      <Grid item xs={titleRatio} sx={{width:"10px"}}>
        <Typography
          noWrap
          variant="caption"
          fontWeight="bold"
          lineHeight="38px"
          fontSize={14}
          sx={{marginRigth:"15px", paddingLeft:"15px"}}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={childrenRatio} sx={{}}>
        {children}
      </Grid>
    </Fragment>
  );
};

export default RowContent;
