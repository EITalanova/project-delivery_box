import successImg from '../../assets/images/success.png';

import { Title } from 'components/Title/Title';

import style from './Success.module.scss';

const Success = () => {
  return (
    <div className={style.successBox}>
      <Title text="Вітаємо! Ви успішно завершили всі дії :)" />
      <img className={style.successImg} src={successImg} alt="success" />
    </div>
  );
};

export default Success;
