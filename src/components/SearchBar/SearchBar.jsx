import { toast } from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.search.value.trim();
    if (searchValue === '') {
      toast.error('You must enter a text for search!!!');
      return;
    }
    onSubmit(searchValue.toLowerCase());
    form.reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={onHandleSubmit} className={s.header_form}>
        <input
          className={s.header_input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.header_btn} type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
