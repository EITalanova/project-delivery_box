import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCellAvailability } from '../../redux/cellAvailability/cellAvailabilitySelector';
import { fetchCellAvailability } from '../../redux/cellAvailability/cellAvailabilityThunk';

import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';
import { Title } from 'components/Title/Title';
import { handlerCellData, sizeMappings } from 'utilites/handlerCellUtils';
import { DEVICE_UID } from 'configs';
import style from './SelectCellSizes.module.scss';

export const SelectCellSizes = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState(DEVICE_UID);
  const [cellAvailability, setCellAvailability] = useState([]);
  const [choiceCell, setChoiceCell] = useState(null);

  const { cell_types } = useSelector(selectCellAvailability);

  useEffect(() => {
    setCellAvailability(cell_types);
    setId(DEVICE_UID);
    // eslint-disable-next-line
  }, [DEVICE_UID, cell_types]);

  useEffect(() => {
    dispatch(fetchCellAvailability(id));
  }, [dispatch, id]);

  const onClick = e => {
    setChoiceCell(e.target.getAttribute('id'));
  };

  return (
    <div className={style.selectCellBox}>
      <Title text="Оберіть розмір посилки" />

      {cellAvailability && (
        <ul className={style.cellBox}>
          {handlerCellData(cellAvailability, sizeMappings).map(
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
                <img
                  alt={name}
                  src={icon}
                  className={style.cellSvg}
                  id={type}
                />

                <div className={style.cellTextBox} id={type}>
                  <h3 className={style.cellTextTitle} id={type}>
                    {name}
                  </h3>
                  <p className={style.cellTextDiscription} id={type}>
                    {cellWidth}x{cellHeight}см
                  </p>
                </div>
              </li>
            )
          )}
        </ul>
      )}

      <ButtonNavigate
        pathBtnBack={`/${DEVICE_UID}/packed`}
        pathBtnNext={choiceCell ? `/${DEVICE_UID}/success` : '#'}
        textBtnNext={choiceCell ? 'ПІДТВЕРДИТИ' : 'СПОЧАТКУ ОБЕРІТЬ РОЗМІР'}
        className={style.btnNavigateBox}
      />
    </div>
  );
};
