import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Fragment, useState } from 'react';

interface Props {
  title: string;
  message: string;
}

function ConfirmModalButton({ title, message }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Fragment>
      <Button size="small" variant="text" onClick={onOpen}>
        {title}
      </Button>

      <Dialog open={isOpen} onClose={onClose} maxWidth="xs">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{ wordBreak: 'keep-all', lineHeight: '24px' }}>
          {message}
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={onClose}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default ConfirmModalButton;
