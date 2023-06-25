import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCellAvailability } from 'redux/cellAvailability/cellAvailabilitySelector';
import { fetchCellAvailability } from 'redux/cellAvailability/cellAvailabilityThunk';

import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';

import cellS from '../../assets/images/cellS.png';
import cellL from '../../assets/images/cellL.png';
import cellM from '../../assets/images/cellM.png';
import cellXS from '../../assets/images/cellXS.png';
import cellXXS from '../../assets/images/cellXXS.png';
import cellXXXL from '../../assets/images/cellXXXL.png';
import cellXXL from '../../assets/images/cellXXL.png';
import cellXL from '../../assets/images/cellXL.png';

import style from './SelectCellSizes.module.scss';


export const SelectCellSizes = () => {
  const { device_uid } = useParams();
  const dispatch = useDispatch();

  const [id, setId] = useState(device_uid);
  const [cellAvailability, setCellAvailability] = useState(null);
  const [choiceCell, setChoiceCell] = useState(null);

  const { cell_types } = useSelector(selectCellAvailability);

  // useEffect(() => {
  //   setCellAvailability(cell_types);
  //   setId(device_uid);
  // }, [device_uid, cell_types]);

  // useEffect(() => {
  //   dispatch(fetchCellAvailability(id));
  // }, [dispatch, id]);

  const handlerCellData = (cells, sizeMappings) => {
    const newCells = cells
      .filter(cell => Object.keys(sizeMappings).includes(cell.type))
      .sort((a, b) => {
        const areaA = a.params.height * a.params.width;
        const areaB = b.params.height * b.params.width;

        if (areaA === areaB) {
          return b.params.width - a.params.width;
        }

        return areaA - areaB;
      });

    console.log(newCells);

    return newCells.map(cell => ({
      ...cell,
      name: sizeMappings[cell.type].name,
      isAvailable: cell.has_empty,
      cellWidth: Math.round(cell.params.width / 10),
      cellHeight: Math.round(cell.params.height / 10),
      height: sizeMappings[cell.type].height,
      width: sizeMappings[cell.type].width,
      icon: sizeMappings[cell.type].icon,
    }));
  };
  const sizeMappings = {
    '200.0x110.0x405.0': { name: 'XXS', height: 80, width: 186, icon: cellXXS },
    '200.0x160.0x405.0': { name: 'XS', height: 116, width: 186, icon: cellXS },
    '380.0x110.0x405.0': { name: 'S', height: 132, width: 186, icon: cellS },
    '200.0x209.0x405.0': { name: 'M', height: 80, width: 240, icon: cellM },
    '380.0x160.0x405.0': { name: 'L', height: 116, width: 240, icon: cellL },
    '380.0x209.0x405.0': { name: 'XL', height: 132, width: 240, icon: cellXL },
    '645.0x210.0x405.0': {
      name: 'XXL',
      height: 140,
      width: 304,
      icon: cellXXL,
    },
    '645.0x365.0x405.0': {
      name: 'XXXL',
      height: 208,
      width: 304,
      icon: cellXXXL,
    },
  };

  const onClick = e => {
    setChoiceCell(e.target.getAttribute('id'));
  };

  console.log(choiceCell);

  return (
    <div className={style.selectCellBox}>
      <h2 className={style.selectCellTitle}>Оберіть розмір посилки</h2>

      <ul className={style.cellBox}>
        {handlerCellData(cell_types, sizeMappings).map(
          ({
            type,
            height,
            name,
            icon,
            cellWidth,
            cellHeight,
            width,
            isAvailable,
          }) => (
            <li
              onClick={onClick}
              style={{
                height: `${height}px`,
                width: `${width}px`,
              }}
              className={
                choiceCell === type
                  ? style.cellEllIsChoice
                  : isAvailable
                  ? style.cellEll
                  : style.cellEllNotAvailable
              }
              key={type}
              id={type}
            >
              <img alt={name} src={icon} className={style.cellSvg} />

              <div className={style.cellTextBox}>
                <h3 className={style.cellTextTitle}>{name}</h3>
                <p className={style.cellTextDiscription}>
                  {cellWidth}x{cellHeight}см
                </p>
              </div>
            </li>
          )
        )}
      </ul>

      <ButtonNavigate
        pathBtnBack="/packed"
        pathBtnNext={choiceCell ? ':device_uid/success' : 'null'}
        textBtnNext={choiceCell ? "ПІДТВЕРДИТИ" : "СПОЧАТКУ ОБЕРІТЬ РОЗМІР"}
        className={style.btnNavigateBox}
      />
    </div>
  );
};
