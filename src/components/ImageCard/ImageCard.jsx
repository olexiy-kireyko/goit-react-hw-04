import s from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={s.image_card}>
      <img
        className={s.image_card_img}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
};
export default ImageCard;
