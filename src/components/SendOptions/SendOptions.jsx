import { Link } from 'react-router-dom';

import packageImg from '../../assets/images/package.png';
import postamatImg from '../../assets/images/postamat.png';

import style from './SendOptions.module.scss';

export const SendOptions = () => {
  return (
    <>
      <h1 className={style.homeTitle}>Вітаємо вас!</h1>
      <h2 className={style.homeDiscription}>Що відправлятимемо сьогодні?</h2>
      <ul className={style.homeOptionsBox}>
        <li className={style.homeOption}>
          <Link to="/:device_uid/packed" className={style.homeOptionsLink}>
            <img src={postamatImg} alt="Send option image" />
            <p className={style.homeOptionsText}>
              Надіслати посилку через поштомат
            </p>
          </Link>
        </li>
        <li className={style.homeOption}>
          <Link to="*" className={style.homeOptionsLink}>
            <img src={packageImg} alt="Send option image" />
            <p className={style.homeOptionsText}>
              Повернення до інтернет магазину
            </p>
          </Link>
        </li>
      </ul>
    </>
  );
};
