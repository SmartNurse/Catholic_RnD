import { useState, useEffect, } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import useUser from 'store/user/useUser';

import { getPatients } from 'apis/admin';
import { IPatientInfo } from 'apis/admin/type';

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

  const [patientList, setPatientList] = useState<IPatientInfo[]>([]);
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    getPatients({ page: 1, keyword: "", user_id })
    .then(({ data: { admin_patients } }) => {
      setPatientList([...admin_patients]);
      setFiles(Array(admin_patients.length).fill({ path: "", file: null }));
    });
  }, []);

  return (
    <Table sx={{ width: "100%", marginTop: "24px" }} aria-label="simple table">
      <TableBody>
        {patientList.map(({ name }, i) => (
          <TableRow
            key={name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{ width: "50%" }}>
              {name}
            </TableCell>
            <TableCell sx={{ width: "40%"}}>
              <MuiTextField
                required={false}
                type="file"
                value={files[i].path}
                onChange={(e) => {
                  const newFiles = [...files];
                  let size = 0;

                  const target = e.target as HTMLInputElement;
                  if (target && target.files) {
                    newFiles[i] = { path: target.value, file: target.files[0] };
                    size = target.files[0].size;
                  }

                  setTotalSize(Number((totalSize + size / Math.pow(1024, 3)).toFixed(4)));
                  setFiles([...newFiles]);
                }}
                InputProps={{ endAdornment: <FileIcon /> }}
              />
            </TableCell>
            <TableCell sx={{ width: "10%" }}>
              <Button variant="contained" size="small" onClick={() => {
                setTotalSize(Number((totalSize - files[i].file.size / Math.pow(1024, 3)).toFixed(4)));
                setFiles([...files.slice(0, i),{ path: "", file: null }, ...files.slice(i+1)]);
              }}>
                삭제
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default VideoForm;
