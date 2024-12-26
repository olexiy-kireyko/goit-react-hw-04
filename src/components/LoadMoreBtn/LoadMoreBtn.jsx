import { forwardRef } from 'react';
import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = forwardRef(function LoadMoreBtn(props, ref) {
  const { onClickLoadMore } = props;
  return (
    <button
      className={s.loadmore_btn}
      type="button"
      ref={ref}
      onClick={onClickLoadMore}
    >
      Load more
    </button>
  );
});

export default LoadMoreBtn;
