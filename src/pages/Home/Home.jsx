import { Link } from 'react-router-dom';

import { DEVICE_UID } from 'configs';
import { Title } from 'components/Title/Title';

import packageImg from '../../assets/images/package.png';
import postamatImg from '../../assets/images/postamat.png';

import style from './Home.module.scss';
const Home = () => {
  return (
    <>
      <h1 className={style.homeTitle}>Вітаємо вас!</h1>
      <Title text="Що відправлятимемо сьогодні?" />
      <ul className={style.homeOptionsBox}>
        <li className={style.homeOption}>
          <Link to={`/${DEVICE_UID}/packed`} className={style.homeOptionsLink}>
            <img src={postamatImg} alt="Send option" />
            <p className={style.homeOptionsText}>
              Надіслати посилку через поштомат
            </p>
          </Link>
        </li>
        <li className={style.homeOption}>
          <Link to="return" className={style.homeOptionsLink}>
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

export default Home;