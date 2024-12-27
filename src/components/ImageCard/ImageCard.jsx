import s from './ImageCard.module.css';

const ImageCard = ({ image, openModal, defineImageModalID }) => {
  const handleClick = id => {
    defineImageModalID(id);
    openModal();
  };
  return (
    <div className={s.image_card}>
      <img
        className={s.image_card_img}
        src={image.urls.small}
        alt={image.description}
        onClick={() => handleClick(image.id)}
      />
    </div>
  );
};
export default ImageCard;
