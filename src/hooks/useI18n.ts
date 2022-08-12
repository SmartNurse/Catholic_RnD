import { useIntl } from 'react-intl';
import locale from '../locale';

/**
 * 값을 i18n 언어로 변경함
 */
const useI18n = () => {
  const { formatMessage } = useIntl();

  return (id: keyof typeof locale.ko) => {
    const message = formatMessage({ id: id?.toUpperCase() });
    if (message === id) return '';

    return message;
  };
};

export default useI18n;
