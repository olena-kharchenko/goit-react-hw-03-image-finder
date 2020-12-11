import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImagesInfo from './components/ImagesInfo';

import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {
    imageName: '',
  };

  componentDidMount() {}

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />

        <ImagesInfo imageName={this.state.imageName} />

        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}

export default App;
