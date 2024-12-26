import { Bars } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <Bars
      height="40"
      width="40"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperClass={s.loader}
      visible={true}
    />
  );
};
export default Loader;
