import { Component } from 'react';
import ImagesErrorView from '../ImagesErrorView';
import ImageGallery from '../ImageGallery';

class ImagesInfo extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=18452046-d075d28130c097165687e8e16&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error('Sorry, something went wrong. Please try again later'),
          );
        })
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

  render() {
    const { error, status } = this.state;

    if (status === 'idle') {
      return <p>Введите имя</p>;
    }

    if (status === 'pending') {
      return <p>Идет загрузка</p>;
    }

    if (status === 'rejected') {
      return <ImagesErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <ImageGallery images={this.state.images.hits} />;
    }
  }
}

export default ImagesInfo;
