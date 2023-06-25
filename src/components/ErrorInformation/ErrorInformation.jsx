import { ReactComponent as ErrorImg } from '../../assets/icon/error.svg';
import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';

import style from './ErrorInformation.module.scss';

const ErrorInformation = () => {
  return (
    <div className={style.errorBox}>
      <ErrorImg />
      <h2 className={style.errorTitle}>Нажаль, нічого не знайдено</h2>

      <ButtonNavigate
        pathBtnBack="/"
        pathBtnNext="/"
        textBtnNext="Повернутись на головну"
        className={style.btnNavigateBox}
      />
    </div>
  );
};

export default ErrorInformation;
