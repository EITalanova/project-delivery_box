import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';

import { ReactComponent as CellS } from '../../assets/icon/cellS.svg';
import { ReactComponent as CellL } from '../../assets/icon/cellL.svg';
import { ReactComponent as CellM } from '../../assets/icon/cellM.svg';
import { ReactComponent as CellXS } from '../../assets/icon/cellXS.svg';
import { ReactComponent as CellXXS } from '../../assets/icon/cellXXS.svg';
import { ReactComponent as CellXXXL } from '../../assets/icon/cellXXXL.svg';
import { ReactComponent as CellXXL } from '../../assets/icon/cellXXL.svg';
import { ReactComponent as CellXL } from '../../assets/icon/cellXL.svg';

import style from './SelectCellSizes.module.scss';
import { selectCellAvailability } from 'redux/cellAvailability/cellAvailabilitySelector';
import { fetchCellAvailability } from 'redux/cellAvailability/cellAvailabilityThunk';

export const SelectCellSizes = () => {
 const { device_uid } = useParams();
  const dispatch = useDispatch();

  const [id, setId] = useState(device_uid);
  const [cellAvailability, setCellAvailability] = useState(null);

  const { cell_types } = useSelector(selectCellAvailability);

  console.log('ffff', cell_types);

  // useEffect(() => {
  //   setCellAvailability(cell_types);
  //   setId(device_uid);
  // }, [device_uid, cell_types]);

  // useEffect(() => {
  //   dispatch(fetchCellAvailability(id));
  // }, [dispatch, id]);


  return (
    <>
      <h2 className={style.selectCellTitle}>Оберіть розмір посилки</h2>

      <ul>
        {cell_types.map(cell => (
          <li key={cell.type}>
            <CellS
            className={style.cellSvg}
            style={{ width: '60px', height: '80px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>S</h3>
            <p className={style.cellTextDiscription}>{Math.round(cell.params.width/10)}см*{Math.round(cell.params.height/10)}см</p>
          </div>
          </li>
        ))}
        

</ul>

      {/* <div className={style.cellBox}>
        <div className={style.cellEll}>
          <CellXXS
            className={style.cellSvg}
            style={{ width: '44px', height: '42px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>XXS</h3>
            <p className={style.cellTextDiscription}>lllll</p>
          </div>
        </div>

        <div className={style.cellEll}>
          <CellXS
            className={style.cellSvg}
            style={{ width: '53px', height: '64px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>XS</h3>
            <p className={style.cellTextDiscription}>lllll</p>
          </div>
        </div>

        <div className={style.cellEll}>
          <CellS
            className={style.cellSvg}
            style={{ width: '60px', height: '80px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>S</h3>
            <p className={style.cellTextDiscription}>lllll</p>
          </div>
        </div>

        <div className={style.cellEll}>
          <CellM
            className={style.cellSvg}
            style={{ width: '68px', height: '60px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>M</h3>
            <p className={style.cellTextDiscription}>lllll</p>
          </div>
        </div>

        <div className={style.cellEll}>
          <CellL
            className={style.cellSvg}
            style={{ width: '74px', height: '92px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>L</h3>
            <p className={style.cellTextDiscription}>lllll</p>
          </div>
        </div>

        <div className={style.cellEll}>
          <CellXL
            className={style.cellSvg}
            style={{ width: '78px', height: '108px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>XL</h3>
            <p className={style.cellTextDiscription}>lllll</p>
          </div>
        </div>

        <div className={style.cellEll}>
          <CellXXL
            className={style.cellSvg}
            style={{ width: '99px', height: '116px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>XXL</h3>
            <p className={style.cellTextDiscription}>lllll</p>
          </div>
        </div>

        <div className={style.cellEll}>
          <CellXXXL
            className={style.cellSvg}
            style={{ width: '118px', height: '174px' }}
          />

          <div className={style.cellTextBox}>
            <h3 className={style.cellTextTitle}>XXXL</h3>
            <p className={style.cellTextDiscription}>lllll</p>
          </div>
        </div>
      </div> */}

      <ButtonNavigate
        pathBtnBack="/packed"
        pathBtnNext="/ff"
        textBtnNext="ПІДТВЕРДИТИ"
        className={style.btnNavigateBox}
      />
    </>
  );
};
