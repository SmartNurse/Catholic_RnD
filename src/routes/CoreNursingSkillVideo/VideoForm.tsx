import { useState } from 'react';

import useUser from 'store/user/useUser';
import usePatient from 'store/patient/usePatient';

import { ReactComponent as FileIcon } from "assets/file-icon.svg";
import { Table, TableBody, TableRow, TableCell, Button } from '@mui/material';
import MuiTextField from 'components/Form/MuiTextField';

interface Props {
  disabled?: boolean;
  totalSize: number;
  setTotalSize: (totalSize: number) => void;
}

const VideoForm = (props: Props) => {
  const { totalSize, setTotalSize } = props;
  const { student_uuid: user_id } = useUser();
  const { patientInfo } = usePatient();

  const [file, setFile] = useState<any>({ path: "", file: null });

  return (
    <Table sx={{ width: "100%", marginTop: "24px" }} aria-label="simple table">
      <TableBody>
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell sx={{ width: "30%" }}>
            {patientInfo?.name}
          </TableCell>
          <TableCell sx={{ width: "60%"}}>
            <MuiTextField
              required={false}
              type="file"
              value={file.pat}
              onChange={(e) => {
                let newFile;
                let size = 0;

                const target = e.target as HTMLInputElement;
                if (target && target.files) {
                  newFile = { path: target.value, file: target.files[0] };
                  size = target.files[0].size;
                }

                setTotalSize(Number((totalSize + size / Math.pow(1024, 3)).toFixed(4)));
                setFile(newFile);
              }}
              InputProps={{ endAdornment: <FileIcon /> }}
            />
          </TableCell>
          <TableCell sx={{ width: "10%" }}>
            <Button variant="contained" size="small" onClick={() => {
              setTotalSize(Number((totalSize - file.file.size / Math.pow(1024, 3)).toFixed(4)));
              setFile({ path: "", file: null });
            }}>
              삭제
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default VideoForm;
