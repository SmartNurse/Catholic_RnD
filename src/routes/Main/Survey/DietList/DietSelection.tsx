import * as React from 'react';

import {
  Typography,
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
} from '@mui/material';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';
import { Theme, useTheme } from '@mui/material/styles';

import SectionTitle from '../components/SectionTitle';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 230,
    },
  },
};

const DietSelection = (props: Props) => {
  const theme = useTheme();
  const { disabled, register, getValues, setValue } = props;

  // 기본식사
  const [basic, setBasic] = React.useState<string[]>([]);

  const basicHandleChange = (event: SelectChangeEvent<typeof basic>) => {
    const {
      target: { value },
    } = event;
    setBasic(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // 치료식(장)
  const [therapueticGstric, setTherapueticGastric] = React.useState<string[]>(
    []
  );

  const therapueticGastricHandleChange = (
    event: SelectChangeEvent<typeof therapueticGstric>
  ) => {
    const {
      target: { value },
    } = event;
    setTherapueticGastric(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // 치료식(신장)
  const [therapueticKidney, setTherapueticKidney] = React.useState<string[]>(
    []
  );

  const therapueticKidneyHandleChange = (
    event: SelectChangeEvent<typeof therapueticKidney>
  ) => {
    const {
      target: { value },
    } = event;
    setTherapueticKidney(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  // 치료식(간)
  const [therapueticLiver, setTherapueticLiver] = React.useState<string[]>([]);

  const therapueticLiverHandleChange = (
    event: SelectChangeEvent<typeof therapueticLiver>
  ) => {
    const {
      target: { value },
    } = event;
    setTherapueticLiver(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // 성분조절식
  const [controlled, setControlled] = React.useState<string[]>([]);

  const controlledHandleChange = (
    event: SelectChangeEvent<typeof controlled>
  ) => {
    const {
      target: { value },
    } = event;
    setControlled(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // 특이사항 선택 목록1
  const [specifics1, setSpecifics1] = React.useState<string[]>([]);

  const specificsHandleChange1 = (
    event: SelectChangeEvent<typeof specifics1>
  ) => {
    const {
      target: { value },
    } = event;
    setSpecifics1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // 특이사항 선택 목록2
  const [specifics2, setSpecifics2] = React.useState<string[]>([]);

  const specificsHandleChange2 = (
    event: SelectChangeEvent<typeof specifics2>
  ) => {
    const {
      target: { value },
    } = event;
    setSpecifics2(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // 특이사항 선택 목록3
  const [specifics3, setSpecifics3] = React.useState<string[]>([]);

  const specificsHandleChange3 = (
    event: SelectChangeEvent<typeof specifics3>
  ) => {
    const {
      target: { value },
    } = event;
    setSpecifics3(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // 특이사항 선택 목록4
  const [specifics4, setSpecifics4] = React.useState<string[]>([]);

  const specificsHandleChange4 = (
    event: SelectChangeEvent<typeof specifics4>
  ) => {
    const {
      target: { value },
    } = event;
    setSpecifics4(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // 특이사항 선택 목록5
  const [specifics5, setSpecifics5] = React.useState<string[]>([]);

  const specificsHandleChange5 = (
    event: SelectChangeEvent<typeof specifics5>
  ) => {
    const {
      target: { value },
    } = event;
    setSpecifics5(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <SectionTitle title={'조식'} />
      <Box
        sx={{
          width: '90%',
          margin: '48px auto 0px auto',
          display: 'flex',
          gap: '16%',
        }}
      >
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">기본 식사</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="basic_meal"
            multiple
            value={basic}
            onChange={e => {
              basicHandleChange(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="기본식사" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {기본식사.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox checked={basic.indexOf(name.label) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ width: '500px', display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '24px',
              paddingRight: '48px',
            }}
          >
            1일 합계 칼로리:
          </Typography>
          <Form.MuiTextField
            placeholder="직접 입력"
            {...register('select_meal.calorie')}
            sx={{ width: '100px' }}
            required={false}
          />
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '24px',
              paddingLeft: '12px',
            }}
          >
            KCAL/day
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '48px auto 0px auto',
          display: 'flex',
          gap: '16%',
        }}
      >
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">치료식 (장질환)</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="therapuetic_diet"
            multiple
            value={therapueticGstric}
            onChange={e => {
              therapueticGastricHandleChange(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="치료식(장)" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {장질환.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox
                  checked={therapueticGstric.indexOf(name.label) > -1}
                />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">
            치료식 (신장질환)
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="controlled_diet"
            multiple
            value={therapueticKidney}
            onChange={e => {
              therapueticKidneyHandleChange(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="치료식(신장)" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {신장질환.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox
                  checked={therapueticKidney.indexOf(name.label) > -1}
                />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">치료식 (간질환)</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specifics"
            multiple
            value={therapueticLiver}
            onChange={e => {
              therapueticLiverHandleChange(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="치료식(간)" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {간질환.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox checked={therapueticLiver.indexOf(name.label) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '48px auto 0px auto',
          display: 'flex',
          gap: '16%',
        }}
      >
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">성분조절식</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specifics"
            multiple
            value={controlled}
            onChange={e => {
              controlledHandleChange(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="성분조절식" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {성분조절식.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox checked={controlled.indexOf(name.label) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '48px auto 0px auto',
          display: 'flex',
          gap: '16%',
        }}
      >
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">
            특이사항 선택 목록(밥)
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specifics1"
            multiple
            value={specifics1}
            onChange={e => {
              specificsHandleChange1(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="특이사항1" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {밥종류.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox checked={specifics1.indexOf(name.label) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">
            특이사항 선택 목록(양)
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specifics2"
            multiple
            value={specifics2}
            onChange={e => {
              specificsHandleChange2(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="특이사항2" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {추가적인.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox checked={specifics2.indexOf(name.label) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">
            특이사항 선택 목록(제외)
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specifics3"
            multiple
            value={specifics3}
            onChange={e => {
              specificsHandleChange3(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="특이사항3" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {제외.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox checked={specifics3.indexOf(name.label) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '48px auto 0px auto',
          display: 'flex',
          gap: '16%',
        }}
      >
        <FormControl sx={{ m: 1, width: 230 }}>
          <InputLabel id="demo-multiple-name-label">
            특이사항 선택 목록(종교 및 기타)
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specifics4"
            multiple
            value={specifics4}
            onChange={e => {
              specificsHandleChange4(e);
              // setValue('set',e.target.value)
            }}
            input={<OutlinedInput label="특이사항4" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {식성.map(name => (
              <MenuItem key={name.label} value={name.label}>
                <Checkbox checked={specifics4.indexOf(name.label) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box
          sx={{
            width: '230px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Form.MuiTextField
            disabled={specifics4.includes('기타') ? false : true}
            multiline
            minRows={2}
            maxRows={5}
            placeholder="기타 (직접 입력)"
            {...register('select_meal.calorie')}
            sx={{ width: '230px' }}
            required={false}
          />
        </Box>
      </Box>
    </>
  );
};

export default DietSelection;
