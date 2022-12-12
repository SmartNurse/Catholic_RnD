import { Fragment, useState } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import { ImageOutlined } from '@mui/icons-material';
import { UseFormGetValues } from 'react-hook-form';

import MuiTable from 'components/MuiTable';
import { IRadiology } from 'apis/survey/type';
import { formatStringToDate } from 'utils/formatting';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

interface Props {
  getValues: UseFormGetValues<any>;
}

const Radiologies = ({ getValues }: Props) => {
  const radiologies: IRadiology[] = getValues('radiologies');
  const [selectedImg, setSelectedImg] = useState(
    radiologies[0]?.radiology_image1
  );

  const columns = [
    { fieldId: 'pt_radiology_no', label: '검사번호' },
    { fieldId: 'radiology_time', label: '검사시간' },
    { fieldId: 'fee_kor', label: '검사명(한글)', width: 150 },
    { fieldId: 'fee_eng', label: '검사명(영문)', width: 150 },
    { fieldId: 'radiology_result', label: '판독결과', width: 250 },
    { fieldId: 'radiology_note', label: '검사노트', width: 250 },
    { fieldId: 'radiology_image1', label: '영상1' },
    { fieldId: 'radiology_image2', label: '영상2' },
    { fieldId: 'radiology_image3', label: '영상3' },
    { fieldId: 'radiology_image4', label: '영상4' },
    { fieldId: 'radiology_image5', label: '영상5' },
  ];

  const ImageButton = ({ src }: { src?: string }) => {
    if (!src) return null;
    const color = src === selectedImg ? 'primary' : 'default';
    const onClick = () => setSelectedImg(src);
    return (
      <IconButton size="small" color={color} onClick={onClick}>
        <ImageOutlined />
      </IconButton>
    );
  };

  const rows = radiologies?.map(item => {
    return {
      ...item,
      id: item.pt_radiology_no,
      radiology_time: formatStringToDate(item.radiology_time, 'hh:mm a'),
      radiology_image1: <ImageButton src={item.radiology_image1} />,
      radiology_image2: <ImageButton src={item.radiology_image2} />,
      radiology_image3: <ImageButton src={item.radiology_image3} />,
      radiology_image4: <ImageButton src={item.radiology_image4} />,
      radiology_image5: <ImageButton src={item.radiology_image5} />,
    };
  });

  return (
    <Fragment>
      <SectionTitle title="검사 내역" />

      <RowContainer ratio={12}>
        <Grid item xs={12}>
          <MuiTable columns={columns} rows={rows} />
        </Grid>
        <Grid item xs={12}>
          {selectedImg && (
            <Box
              display={'flex'}
              justifyContent={'center'}
              sx={{ backgroundColor: 'lightGrey' }}
            >
              <Box
                component={'img'}
                src={selectedImg}
                height={450}
                sx={{ objectFit: 'contain' }}
              />
            </Box>
          )}
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default Radiologies;
