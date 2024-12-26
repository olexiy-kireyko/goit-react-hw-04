import Modal from 'react-modal';
import s from './ImageModal.module.css';

const ImageModal = ({
  imageModalID,
  images,
  isOpen,
  onRequestClose,
  style,
}) => {
  const [showImage] = images.filter(image => image.id === imageModalID);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style}
      shouldCloseOnOverlayClick={true}
    >
      {showImage && (
        <div className={s.image_modal}>
          <img
            className={s.image_modal_img}
            src={showImage.urls.regular}
            alt={showImage.description}
          />
          <ul className={s.image_modal_list}>
            <li>
              Author:
              <span className={s.image_modal_info}>
                {showImage.user.first_name} {showImage.user.last_name}
              </span>
            </li>

            <li>
              Likes:
              <span className={s.image_modal_info}>{showImage.likes}</span>
            </li>

            <li>
              Description:
              <span className={s.image_modal_info}>
                {showImage.alt_description}
              </span>
            </li>
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
