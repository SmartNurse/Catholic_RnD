import { useEffect, useState } from 'react';

import { ReactComponent as FileIcon } from 'assets/file-icon.svg';
import { Table, TableBody, TableRow, TableCell, Button } from '@mui/material';
import MuiTextField from 'components/Form/MuiTextField';

import useNotification from 'hooks/useNotification';
import { IFormValues } from 'routes/Main/type';
import { getVideo, deleteVideo } from 'apis/video';
import axios from 'axios';

interface Props extends IFormValues {
  disabled?: boolean;
  user_id: number;
  patient_id: number;
  patient_name: string;
  totalSize: number;
  refresh: boolean;
  setTotalSize: (totalSize: number) => void;
}

const VideoForm = (props: Props) => {
  const {
    disabled,
    user_id,
    patient_id,
    patient_name,
    totalSize,
    setTotalSize,
    refresh,
    setValue,
  } = props;

  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

  const [files, setFiles] = useState<any[]>([
    { saved: false, path: '', file: null },
    { saved: false, path: '', file: null },
    { saved: false, path: '', file: null },
  ]);

  const deleteFile = (i: number) => {
    if (files[i].saved) {
      deleteVideo({ user_id, patient_id, video_num: i + 1 })
        .then(res => {
          // console.log(res);
        })
        .catch(e => onFail('삭제에 실패하였습니다.', e));
    }

    const newSize = Number(
      (totalSize - files[i].file.size / Math.pow(1024, 3)).toFixed(4)
    );
    setTotalSize(newSize < 0 ? 0 : newSize);
    const newFiles = [
      ...files.slice(0, i),
      { saved: false, path: '', file: null },
      ...files.slice(i + 1),
    ];
    setFiles(newFiles);
    setValue('files', newFiles);
  };

  const downloadFile = (i: number) => {
    axios
      .get(
        `${
          process.env.REACT_APP_API_URL
        }/file/video_download?user_id=${user_id}&patient_id=${patient_id}&video_num=${
          i + 1
        }`,
        {
          responseType: 'blob',
        }
      )
      .then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.download = files[i].path;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();

        link.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(e => onFail('다운로드에 실패하였습니다.', e));
  };

  useEffect(() => {
    getVideo({ user_id, patient_id })
      .then(({ data }) => {
        const { file_info, total_video_size } = data;

        setTotalSize(Number((total_video_size / Math.pow(1024, 3)).toFixed(4)));
        let savedFiles = [...files];
        file_info.forEach((file: any) => {
          savedFiles[file.video_num - 1] = {
            saved: true,
            path: file.video_name,
            file: { size: file.video_size },
          };
        });
        while (savedFiles.length < 3) {
          savedFiles.push({ saved: false, path: '', file: null });
        }
        setFiles(savedFiles);
      })
      .catch(e => {
        if (e.response.data.status !== 500)
          onFail('핵심간호술기영상을 불러오는 데 실패하였습니다.', e);
      });
  }, [refresh]);

  return (
    <Table sx={{ width: '100%', marginTop: '24px' }} aria-label="simple table">
      <TableBody>
        {files.map((file, i) => (
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ width: '30%' }}>LEVEL {i + 1}</TableCell>
            <TableCell sx={{ width: '30%' }}>{patient_name}</TableCell>
            <TableCell sx={{ width: '30%' }}>
              {file.saved ? (
                <MuiTextField
                  value={files[i].path}
                  InputProps={{ endAdornment: <FileIcon />, readOnly: true }}
                  onClick={() => downloadFile(i)}
                />
              ) : (
                <MuiTextField
                  required={false}
                  type="file"
                  value={files[i].path}
                  onChange={e => {
                    let newFiles = [...files];
                    let size = 0;
                    const target = e.target as HTMLInputElement;
                    if (target && target.files) {
                      newFiles[i] = {
                        saved: false,
                        path: target.value,
                        file: target.files[0],
                      };
                      size = target.files[0].size;
                      // console.log('사이즈', size);
                      if (size > 512000000) {
                        return onRequired('REQUIRED.VIDIEO.FORMAT');
                      }
                    }
                    setTotalSize(
                      Number((totalSize + size / Math.pow(1024, 3)).toFixed(4))
                    );
                    setFiles([...newFiles]);
                    setValue('files', newFiles);
                  }}
                  InputProps={{ endAdornment: <FileIcon /> }}
                />
              )}
            </TableCell>

            {files[i].path !== '' ? (
              <TableCell sx={{ width: '10%' }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => deleteFile(i)}
                >
                  삭제
                </Button>
              </TableCell>
            ) : (
              <TableCell sx={{ width: '10%' }}>
                <Button
                  variant="contained"
                  size="small"
                  disabled
                  onClick={() => deleteFile(i)}
                >
                  삭제
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default VideoForm;
