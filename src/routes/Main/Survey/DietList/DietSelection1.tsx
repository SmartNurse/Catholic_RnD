import * as React from 'react';
import { Fragment, useState } from 'react';

import { MenuItem, Stack, TextField } from '@mui/material';

import MuiRadioGroup from './MuiRadioGroup';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
  dietList: string[];
  setDietList: (dietList: string[]) => void;
}

const 기본식사 = [
  {
    label: 'NPO',
    key: 'basic_meal.checked1',
  },
  {
    label: 'SOW',
    key: 'basic_meal.checked2',
  },
  {
    label: 'AQ',
    key: 'basic_meal.checked3',
  },
  {
    label: 'LD',
    key: 'basic_meal.checked4',
  },
  {
    label: 'SD',
    key: 'basic_meal.checked5',
  },
  {
    label: 'SBD',
    key: 'basic_meal.checked6',
  },
  {
    label: 'RD',
    key: 'basic_meal.checked7',
  },
  {
    label: 'TD',
    key: 'basic_meal.checked8',
  },
  {
    label: '치료식',
    key: 'basic_meal.checked9',
  },
  {
    label: '소아',
    key: 'basic_meal.checked10',
  },
];

const 장질환 = [
  { label: '위 절제 밥', key: 'therapuetic_diet.intestinal.checked1' },
  { label: '위 절제 죽', key: 'therapuetic_diet.intestinal.checked2' },
  { label: '저 섬유 밥', key: 'therapuetic_diet.intestinal.checked3' },
  { label: '저 섬유 죽', key: 'therapuetic_diet.intestinal.checked4' },
  { label: '저 잔사 밥', key: 'therapuetic_diet.intestinal.checked5' },
  { label: '위 절제 미음', key: 'therapuetic_diet.intestinal.checked6' },
  { label: '저 잔사 미음', key: 'therapuetic_diet.intestinal.checked7' },
  {
    label: '비만 수술 후 식사 (맑은 유동식)',
    key: 'therapuetic_diet.intestinal.checked8',
  },
  {
    label: '비만 수술 후 식사 (일반 유동식)',
    key: 'therapuetic_diet.intestinal.checked9',
  },
];

const 신장질환 = [
  { label: '신부전 밥', key: 'therapuetic_diet.kidney.checked1' },
  { label: '신부전 죽', key: 'therapuetic_diet.kidney.checked2' },
  { label: '신증후군 밥', key: 'therapuetic_diet.kidney.checked3' },
  { label: '신증후군 죽', key: 'therapuetic_diet.kidney.checked4' },
  { label: '당뇨신증 밥', key: 'therapuetic_diet.kidney.checked5' },
  { label: '당뇨신증 죽', key: 'therapuetic_diet.kidney.checked6' },
  { label: '혈액투석식 밥', key: 'therapuetic_diet.kidney.checked7' },
  { label: '혈액투석식 죽', key: 'therapuetic_diet.kidney.checked8' },
  { label: '복막투석식 밥', key: 'therapuetic_diet.kidney.checked9' },
  { label: '복막투석식 죽', key: 'therapuetic_diet.kidney.checked10' },
  { label: '신장이식 후 밥', key: 'therapuetic_diet.kidney.checked11' },
  { label: '신장이식 후 죽', key: 'therapuetic_diet.kidney.checked12' },
  { label: '신부전 당뇨 밥', key: 'therapuetic_diet.kidney.checked13' },
  { label: '신부전 당뇨 죽', key: 'therapuetic_diet.kidney.checked14' },
];

const 간질환 = [
  { label: '중단백 간질환 밥', key: 'therapuetic_diet.liver.checked1' },
  { label: '중단백 간질환 죽', key: 'therapuetic_diet.liver.checked2' },
  { label: '저단백 간질환 밥', key: 'therapuetic_diet.liver.checked3' },
  { label: '저단백 간질환 죽', key: 'therapuetic_diet.liver.checked4' },
  { label: '중단백 간질환당뇨 밥', key: 'therapuetic_diet.liver.checked5' },
  { label: '중단백 간질환당뇨 죽', key: 'therapuetic_diet.liver.checked6' },
  { label: '저단백 간질환당뇨 밥', key: 'therapuetic_diet.liver.checked7' },
  { label: '저단백 간질환당뇨 죽', key: 'therapuetic_diet.liver.checked8' },
  { label: '고단백 고열량 간질환 밥', key: 'therapuetic_diet.liver.checked9' },
  { label: '고단백 고열량 간질환 죽', key: 'therapuetic_diet.liver.checked10' },
  {
    label: '고단백 고열량 간질환 당뇨 밥',
    key: 'therapuetic_diet.liver.checked11',
  },
  {
    label: '고단백 고열량 간질환 당뇨 죽',
    key: 'therapuetic_diet.liver.checked12',
  },
];

const 성분조절식 = [
  {
    label: '저칼륨밥',
    key: 'controlled_diet.checked1',
  },
  {
    label: '저칼륨죽',
    key: 'controlled_diet.checked2',
  },
  {
    label: '저칼슘밥',
    key: 'controlled_diet.checked3',
  },
  {
    label: '저칼슘죽',
    key: 'controlled_diet.checked4',
  },
  {
    label: '저칼슘미음',
    key: 'controlled_diet.checked5',
  },
  {
    label: '저퓨린밥',
    key: 'controlled_diet.checked6',
  },
  {
    label: '저퓨린죽',
    key: 'controlled_diet.checked7',
  },
  {
    label: '인제한밥',
    key: 'controlled_diet.checked8',
  },
  {
    label: '인제한죽',
    key: 'controlled_diet.checked9',
  },
  {
    label: '구리제한밥',
    key: 'controlled_diet.checked10',
  },
  {
    label: '구리제한죽',
    key: 'controlled_diet.checked11',
  },
];

const 밥종류 = [
  { label: '진밥', key: 'specifics.checked2' },
  { label: '된밥', key: 'specifics.checked3' },
  { label: '잡곡밥', key: 'specifics.checked4' },
  { label: '흰 죽', key: 'specifics.checked5' },
  { label: '쌀 미음', key: 'specifics.checked6' },
  { label: '찬 죽', key: 'specifics.checked7' },
  { label: '찬 미음', key: 'specifics.checked8' },
  { label: '치아보조 (갈아서)', key: 'specifics.checked34' },
  { label: '치아보조 (다져서)', key: 'specifics.checked35' },
];

const 추가적인 = [
  { label: '적은밥', key: 'specifics.checked1' },
  { label: '국 추가', key: 'specifics.checked9' },
  { label: '김치 많이', key: 'specifics.checked21' },
  { label: '물김치 많이', key: 'specifics.checked22' },
  { label: '반찬 많이', key: 'specifics.checked23' },
  { label: '간장 추가', key: 'specifics.checked24' },
  { label: '고추장 추가', key: 'specifics.checked25' },
  { label: '고춧가루 추가', key: 'specifics.checked26' },
  { label: '소금 추가', key: 'specifics.checked27' },
  { label: '설탕 추가', key: 'specifics.checked28' },
  { label: '미역국', key: 'specifics.checked29' },
  { label: '두유', key: 'specifics.checked30' },
  { label: '요구르트', key: 'specifics.checked31' },
];

const 제외 = [
  { label: '국만 맵지 않게', key: 'specifics.checked10' },
  { label: '맵지 않게', key: 'specifics.checked11' },
  { label: '모든 생선 제외', key: 'specifics.checked12' },
  { label: '등푸른 생선 제외', key: 'specifics.checked13' },
  { label: '해물 제외', key: 'specifics.checked14' },
  { label: '계란 제외', key: 'specifics.checked15' },
  { label: '모든 고기 제외', key: 'specifics.checked16' },
  { label: '돼지 고기 제외', key: 'specifics.checked17' },
  { label: '닭 고기 제외', key: 'specifics.checked18' },
  { label: '항상 배추 김치', key: 'specifics.checked19' },
  { label: '물김치', key: 'specifics.checked20' },
  { label: '모든 유제품 제외', key: 'specifics.checked32' },
  { label: '간식 제외', key: 'specifics.checked33' },
];

const 식성 = [
  { label: '서양식', key: 'specifics.checked36' },
  { label: '이슬람 할랄식', key: 'specifics.checked37' },
  { label: '비건식', key: 'specifics.checked38' },
  { label: '기타', key: 'specifics.checked39' },
];

const DietSelection1 = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  const [dietList, setDietList] = useState(-1);
  // const [dietList, setDietList] = useState(getValues('vascular_access'));

  return (
    <Fragment>
      <SectionTitle title="조식" />

      <RowContainer xs={12}>
        <RowContent
          title="적용 급식(조식)"
          titleRatio={1.3}
          childrenRatio={10.3}
        >
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              fullWidth
              InputProps={{ readOnly: true }}
              placeholder={getValues('dd')}
            />
            <Form.MuiCheckbox
              label={'보호자 식이'}
              defaultValue={getValues('disease_history.history.checked')}
              onChange={v => {
                setValue('disease_history.history.checked', v);
              }}
            />
          </Stack>
        </RowContent>
        <RowContent title="식사 신청"></RowContent>
        <RowContent title="" titleRatio={0.5} childrenRatio={11.5}>
          <MuiRadioGroup
            i18nKey="DIETLIST"
            values={[1, 2, 3, 4, 5]}
            disabled={disabled}
            defaultValue={dietList}
            value={dietList}
            onChange={v => {
              setValue('agree_check_01', v);
              setDietList(v);
              if (v !== 0) setValue('vascular_access_etc', '');
            }}
          />
        </RowContent>
        <RowContent title="" titleRatio={0.5} childrenRatio={11.5}>
          <MuiRadioGroup
            i18nKey="DIETLIST"
            values={[6, 7, 8, 9, 10]}
            disabled={disabled}
            defaultValue={dietList}
            value={dietList}
            onChange={v => {
              setValue('agree_check_01', v);
              setDietList(v);
              if (v !== 0) setValue('vascular_access_etc', '');
            }}
          />
        </RowContent>

        <RowContent
          title="치료식 (장질환)"
          titleRatio={1.4}
          childrenRatio={2.5}
        >
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              select
              required={false}
              disabled={disabled}
              defaultValue={getValues('operation_information.npo_status')}
              {...register('operation_information.npo_status')}
              SelectProps={{ MenuProps: { sx: { maxHeight: 150 } } }} // add this line
            >
              <MenuItem value="위 절제 밥">위 절제 밥</MenuItem>
              <MenuItem value="위 절제 죽">위 절제 죽</MenuItem>
              <MenuItem value="저 섬유 밥">저 섬유 밥</MenuItem>
              <MenuItem value="저 섬유 죽">저 섬유 죽</MenuItem>
              <MenuItem value="저 잔사 밥">저 잔사 밥</MenuItem>
              <MenuItem value="위 절제 미음">위 절제 미음</MenuItem>
              <MenuItem value="저 잔사 미음">저 잔사 미음</MenuItem>
              <MenuItem value="비만 수술 후 식사 (맑은 유동식)">
                비만 수술 후 식사 (맑은 유동식)
              </MenuItem>
              <MenuItem value="비만 수술 후 식사 (일반 유동식)">
                비만 수술 후 식사 (일반 유동식)
              </MenuItem>
            </Form.MuiTextField>
          </Stack>
        </RowContent>
        <RowContent
          title="치료식 (신장 질환)"
          titleRatio={1.4}
          childrenRatio={2.5}
        >
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              select
              required={false}
              disabled={disabled}
              defaultValue={getValues('operation_information.npo_status')}
              {...register('operation_information.npo_status')}
              SelectProps={{ MenuProps: { sx: { maxHeight: 150 } } }} // add this line
            >
              <MenuItem value="신부전 밥">신부전 밥</MenuItem>
              <MenuItem value="신부전 죽">신부전 죽</MenuItem>
              <MenuItem value="신증후군 밥">신증후군 밥</MenuItem>
              <MenuItem value="신증후군 죽">신증후군 죽</MenuItem>
              <MenuItem value="당뇨신증 밥">당뇨신증 밥</MenuItem>
              <MenuItem value="당뇨신증 죽">당뇨신증 죽</MenuItem>
              <MenuItem value="혈액투석식 밥">혈액투석식 밥</MenuItem>
              <MenuItem value="혈액투석식 죽">혈액투석식 죽</MenuItem>
              <MenuItem value="복막투석식 밥">복막투석식 밥</MenuItem>
              <MenuItem value="신장이식 후 밥">신장이식 후 밥</MenuItem>
              <MenuItem value="신장이식 후 죽">신장이식 후 죽</MenuItem>
              <MenuItem value="신부전 당뇨 밥">신부전 당뇨 밥</MenuItem>
              <MenuItem value="신부전 당뇨 죽">신부전 당뇨 죽</MenuItem>
            </Form.MuiTextField>
          </Stack>
        </RowContent>
        <RowContent
          title="치료식 (간 질환)"
          titleRatio={1.4}
          childrenRatio={2.5}
        >
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              select
              required={false}
              disabled={disabled}
              defaultValue={getValues('operation_information.npo_status')}
              {...register('operation_information.npo_status')}
              SelectProps={{ MenuProps: { sx: { maxHeight: 150 } } }} // add this line
            >
              <MenuItem value="중단백 간질환 밥">중단백 간질환 밥</MenuItem>
              <MenuItem value="중단백 간질환 죽">중단백 간질환 죽</MenuItem>
              <MenuItem value="저단백 간질환 밥">저단백 간질환 밥</MenuItem>
              <MenuItem value="저단백 간질환 죽">저단백 간질환 죽</MenuItem>
              <MenuItem value="중단백 간질환당뇨 밥">
                중단백 간질환당뇨 밥
              </MenuItem>
              <MenuItem value="중단백 간지환당뇨 죽">
                중단백 간지환당뇨 죽
              </MenuItem>
              <MenuItem value="저단백 간질환당뇨 밥">
                저단백 간질환당뇨 밥
              </MenuItem>
              <MenuItem value="저단백 간질환당뇨 죽">
                저단백 간질환당뇨 죽
              </MenuItem>
              <MenuItem value="고단백 고열량 간질환 밥">
                고단백 고열량 간질환 밥
              </MenuItem>
              <MenuItem value="고단백 고열량 간질환 죽">
                고단백 고열량 간질환 죽
              </MenuItem>
              <MenuItem value="고단백 고열량 간질환 당뇨 밥">
                고단백 고열량 간질환 당뇨 밥
              </MenuItem>
              <MenuItem value="고단백 고열량 간질환 당뇨 죽">
                고단백 고열량 간질환 당뇨 죽
              </MenuItem>
            </Form.MuiTextField>
          </Stack>
        </RowContent>
        <RowContent title="성분 조절식" titleRatio={1.4} childrenRatio={2.5}>
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              select
              required={false}
              disabled={disabled}
              defaultValue={getValues('operation_information.npo_status')}
              {...register('operation_information.npo_status')}
              SelectProps={{ MenuProps: { sx: { maxHeight: 150 } } }} // add this line
            >
              <MenuItem value="저칼륨밥">저칼륨밥</MenuItem>
              <MenuItem value="저칼륨죽">저칼륨죽</MenuItem>
              <MenuItem value="저칼슘밥">저칼슘밥</MenuItem>
              <MenuItem value="저칼슘죽">저칼슘죽</MenuItem>
              <MenuItem value="저칼슘미음">저칼슘미음</MenuItem>
              <MenuItem value="저퓨린밥">저퓨린밥</MenuItem>
              <MenuItem value="저퓨린죽">저퓨린죽</MenuItem>
              <MenuItem value="인제한밥">인제한밥</MenuItem>
              <MenuItem value="인제한죽">인제한죽</MenuItem>
              <MenuItem value="구리제한밥">구리제한밥</MenuItem>
              <MenuItem value="구리제한죽">구리제한죽</MenuItem>
            </Form.MuiTextField>
          </Stack>
        </RowContent>
        <RowContent title="선택사항" titleRatio={1.4} childrenRatio={2.5}>
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              select
              required={false}
              disabled={disabled}
              defaultValue={getValues('operation_information.npo_status')}
              {...register('operation_information.npo_status')}
              SelectProps={{ MenuProps: { sx: { maxHeight: 150 } } }} // add this line
            >
              <MenuItem value="진밥">진밥</MenuItem>
              <MenuItem value="된밥">된밥</MenuItem>
              <MenuItem value="잡곡밥">잡곡밥</MenuItem>
              <MenuItem value="흰 죽">흰 죽</MenuItem>
              <MenuItem value="쌀 미음">쌀 미음</MenuItem>
              <MenuItem value="찬 죽">찬 죽</MenuItem>
              <MenuItem value="찬 미음">흰 미음</MenuItem>
              <MenuItem value="치아보조 (갈아서)">치아보조 (갈아서)</MenuItem>
              <MenuItem value="치아보조 (다져서)">치아보조 (다져서)</MenuItem>

              <MenuItem value="적은밥">적은밥</MenuItem>
              <MenuItem value="국 추가">국 추가</MenuItem>
              <MenuItem value="김치 많이">김치 많이</MenuItem>
              <MenuItem value="물김치 많이">물김치 많이</MenuItem>
              <MenuItem value="반찬 많이">반찬 많이</MenuItem>
              <MenuItem value="간장 추가">간장 추가</MenuItem>
              <MenuItem value="고추장 추가">고추장 추가</MenuItem>
              <MenuItem value="고춧가루 추가">고춧가루 추가</MenuItem>
              <MenuItem value="소금 추가">소금 추가</MenuItem>
              <MenuItem value="설탕 추가">설탕 추가</MenuItem>
              <MenuItem value="미역국">미역국</MenuItem>
              <MenuItem value="두유">두유</MenuItem>
              <MenuItem value="요구르트">요구르트</MenuItem>
            </Form.MuiTextField>
          </Stack>
        </RowContent>
        <RowContent
          title="특이사항 (종교)"
          titleRatio={1.4}
          childrenRatio={2.5}
        >
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              select
              required={false}
              disabled={disabled}
              defaultValue={getValues('operation_information.npo_status')}
              {...register('operation_information.npo_status')}
              SelectProps={{ MenuProps: { sx: { maxHeight: 150 } } }} // add this line
            >
              <MenuItem value="서양식">서양식</MenuItem>
              <MenuItem value="이슬람 할랄식">이슬람 할랄식</MenuItem>
              <MenuItem value="비건식">비건식</MenuItem>
              <MenuItem value="기타">기타</MenuItem>
            </Form.MuiTextField>
          </Stack>
        </RowContent>

        <RowContent
          title="특이사항 (직접 입력)"
          titleRatio={1.4}
          childrenRatio={10.3}
        >
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              multiline
              minRows={3}
              required={false}
              placeholder="직접 입력"
              disabled={disabled}
              defaultValue={getValues('operation_information.npo_status')}
              {...register('operation_information.npo_status')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DietSelection1;
