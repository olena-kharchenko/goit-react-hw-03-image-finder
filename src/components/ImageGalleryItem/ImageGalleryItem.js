function ImageGalleryItem({ src }) {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt="" className="ImageGalleryItemImage" />
    </li>
  );
}

export default ImageGalleryItem;
