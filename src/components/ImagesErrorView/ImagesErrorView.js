import { toast } from 'react-toastify';

function ImagesErrorView({ message }) {
  toast.error(message);
  return (
    <div role="alert">
      {/* <img src={errorImage} width="240" alt="sadcat" /> */}
      <p>{message}</p>
    </div>
  );
}

export default ImagesErrorView;
