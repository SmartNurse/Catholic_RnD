import { Button, useTheme } from '@mui/material';
import { Fragment, useState } from 'react';
import DeleteConfirm from './DeleteConfirm';

interface Props {
  title: string;
  middleTitle: string;
  message: string;
  color?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  yesDelet: boolean;
  setYesDelet: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteConfirmButton({
  title,
  middleTitle,
  message,
  color,
  yesDelet,
  setYesDelet,
  onSubmit,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const { palette } = useTheme();

  return (
    <Fragment>
      <Button
        size="small"
        variant="contained"
        onClick={onOpen}
        sx={{ color: color || '', backgroundColor: `${palette.primary.main}` }}
      >
        {title}
      </Button>

      <DeleteConfirm
        middleTitle={middleTitle}
        message={message}
        isOpen={isOpen}
        onClose={onClose}
        yesDelet={yesDelet}
        setYesDelet={setYesDelet}
        onSubmit={onSubmit}
      />
    </Fragment>
  );
}

export default DeleteConfirmButton;
