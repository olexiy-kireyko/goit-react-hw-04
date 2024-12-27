import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { forwardRef } from 'react';

const ImageGallery = forwardRef(function ImageGallery(props, ref) {
  const { images, openModal, defineImageModalID } = props;

  const handleClick = id => {
    defineImageModalID(id);
    openModal();
  };
  return (
    <ul ref={ref} className={s.image_gallery}>
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
});
export default ImageGallery;
