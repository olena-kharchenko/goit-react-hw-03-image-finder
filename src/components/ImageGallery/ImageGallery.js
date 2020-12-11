import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images }) {
  console.log(images);
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem src={image.webformatURL} />
      ))}
    </ul>
  );
}

export default ImageGallery;
