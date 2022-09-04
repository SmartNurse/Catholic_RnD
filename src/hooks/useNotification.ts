import { useSnackbar } from 'notistack';
import useI18n, { Ti18nId } from './useI18n';

const useNotification = () => {
  const i18n = useI18n();
  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = (message: string) => {
    enqueueSnackbar(message, { variant: 'success' });
  };

  const onResultCode = (rc: number) => {
    const message = rc
      ? i18n(`ERROR.CODE.${rc}` as Ti18nId)
      : i18n(`ERROR.CODE.0`, { rc });
    return enqueueSnackbar(message, { variant: 'error' });
  };

  const onFail = (message: string, e: any) => {
    enqueueSnackbar(`${message} 잠시 후 다시 시도해주세요 \n오류내용: ${e}`, {
      variant: 'error',
    });
  };

  const onRequired = (id: Ti18nId) => {
    enqueueSnackbar(i18n(id), { variant: 'error' });
  };

  return { onSuccess, onFail, onResultCode, onRequired };
};

export default useNotification;
