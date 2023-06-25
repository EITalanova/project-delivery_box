import errorImg from '../assets/images/error.png';
import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';

import style from './style/Error.module.scss';

const Error = () => {
    return (
        <div className = {style.errorBox}>
      <h2 className={style.errorTitle}>
        Нажаль, ця опція наразі не є доступною :(
      </h2>
      <img className={style.errorImg} src={errorImg} alt="error" />

      <ButtonNavigate
        pathBtnBack="#"
        pathBtnNext="#"
        textBtnNext="Повернутись на головну"
        className={style.btnNavigateBox}
      />
    </div>
  );
};

export default Error;
