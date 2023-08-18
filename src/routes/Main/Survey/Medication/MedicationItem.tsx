import * as React from 'react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { IMedication } from 'apis/survey/type';
import { Typography } from '@mui/material';

interface Props {
  disabled?: boolean;
  item: IMedication;
  patientInfo: {
    patient_id: number;
    name: string;
    age: string;
    gender: number;
    blood: string;
    ward: string;
    room: string;
  };
  barcorde: string;
}

const MedicationItem = (props: Props) => {
  const { item, patientInfo, barcorde } = props;

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });

      canvas.toBlob(blob => {
        if (blob !== null) {
          return saveAs(blob, `${item.medication_name}.png`);
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };
  // console.log('item', item);
  // console.log('patientInfo', patientInfo);
  // console.log('imgBarcode', barcorde);
  return (
    <div
      key={item.pt_medication_uuid}
      onClick={handleDownload}
      ref={divRef}
      style={{
        width: '280px',
        height: '186px',
        backgroundColor: 'white',
        cursor: 'pointer',

        marginTop: '50px',
        padding: '13px 30px 0px 30px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ fontSize: '10px', whiteSpace: 'nowrap' }}>
          {patientInfo.patient_id}
        </Typography>
        <Typography sx={{ fontSize: '10px', whiteSpace: 'nowrap' }}>
          {patientInfo.ward}/{patientInfo.room}
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ fontSize: '10px', whiteSpace: 'nowrap' }}>
          {patientInfo.name}
        </Typography>
        <Typography sx={{ fontSize: '10px', whiteSpace: 'nowrap' }}>
          {patientInfo.age} / {patientInfo.gender === 1 ? '여자' : '남자'}
        </Typography>
        <Typography sx={{ fontSize: '10px', whiteSpace: 'nowrap' }}>
          {patientInfo.blood}
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Typography sx={{ fontSize: '10px', whiteSpace: 'nowrap' }}>
          {item.medication_name}
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Typography sx={{ fontSize: '10px', whiteSpace: 'nowrap' }}>
          {item.medication_content} {item.medication_measure}
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Typography sx={{ fontSize: '10px', whiteSpace: 'nowrap' }}>
          {item.medication_amount} 투여횟수 : {item.medication_freq}
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            fontSize: '10px',
            whiteSpace: 'pre-wrap',
            height: '30px',
          }}
        >
          {item.medication_note}
        </Typography>
      </div>

      <div>
        <img src={barcorde} alt="바코드" style={{ height: '53px' }} />
      </div>
    </div>
  );
};

export default MedicationItem;
