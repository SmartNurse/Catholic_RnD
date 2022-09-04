import { Fragment } from 'react';

import useI18n from '../../../../hooks/useI18n';
import RecordContent from './RecordContent';
import RecordTitle from './RecordTitle';
import { INursingRecord } from '../../../../apis/main/type';

export interface IRecord extends INursingRecord {
  nurseName: string;
  actionButtons: React.ReactNode;
}

const RecordItem = (props: IRecord) => {
  const i18n = useI18n();
  const { content, record_type, ...titleProps } = props;

  const title = i18n(`RECORD.${record_type}`);
  const type = i18n(`RECORD.TYPE.${record_type}`);

  const contents = JSON.parse(content);
  const contentKeys = Object.keys(contents) as any[];

  return (
    <Fragment>
      <RecordTitle title={title} {...titleProps} />
      {contentKeys.map(contentKey => (
        <RecordContent
          key={contentKey}
          title={i18n(`${type}.${contentKey}` as any)}
          content={contents[contentKey]}
        />
      ))}
    </Fragment>
  );
};

export default RecordItem;
