import errorImg from '../assets/images/error.png';
import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';
import { Title } from 'components/Title/Title';

import style from './styles/Error.module.scss';

const Error = () => {
  return (
    <div className={style.errorBox}>
      <Title text="Нажаль, ця опція наразі не є доступною :(" />
      <img className={style.errorImg} src={errorImg} alt="error" />

      <ButtonNavigate
        pathBtnBack="#"
        pathBtnNext="/"
        textBtnNext="Повернутись на головну"
        className={style.btnNavigateBox}
      />
    </div>
  );
};

export default Error;
