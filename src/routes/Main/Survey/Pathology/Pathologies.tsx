import { Fragment } from 'react';
import { Grid } from '@mui/material';
import { UseFormGetValues } from 'react-hook-form';

import MuiTable from 'components/MuiTable';
import { IPathology } from 'apis/survey/type';
import { formatStringToDate } from 'utils/formatting';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

interface Props {
  getValues: UseFormGetValues<any>;
}

const Pathologies = ({ getValues }: Props) => {
  const pathologies: IPathology[] = getValues('pathologies');

  const columns = [
    { fieldId: 'pt_pathology_no', label: '검사번호' },
    { fieldId: 'pathology_time', label: '검사시간' },
    { fieldId: 'fee_kor', label: '검사명(한글)', width: 150 },
    { fieldId: 'fee_eng', label: '검사명(영문)', width: 150 },
    { fieldId: 'pathology_result', label: '검사결과', width: 240 },
    { fieldId: 'pathology_range', label: '검사범위', width: 240 },
    { fieldId: 'pathology_note', label: '검사노트', width: 240 },
  ];

  const rows = pathologies?.map(item => ({
    ...item,
    id: item.pt_pathology_no,
    pathology_time: formatStringToDate(item.pathology_time, 'hh:mm a'),
  }));

  return (
    <Fragment>
      <SectionTitle title="검사 내역" />

      <RowContainer ratio={12}>
        <Grid item xs={12}>
          <MuiTable columns={columns} rows={rows} />
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default Pathologies;
