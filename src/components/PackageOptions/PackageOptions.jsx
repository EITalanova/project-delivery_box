import boxImg from '../../assets/images/box.png';
import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';

import style from './PackageOptions.module.scss';

export const PackageOptions = () => {
  return (
    <>
      <h2 className={style.packageTitle}>
        Відправлення має бути надійно упаковане
      </h2>
      <div className={style.packageBox}>
        <img src={boxImg} alt="Box image" className={style.packageImg} />
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
          pathBtnBack="/:device_uid"
          pathBtnNext="/:device_uid/cellsize"
          textBtnNext="Я ДОБРЕ УПАКОВАВ"
        />

    </>
  );
};
