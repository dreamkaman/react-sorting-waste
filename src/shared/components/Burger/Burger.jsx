import GetSvg from '../GetSvg';
import s from './Burger.module.scss';

const Burger = () => {
  // return <button className={s.burger}>
  //   <GetSvg({'burger', 10, 10}) />
  // </button>;
  return <GetSvg name="icon-burger" className={s.icon} />;
};

export default Burger;
