import { Link } from 'react-router-dom';
import cn from 'classnames';

import style from './ButtonNavigate.module.scss';

export const ButtonNavigate = ({
  pathBtnBack,
  pathBtnNext,
  textBtnNext,
  className,
}) => {
  return (
    <div className={className}>
      <Link className={cn(style.btn, style.btnBack)} to={pathBtnBack}>
        НАЗАД
      </Link>
      <Link className={cn(style.btn, style.btnNext)} to={pathBtnNext}>
        {textBtnNext}
      </Link>
    </div>
  );
};
