import boxImg from '../../assets/images/box.png';
import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';
import { Title } from 'components/Title/Title';
import { DEVICE_UID } from 'api';

import style from './PackageOptions.module.scss';

export const PackageOptions = () => {
  return (
    <>
      <Title text="Відправлення має бути надійно упаковане" />
      <div className={style.packageBox}>
        <img src={boxImg} alt="Box" className={style.packageImg} />
        <ol className={style.packageInstruction}>
          <li>
            Упакуйте товар у коробку чи пакет. На упаковці не повинно бути
            сторонніх наклейок та етикеток;
          </li>
          <li>
            Заклейте упаковку скотчем, щоб не було доступу до вкладених
            предметів;
          </li>
        </ol>
      </div>

      <ButtonNavigate
        className={style.btnNavigateBox}
        pathBtnBack="/"
        pathBtnNext={`/${DEVICE_UID}/cellsize`}
        textBtnNext="Я ДОБРЕ УПАКОВАВ"
      />
    </>
  );
};
