import {useDispatch} from 'react-redux';
import {setErrorNotif} from '../store';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

export const ShowError = (isError: boolean, error: any) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  let message = error?.data?.message ?? '';

  if (message.length <= 0) {
    message = error?.message ?? '';
  }

  if (message.length <= 0) {
    message = t('defaultError');
  }

  useEffect(() => {
    if (isError) {
      dispatch(
        setErrorNotif({
          message: message,
          isError: true,
        }),
      );
    }
  }, [isError, dispatch, message]);
};
