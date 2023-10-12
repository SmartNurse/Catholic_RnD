import { Button } from '@mui/material';
import { Fragment, useState } from 'react';
import DeleteConfirm from './DeleteConfirm';

interface Props {
  title: string;
  middleTitle: string;
  message: string;
  color?: string;

  deleteFile: (i: number) => void;
  i: number;
  yesDelet: boolean;
  setYesDelet: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteConfirmButton({
  title,
  middleTitle,
  message,
  color,
  deleteFile,
  i,
  yesDelet,
  setYesDelet,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Fragment>
      <Button
        size="small"
        variant="contained"
        onClick={onOpen}
        sx={{ color: color || '', backgroundColor: 'green' }}
      >
        {title}
      </Button>

      <DeleteConfirm
        middleTitle={middleTitle}
        message={message}
        isOpen={isOpen}
        onClose={onClose}
        deleteFile={deleteFile}
        i={i}
        yesDelet={yesDelet}
        setYesDelet={setYesDelet}
      />
    </Fragment>
  );
}

export default DeleteConfirmButton;
