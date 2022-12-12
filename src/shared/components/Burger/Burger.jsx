import GetSvg from '../GetSvg';
import s from './Burger.module.scss';

const Burger = ({open}) => {
  return (
    <button className={s.burger} onClick={open}>
      <GetSvg name="icon-burger" className={s.icon} />
    </button>
  );
};

export default Burger;
