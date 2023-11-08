import { ListItem, Typography } from '@mui/material';

const CopyRight = () => (
  <ListItem disablePadding>
    <Typography sx={{ fontSize: 10, color: '#fff', mt: 3 }}>
      copyright © 2023 DKMediInfo.
      <br />
      All rights reserved.
    </Typography>
  </ListItem>
);

export default CopyRight;
