import * as React from 'react';
import { Fragment, useState } from 'react';

import { MenuItem, Stack, TextField } from '@mui/material';

import MuiRadioGroup from './MuiRadioGroup';
import MuiCheckbox from './MuiCheckbox';

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

const DietSelection1 = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  const [dietList, setDietList] = useState(getValues('break_fast.basic_meal'));

  const checks = [
    { label: 'NPO', key: 'break_fast.basic_meal', number: 1 },
    { label: 'SOW', key: 'break_fast.basic_meal', number: 2 },
    { label: 'AQ', key: 'break_fast.basic_meal', number: 3 },
    { label: 'LD', key: 'break_fast.basic_meal', number: 4 },
    { label: 'SD', key: 'break_fast.basic_meal', number: 5 },
    { label: 'SBD', key: 'break_fast.basic_meal', number: 6 },
    { label: 'RD', key: 'break_fast.basic_meal', number: 7 },
    { label: 'TD', key: 'break_fast.basic_meal', number: 8 },
    { label: '치료식', key: 'break_fast.basic_meal', number: 9 },
    { label: '소아', key: 'break_fast.basic_meal', number: 10 },
  ];

  const 식사신청 = checks
    .map(v => (Number(getValues(v.key)) === v.number ? v.label : ''))
    .filter(v => v !== '');

  const 적용급식 = [
    식사신청,
    getValues('break_fast.guardian_meal'),
    getValues('break_fast.therapeutic_intestinal'),
    getValues('break_fast.therapeutic_kidney'),
    getValues('break_fast.therapeutic_liver'),
    getValues('break_fast.controlled_diet'),
    getValues('break_fast.specifics1'),
    getValues('break_fast.specifics2'),
    getValues('break_fast.specifics_etc'),
  ];

  const 적용급식필터링 = 적용급식.filter(item => item).join(', ');

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
              placeholder={적용급식필터링}
            />
            <MuiCheckbox
              disabled={disabled}
              label={'보호자 식이'}
              defaultValue={
                Boolean(getValues('break_fast.guardian_meal'))
                  ? ['보호자 식이']
                  : []
              }
              onChange={(_, checked) => {
                setValue('break_fast.guardian_meal', checked);
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
              setValue('break_fast.basic_meal', v);
              setDietList(v);
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
              setValue('break_fast.basic_meal', v);
              setDietList(v);
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
              defaultValue={getValues('break_fast.therapeutic_intestinal')}
              {...register('break_fast.therapeutic_intestinal')}
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
              defaultValue={getValues('break_fast.therapeutic_kidney')}
              {...register('break_fast.therapeutic_kidney')}
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
              defaultValue={getValues('break_fast.therapeutic_liver')}
              {...register('break_fast.therapeutic_liver')}
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
              defaultValue={getValues('break_fast.controlled_diet')}
              {...register('break_fast.controlled_diet')}
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
              defaultValue={getValues('break_fast.specifics1')}
              {...register('break_fast.specifics1')}
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
              defaultValue={getValues('break_fast.specifics2')}
              {...register('break_fast.specifics2')}
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
              defaultValue={getValues('break_fast.specifics_etc')}
              {...register('break_fast.specifics_etc')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DietSelection1;
