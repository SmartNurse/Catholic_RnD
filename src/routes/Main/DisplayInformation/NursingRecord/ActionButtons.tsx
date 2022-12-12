import { Fragment, useState } from 'react';
import { useSnackbar } from 'notistack';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { IUpdateNursingRecord } from 'apis/main/type';
import { deleteNursingRecord } from 'apis/main';
import usePatient from 'store/patient/usePatient';

interface Props extends IUpdateNursingRecord {
  refetch: () => void;
}

const ActionButtons = ({
  refetch,
  content,
  record_type,
  record_time,
  ...otherProps
}: Props) => {
  const { onSelectedNursingRecord } = usePatient();
  const { enqueueSnackbar } = useSnackbar();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const onConfig = () => {
    onSelectedNursingRecord({
      content,
      record_type,
      record_time,
      ...otherProps,
    });
    handleClose();
  };

  const onDelete = () => {
    const isConfirm = window.confirm('간호기록을 삭제하시겠습니까?');
    if (!isConfirm) return handleClose();

    deleteNursingRecord({
      ...otherProps,
      record_id: otherProps.nursing_record_id,
    })
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
        <MenuItem onClick={onConfig}>수정</MenuItem>
        <MenuItem onClick={onDelete}>삭제</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default ActionButtons;
