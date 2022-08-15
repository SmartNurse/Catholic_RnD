import { Fragment } from 'react';
import { Stack } from '@mui/material';

import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';
import SurveyCheckbox from '../components/SurveyCheckbox';

const BodyStatus = (props: FormProps) => {
  const { register, getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <Fragment>
      <SectionTitle title="신체사정" />

      <RowContainer>
        <RowContent title="순환기계">
          <SurveyRadio
            labelKey="EXIST"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="body_status.cycle.value"
            {...{ getValues, setValue }}
          />
          <SurveyCheckbox
            checkboxes={[
              { name: '흉통' },
              { name: '심계항진' },
              { name: '부정맥' },
              { name: '인공심박동기' },
              { name: '기타' },
            ]}
            defaultChecked={getValues('body_status.cycle.checked')}
            onChange={v => setValue!('body_status.cycle.checked', v)}
          />
          <SurveyInput
            required={false}
            placeholder="직접 입력"
            {...register('body_status.cycle.input')}
          />
        </RowContent>
        <RowContent title="호흡기계">
          <SurveyRadio
            labelKey="EXIST"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="body_status.breath.value"
            {...{ getValues, setValue }}
          />
          <SurveyCheckbox
            checkboxes={[
              { name: '호흡곤란' },
              { name: '기침' },
              { name: '객담' },
              { name: '객혈' },
              { name: '기타' },
            ]}
            defaultChecked={getValues('body_status.breath.checked')}
            onChange={v => setValue!('body_status.breath.checked', v)}
          />
          <SurveyInput
            required={false}
            placeholder="직접 입력"
            {...register('body_status.breath.input')}
          />
        </RowContent>
        <RowContent title="위장관계">
          <SurveyRadio
            labelKey="EXIST"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="body_status.camouflage.value"
            {...{ getValues, setValue }}
          />
          <SurveyCheckbox
            checkboxes={[
              { name: '오심' },
              { name: '구토' },
              { name: '복통' },
              { name: '연하곤란' },
              { name: '기타' },
            ]}
            defaultChecked={getValues('body_status.camouflage.checked')}
            onChange={values =>
              setValue!('body_status.camouflage.checked', values)
            }
          />
          <SurveyInput
            required={false}
            placeholder="직접 입력"
            {...register('body_status.camouflage.input')}
          />
        </RowContent>
        <RowContent title="신경계">
          <SurveyRadio
            labelKey="EXIST"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="body_status.nerve.value"
            {...{ getValues, setValue }}
          />
          <SurveyCheckbox
            checkboxes={[
              { name: '마비' },
              { name: '저림' },
              { name: '부정맥' },
              { name: '현기증' },
              { name: '기타' },
            ]}
            defaultChecked={getValues('body_status.nerve.checked')}
            onChange={values => setValue!('body_status.nerve.checked', values)}
          />
          <SurveyInput
            required={false}
            placeholder="직접 입력"
            {...register('body_status.nerve.input')}
          />
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="피부상태">
          <SurveyRadio
            labelKey="EXIST"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="body_status.skin.value"
            {...{ getValues, setValue }}
          />
          <SurveyCheckbox
            checkboxes={[
              { name: '발진' },
              { name: '소양감' },
              { name: '부종' },
              { name: '기타' },
            ]}
            defaultChecked={getValues('body_status.skin.checked')}
            onChange={values => setValue!('body_status.skin.checked', values)}
          />
          <SurveyInput
            required={false}
            placeholder="직접 입력"
            {...register('body_status.skin.input')}
          />
        </RowContent>
        <RowContent title="입원/수술력">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="body_status.operation_history.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="보조기구 유/무"
              {...register('body_status.operation_history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="최근 투약">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="body_status.medicine_history.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="보조기구 유/무"
              {...register('body_status.medicine_history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="낙상">
          <SurveyCheckbox
            checkboxes={[{ name: '시행' }]}
            defaultChecked={getValues('body_status.fall.checked')}
            onChange={values => setValue!('body_status.fall.checked', values)}
          />
        </RowContent>
        <RowContent title="욕창">
          <SurveyCheckbox
            checkboxes={[{ name: '시행' }]}
            defaultChecked={getValues('body_status.yukchang.checked')}
            onChange={values =>
              setValue!('body_status.yukchang.checked', values)
            }
          />
        </RowContent>
        <RowContent title="통증">
          <SurveyCheckbox
            checkboxes={[{ name: '시행' }]}
            defaultChecked={getValues('body_status.fain.checked')}
            onChange={values => setValue!('body_status.fain.checked', values)}
          />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default BodyStatus;
