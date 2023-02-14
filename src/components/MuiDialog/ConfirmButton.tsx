import { Button } from '@mui/material';
import { Fragment, useState } from 'react';
import ConfirmDialog from './Confirm';

interface Props {
  title: string;
  message: string;
  color?: string;
}

function ConfirmButton({ title, message, color }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Fragment>
      <Button size="small" variant="text" onClick={onOpen} sx={{ color: color || "" }}>
        {title}
      </Button>

      <ConfirmDialog
        title={title}
        message={message}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Fragment>
  );
}

export default ConfirmButton;
