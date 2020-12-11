import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem src={image.webformatURL} key={image.id} />
      ))}
    </ul>
  );
}

export default ImageGallery;
