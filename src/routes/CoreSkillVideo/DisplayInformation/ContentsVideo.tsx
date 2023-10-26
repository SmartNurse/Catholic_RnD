import { useEffect, useState, useCallback, useRef } from 'react';

import useUser from 'store/user/useUser';

import { IPatientInfoSmall } from 'apis/admin/type';
import { getSkillVideo } from 'apis/survey/index';

interface Props {
  patientInfo: IPatientInfoSmall;
}

const ContentsVideo = ({ patientInfo }: Props) => {
  const { student_uuid: user_id } = useUser();
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!patientInfo) return;

    // 가상환자 상세정보 요청
    getSkillVideo({ patient_id: patientInfo.patient_id, user_id })
      .then(({ data }) => {
        setList(data);
      })
      .catch(e => {
        setList([]);
        console.log(`가상환자 데이터 조회에 실패했습니다.`, e);
      });
    // eslint-disable-next-line
  }, [patientInfo]);

  console.log('list', list);

  return <>ㅋㅋ</>;
};

export default ContentsVideo;
