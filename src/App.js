import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}

export default App;
