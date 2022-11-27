import GetSvg from '../GetSvg';
import s from './Burger.module.scss';

const Burger = () => {
  return (
    <button className={s.burger}>
      <GetSvg name="icon-burger" className={s.icon} />
    </button>
  );
};

export default Burger;
