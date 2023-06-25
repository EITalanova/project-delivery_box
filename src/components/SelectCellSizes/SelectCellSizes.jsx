// import { useParams } from 'react-router-dom';
import { useState} from 'react';
import {
  // useDispatch,
  useSelector
} from 'react-redux';

import { DEVICE_UID } from 'api';
import { selectCellAvailability } from 'redux/cellAvailability/cellAvailabilitySelector';
// import { fetchCellAvailability } from 'redux/cellAvailability/cellAvailabilityThunk';

import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate';
import { Title } from 'components/Title/Title';
import { handlerCellData, sizeMappings } from 'utilites/handlerCellUtils';



import style from './SelectCellSizes.module.scss';


export const SelectCellSizes = () => {
  // const { device_uid } = useParams();
  // const dispatch = useDispatch();

  // const [id, setId] = useState(device_uid);
  // const [cellAvailability, setCellAvailability] = useState(null);
  const [choiceCell, setChoiceCell] = useState(null);

  const { cell_types } = useSelector(selectCellAvailability);

  // useEffect(() => {
  //   setCellAvailability(cell_types);
  //   setId(device_uid);
  // }, [device_uid, cell_types]);

  // useEffect(() => {
  //   dispatch(fetchCellAvailability(id));
  // }, [dispatch, id]);

  const onClick = e => {
    setChoiceCell(e.target.getAttribute('id'));
  };

  return (
    <div className={style.selectCellBox}>
      <Title text="Оберіть розмір посилки" />

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
        pathBtnBack={`/${DEVICE_UID}/packed`}
        pathBtnNext={choiceCell ? `/${DEVICE_UID}/success`: '#'}
        textBtnNext={choiceCell ? "ПІДТВЕРДИТИ" : "СПОЧАТКУ ОБЕРІТЬ РОЗМІР"}
        className={style.btnNavigateBox}
      />
    </div>
  );
};
