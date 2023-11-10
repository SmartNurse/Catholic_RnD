import { GridColDef } from '@mui/x-data-grid';
import { ReactComponent as FileIcon } from 'assets/file-icon.svg';
import { Typography, Button, Stack } from '@mui/material';
import MuiDataGrid from 'components/MuiDataGrid';
import { IUpedateSkillVideo } from 'apis/survey/type';
import { TGender } from 'apis/account/type';
import useI18n from 'hooks/useI18n';

interface Props {
  list: IUpedateSkillVideo[];
  isLoading: boolean;
  totalCount: number;
  page: number;
  onPageChange: (page: number) => void;
  onSelected: (value: string[]) => void;
  selected: string[];
}

function ContentsBody(props: Props) {
  const i18n = useI18n();

  const { list, isLoading, totalCount, page, onPageChange } = props;

  const columns: GridColDef[] = [
    { field: 'student_id', headerName: '아이디(이메일)' },
    { field: 'student_name', headerName: '이름' },
    { field: 'student_no', headerName: '학번/사번' },
    {
      field: 'student_gender',
      headerName: '성별',
      valueFormatter: ({ value }: { value: TGender }) =>
        i18n(`GENDER.${value}`),
    },
    {
      field: 'student_video.nursery_video1',
      headerName: 'level 1',
      renderCell: list => {
        if (
          list.row.student_video === null ||
          list.row.student_video.nursery_video1 === null
        ) {
          return <Typography>-</Typography>;
        }
        return (
          <Stack direction="row">
            <Typography sx={{ fontSize: '13px', lineHeight: '30px' }}>
              {list.row.student_video.video_name1}
            </Typography>

            <Button
              onClick={() => window.open(list.row.student_video.nursery_video1)}
            >
              <FileIcon />
            </Button>
          </Stack>
        );
      },
    },
    {
      field: 'student_video.nursery_video2',
      headerName: 'level 2',
      renderCell: list => {
        if (
          list.row.student_video === null ||
          list.row.student_video.nursery_video2 === null
        ) {
          return <Typography>-</Typography>;
        }
        return (
          <Stack direction="row">
            <Typography sx={{ fontSize: '13px', lineHeight: '30px' }}>
              {list.row.student_video.video_name2}
            </Typography>
            <Button
              onClick={() => window.open(list.row.student_video.nursery_video2)}
            >
              <FileIcon />
            </Button>
          </Stack>
        );
      },
    },
    {
      field: 'student_video.nursery_video3',
      headerName: 'level 3',
      renderCell: list => {
        if (
          list.row.student_video === null ||
          list.row.student_video.nursery_video3 === null
        ) {
          return <Typography>-</Typography>;
        }
        return (
          <Stack direction="row">
            <Typography sx={{ fontSize: '13px', lineHeight: '30px' }}>
              {list.row.student_video.video_name3}
            </Typography>
            <Button
              onClick={() => window.open(list.row.student_video.nursery_video3)}
            >
              <FileIcon />
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <MuiDataGrid
      columns={columns}
      loading={isLoading}
      onPageChange={onPageChange}
      page={page}
      pageSize={20}
      rows={list.map(item => ({ ...item, id: item.student_no }))}
      rowCount={totalCount}
    />
  );
}

export default ContentsBody;
