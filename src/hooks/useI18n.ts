import { useIntl } from 'react-intl';
import locale from '../locale';

export type Ti18nId = keyof typeof locale.ko;

/**
 * 값을 i18n 언어로 변경함
 */
const useI18n = () => {
  const { formatMessage } = useIntl();

  return (id: Ti18nId, value?: any) => {
    const message = formatMessage({ id: id?.toUpperCase() }, value);
    if (message === id) return '';
    return message;
  };
};

export default useI18n;
