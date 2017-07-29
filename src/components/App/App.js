import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import quotes from '../../quotes.json';
import './App.scss';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APP_ID,
  secret: process.env.REACT_APP_UNSPLASH_APP_SECRET,
  callbackUrl: process.env.REACT_APP_UNSPLASH_CALLBACK_URL
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundURL: '',
      quote: [] 
    }

    this.likeQuote = this.likeQuote.bind(this);
  }
  componentDidMount() {
    unsplash.photos.getRandomPhoto(/*{ filter photos }*/)
      .then(toJson)
      .then(json => {
        this.setState({
          backgroundURL: json.urls.regular,
          // quote: quotes[Math.floor(Math.random() * quotes.length)]
        });
      });
    // NOTE: Temporarily setting quote state here because I hit the hourly limit on unsplash
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  }
  likeQuote() {
    const { quote } = this.state;
    quote[2] ? quote[2] = false : quote[2] = true;

    this.setState({
      quote: quote
    });
  }
  render() {
    const { backgroundURL, quote } = this.state;

    return (
      <div className="App" style={{ backgroundImage: `url(${backgroundURL})` }}>
        <Header />
        <Main />
        <Footer quote={quote} onLikeQuote={this.likeQuote}/>
      </div>
    );
  }
}

export default App;