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
      // date: '',
      time: '',
      background: '',
      quote: []
    }

    this.likeQuote = this.likeQuote.bind(this);
  }
  componentDidMount() {
    // const today = new Date().toLocaleDateString();
    const time = new Date().getTime();
    const oldTime = +localStorage.getItem('time');
    const background = localStorage.getItem('background');

    // Change background every 15 minutes (for development)
    // OR set background if there isn't one in localStorage
    // if (today !== this.state.date) { // Change background every day
    if (time - oldTime > 15 * 60 * 1000 || background === null) {
      this.setBackground(time);
    // Get background from localStorage
    } else {
      this.setState({
        // date: '',
        time,
        background,
      });
    }

    // Set random quote
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  }

  setBackground(time) {
    unsplash.photos.getRandomPhoto(/*{ filter photos }*/)
      .then(toJson)
      .then(json => {
        const { regular: background } = json.urls;
        this.setState({
          time,
          background
        });
        localStorage.setItem('time', time);
        localStorage.setItem('background', background);
      }).catch(
        err =>{
          console.log('ajax error');
        }
      );
  }
  likeQuote() {
    const { quote } = this.state;
    quote[2] ? quote[2] = false : quote[2] = true;

    this.setState({
      quote: quote
    });
  }
  render() {
    const { background, quote } = this.state;

    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <Main />
        <Footer quote={quote} onLikeQuote={this.likeQuote}/>
      </div>
    );
  }
}

export default App;
