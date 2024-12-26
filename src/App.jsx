import { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './images-api';

const CUSTOM_STYLES = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgb(66, 52, 52)',
  },
};

Modal.setAppElement('#root');

function App() {
  const [isOpenLoader, setIsOpenLoader] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageModalID, setImageModalID] = useState(null);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSubmit = value => {
    setSearchValue(value);
    setImages([]);
    setPage(1);
  };

  const onClickLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const defineImageModalID = value => {
    setImageModalID(value);
  };

  const btnRef = useRef();

  useEffect(() => {
    if (images.length > 0) {
      btnRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [images]);

  useEffect(() => {
    if (searchValue) {
      async function getImage() {
        try {
          setIsOpenError(false);
          setIsOpenLoader(true);
          const response = await fetchImages(page, searchValue);
          if (page === 1) {
            setMaxPage(response.total_pages);
          }
          setImages(prev => [...prev, ...response.results]);
        } catch (err) {
          setIsOpenError(true);
        } finally {
          setIsOpenLoader(false);
        }
      }
      getImage();
    }
  }, [searchValue, page]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 ? (
        <ImageGallery
          images={images}
          openModal={openModal}
          defineImageModalID={defineImageModalID}
        />
      ) : (
        isOpenError && <ErrorMessage />
      )}
      {isOpenLoader && <Loader />}
      {images.length > 0 && maxPage > page && (
        <LoadMoreBtn ref={btnRef} onClickLoadMore={onClickLoadMore} />
      )}

      <ImageModal
        imageModalID={imageModalID}
        images={images}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={CUSTOM_STYLES}
      />
    </>
  );
}

export default App;