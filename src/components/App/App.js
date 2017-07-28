import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.scss';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APP_ID,
  secret: process.env.REACT_APP_UNSPLASH_APP_SECRET,
  callbackUrl: process.env.REACT_APP_UNSPLASH_CALLBACK_URL
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundURL: null
    }
  }
  componentDidMount() {
    unsplash.photos.getRandomPhoto(/*{ filter photos }*/)
      .then(toJson)
      .then(json => {
        this.setState({
          backgroundURL: json.urls.regular
        });
      });
  }
  render() {
    const { backgroundURL } = this.state;

    return (
      <div className="App" style={{ backgroundImage: `url(${backgroundURL})` }}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;