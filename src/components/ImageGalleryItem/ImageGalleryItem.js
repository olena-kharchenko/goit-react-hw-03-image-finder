function ImageGalleryItem({ src, alt }) {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} className="ImageGalleryItemImage" />
    </li>
  );
}

export default ImageGalleryItem;
