import errorImg from '../../assets/images/error.png';
import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';

import style from './ErrorInformation.module.scss';

const ErrorInformation = () => {
  return (
    <div className={style.errorBox}>
      
      <h2 className={style.errorTitle}>Нажаль, ця опція наразі не є доступною :(</h2>
      <img src={errorImg} alt="error" />

      <ButtonNavigate
        pathBtnBack="#"
        pathBtnNext="#"
        textBtnNext="Повернутись на головну"
        className={style.btnNavigateBox}
      />
    </div>
  );
};

export default ErrorInformation;
