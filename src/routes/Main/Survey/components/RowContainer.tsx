import { Grid, GridProps, GridSize } from '@mui/material';

interface Props extends GridProps {
  ratio?: GridSize;
  children?: React.ReactNode;
}

const RowContainer = (props: Props) => {
  const { ratio = 6, children, ...gridProps } = props;

  return (
    <Grid
      item
      container
      xs={ratio}
      rowSpacing={2}
      columnSpacing={4}
      component="section"
      {...gridProps}
    >
      {children}
    </Grid>
  );
};

export default RowContainer;
