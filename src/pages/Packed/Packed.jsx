import { nanoid } from '@reduxjs/toolkit';

import boxImg from '../../assets/images/box.png';
import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';
import { Title } from 'components/Title/Title';
import { DEVICE_UID } from 'configs';
import instruction from './data.json';

import style from './PackageOptions.module.scss';

const Packed = () => {
  return (
    <>
      <Title text="Відправлення має бути надійно упаковане" />
      <div className={style.packageBox}>
        <img src={boxImg} alt="Box" className={style.packageImg} />
        <ol className={style.packageInstruction}>
          {instruction.steps.map(step => (
            <li key={nanoid()}>{step}</li>
          ))}
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

export default Packed;
