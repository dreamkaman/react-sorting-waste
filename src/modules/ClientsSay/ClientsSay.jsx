import ClientsSaySlider from 'shared/components/ClientsSaySlider';

import GetSvg from 'shared/components/GetSvg';

import s from './ClientsSay.module.scss';

const ClientsSay = () => {
  return (
    <section className={'container'}>
      <div className={s.wrapper}>
        <h2 className={s.title}>TESTIMONIALS</h2>
        <p className={s.paragraph}>What Clients Say</p>
        <ClientsSaySlider />
      </div>

      {/* <div className={s.iconWrapper}>
        <GetSvg name={'icon-truck'} className={s.truckIcon} />
      </div> */}
    </section>
  );
};

export default ClientsSay;
