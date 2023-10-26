import { GridColDef } from '@mui/x-data-grid';

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

  const {
    list,
    isLoading,
    totalCount,
    page,
    onPageChange,
    onSelected,
    selected,
  } = props;

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
    { field: 'student_uuid', headerName: '학생아이디값' },
    {
      field: 'student_video.student_info,nursery_video1',
      headerName: 'level 1',
      valueFormatter: ({ value }) => (value ? value : '-'),
    },
    {
      field: 'student_video.student_info,nursery_video2',
      headerName: 'level 2',
      valueFormatter: ({ value }) => (value ? value : '-'),
    },
    {
      field: 'student_video.student_info,nursery_video3',
      headerName: 'level 3',
      valueFormatter: ({ value }) => (value ? value : '-'),
    },
  ];
  console.log('body list : ', list);
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
