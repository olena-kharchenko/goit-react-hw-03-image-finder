import { Component } from 'react';
import imagesAPI from '../services/images-api';
import ImagesErrorView from '../ImagesErrorView';
import ImagePendingView from '../ImagePendingView';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

class ImagesInfo extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      imagesAPI
        .fetchImages(nextName, nextPage)
        .then(images => {
          if (images.total !== 0) {
            this.setState({ images, status: 'resolved' });
            return;
          }
          return Promise.reject(new Error('Invalid request'));
        })

        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, status } = this.state;

    if (status === 'idle') {
      return <p>Введите имя</p>;
    }

    if (status === 'pending') {
      return <ImagePendingView />;
    }

    if (status === 'rejected') {
      return <ImagesErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={this.state.images.hits} />
          <Button onClick={this.onClickLoadMore} page={this.state.page} />
        </>
      );
    }
  }
}

export default ImagesInfo;
