import successImg from '../assets/images/success.png';
import style from './style/Success.module.scss';

const Success = () => {
  return (
    <div className={style.successBox}>
      <h2 className={style.successTitle}>
        Вітаємо! Ви успішно завершили всі дії :)
      </h2>
      <img className={style.successImg} src={successImg} alt="success" />
    </div>
  );
};

export default Success;
