import { Fragment, useState } from 'react';
import { useSnackbar } from 'notistack';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { IDeleteNursingRecord } from '../../../../apis/main/type';
import { deleteNursingRecord } from '../../../../apis/main';

interface Props extends IDeleteNursingRecord {
  refetch: () => void;
}

const ActionButtons = ({ refetch, ...request }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const onDelete = () => {
    deleteNursingRecord(request)
      .then(() => {
        refetch();
        const message = '간호기록을 삭제하였습니다.';
        enqueueSnackbar(message, { variant: 'success' });
      })
      .catch(e => {
        const message = `간호기록 삭제 실패하였습니다.\n오류: ${e}`;
        enqueueSnackbar(message, { variant: 'error' });
      })
      .finally(handleClose);
  };

  return (
    <Fragment>
      <IconButton size="small" onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{ sx: { width: 180 } }}
      >
        <MenuItem onClick={onDelete}>삭제</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default ActionButtons;
