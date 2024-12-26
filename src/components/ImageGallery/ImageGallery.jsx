import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal, defineImageModalID }) => {
  const handleClick = id => {
    defineImageModalID(id);
    openModal();
  };
  return (
    <ul className={s.image_gallery}>
      {images.map(image => {
        return (
          <li
            className={s.image_gallery_item}
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
