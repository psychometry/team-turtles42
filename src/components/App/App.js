import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import BookmarksContainer from '../Bookmarks/BookmarksContainer';
import WeatherContainer from '../Weather/WeatherContainer';
import SettingsContainer from '../Settings/containers/SettingsContainer';
import CurrentQuote from '../CurrentQuote/CurrentQuote';
import ListContainer from '../Todo/containers/ListContainer';
import defaultQuotes from '../../quotes.json';
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
      quotes: []
    }

  }
  componentDidMount() {
    this.setBackground();
    this.setQuotes();
  }
  setQuotes() {
    let quotes = JSON.parse(localStorage.getItem('currentQuotes'));

    if (!quotes) {
      quotes = defaultQuotes;
    }

    this.setState({
      quote: defaultQuotes[Math.floor(Math.random() * quotes.length)]
    });
  }
  setBackground() {
    // const today = new Date().toLocaleDateString();
    const time = new Date().getTime();
    const oldTime = +localStorage.getItem('time');
    const background = localStorage.getItem('background');

    // Change background every 15 minutes (for development)
    // OR set background if there isn't one in localStorage
    // if (today !== this.state.date) { // Change background every day
    if (time - oldTime > 15 * 60 * 1000 || background === null) {
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
    // Get background from localStorage
    } else {
      this.setState({
        // date: '',
        time,
        background
      });
    }
  }
  likeQuote = () => {
    const { quote } = this.state;
    quote[2] ? quote[2] = false : quote[2] = true;

    this.setState({
      quote: quote
    });
  }
  
  render() {
    const { background } = this.state;

    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <header>
          <BookmarksContainer />
          <WeatherContainer />
        </header>

        <main>
          <div className="Time">Time</div>
          <div className="Message">Message</div>
          <div className="Focus">Focus</div>
        </main>

        <footer>
          <SettingsContainer />
          <CurrentQuote quote={this.state.quote} onLikeQuote={this.likeQuote} />
          <ListContainer/> 
        </footer>
      </div>
    );
  }
}

export default App;
