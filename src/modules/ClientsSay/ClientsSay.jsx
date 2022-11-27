import GetSvg from 'shared/components/GetSvg';

import s from './ClientsSay.module.scss';

const ClientsSay = () => {
  return (
    <div className={s.iconWrapper}>
      <GetSvg name={'icon-truck'} className={s.truckIcon} />
    </div>
  );
};

export default ClientsSay;
