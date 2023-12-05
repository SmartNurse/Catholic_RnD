import { useSnackbar } from 'notistack';
import useI18n, { Ti18nId } from './useI18n';

const useNotification = () => {
  const i18n = useI18n();
  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = (message: string) => {
    enqueueSnackbar(message, { variant: 'success' });
  };

  const onResultCode = (rc: number) => {
    // 유효한 에러코드
    const errorCodes = [100, 101, 102, 104, 105, 106, 107, 108, 201, 202, 702];
    // 에러 메시지
    const message = errorCodes.includes(rc)
      ? i18n(`ERROR.CODE.${rc}` as Ti18nId)
      : i18n(`ERROR.CODE.0`, { rc });

    return enqueueSnackbar(message, { variant: 'error' });
  };

  const onFail = (message: string, e: any) => {
    enqueueSnackbar(`${message} 잠시 후 다시 시도해주세요 \n오류내용: ${e}`, {
      variant: 'error',
    });
  };

  const onBeforeSearch = (message: string) => {
    enqueueSnackbar(`${message}\n년도와 정렬순을 정해 조회버튼을 눌러주세요.`, {
      variant: 'error',
    });
  };

  const onRequired = (id: Ti18nId) => {
    enqueueSnackbar(i18n(id), { variant: 'error' });
  };

  return { onSuccess, onFail, onResultCode, onRequired, onBeforeSearch };
};

export default useNotification;
