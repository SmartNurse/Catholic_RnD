import { Fragment } from 'react';
import { List, Typography, useTheme } from '@mui/material';

import useI18n from 'hooks/useI18n';
import { INursingRecord } from 'apis/main/type';
// import { sxRecordItem } from 'routes/Main/style';

import RecordTitle from './RecordTitle';
import ActionButtons from './ActionButtons';

interface Props extends INursingRecord {
  activeId?: number;
  nurseName: string;
  refetch?: () => void;
}

const RecordItem = (props: Props) => {
  const { palette } = useTheme(); 
  const i18n = useI18n();
  const {
    activeId,
    nurseName,
    create_at,
    content,
    nursing_record_id,
    record_type,
    refetch,
    ...otherProps
  } = props;

  const actionButtons = refetch ? (
    <ActionButtons
      {...otherProps}
      content={content}
      record_type={record_type}
      nursing_record_id={nursing_record_id}
      refetch={refetch}
    />
  ) : null;

  const titleProps = {
    actionButtons,
    nurseName: nurseName,
    create_at: create_at,
    record_time: props.record_time,
    title: i18n(`RECORD.${record_type}`),
  };

  const className = activeId === nursing_record_id ? 'active' : '';
  const contents = JSON.parse(content);
  const type = i18n(`RECORD.TYPE.${record_type}`);
  const contentKeys = Object.keys(contents) as any[];

  return (
    <List sx={{
      pt: 0,

      '&.active': {
        backgroundColor: palette.grey[100],
      },
      ':not(:first-of-type)': {
        mt: 2,
        px: 1,
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      },
      ':not(:last-of-type)': {
        px: 1,
      },
    }} className={className} component="ul">
      <RecordTitle {...titleProps} />
      {contentKeys.map(contentKey => (
        <Fragment key={contentKey}>
          <Typography component="li" variant="caption" fontWeight="bold">
            • {i18n(`${type}.${contentKey}` as any)}
          </Typography>
          <Typography
            component="li"
            variant="caption"
            sx={{ pl: 1, whiteSpace: 'pre-wrap' }}
          >
            {contents[contentKey]}
          </Typography>
          <br />
        </Fragment>
      ))}
    </List>
  );
};

export default RecordItem;
