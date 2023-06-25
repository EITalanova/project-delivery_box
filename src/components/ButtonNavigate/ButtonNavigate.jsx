import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import style from './ButtonNavigate.module.scss';

export const ButtonNavigate = ({
  pathBtnBack,
  pathBtnNext,
  textBtnNext,
  className,
  onClickNext,
}) => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <div className={className}>
      <Link
        className={cn(style.btn, style.btnBack)}
        to={pathBtnBack}
        onClick={onClickBack}
      >
        НАЗАД
      </Link>
      <Link
        className={cn(style.btn, style.btnNext)}
        to={pathBtnNext}
        onClick={onClickNext}
      >
        {textBtnNext}
      </Link>
    </div>
  );
};
