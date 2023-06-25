import { Link } from 'react-router-dom';

import { Title } from 'components/Title/Title';

import packageImg from '../../assets/images/package.png';
import postamatImg from '../../assets/images/postamat.png';

import style from './SendOptions.module.scss';

export const SendOptions = () => {
    const device_uid = '4670a76-6022-4df5-ac1d-68f88589c904';

  return (
    <>
      <h1 className={style.homeTitle}>Вітаємо вас!</h1>
            <Title text="Що відправлятимемо сьогодні?" />
      <ul className={style.homeOptionsBox}>
        <li className={style.homeOption}>
          <Link to={`/${device_uid}/packed`}  className={style.homeOptionsLink}>
            <img src={postamatImg} alt="Send option" />
            <p className={style.homeOptionsText}>
              Надіслати посилку через поштомат
            </p>
          </Link>
        </li>
        <li className={style.homeOption}>
          <Link to="*" className={style.homeOptionsLink}>
            <img src={packageImg} alt="Send option" />
            <p className={style.homeOptionsText}>
              Повернення до інтернет магазину
            </p>
          </Link>
        </li>
      </ul>
    </>
  );
};
