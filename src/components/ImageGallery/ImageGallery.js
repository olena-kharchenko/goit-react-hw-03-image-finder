import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          key={index}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
