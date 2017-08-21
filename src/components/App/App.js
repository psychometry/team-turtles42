import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import FocusContainer from '../Focus/FocusContainer';
import BookmarksContainer from '../Bookmarks/BookmarksContainer';
import WeatherContainer from '../Weather/WeatherContainer';
import SettingsContainer from '../Settings/containers/SettingsContainer';
import CurrentQuoteContainer from '../CurrentQuote/CurrentQuoteContainer';
import ListContainer from '../Todo/containers/ListContainer';
import backgrounds from '../../background.json';
import Clock from '../Clock/Clock';
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
    }

  }
  componentDidMount() {
    this.setBackground();
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
          console.log(err);
          const bgList=backgrounds.backgrounds;
          const rand=Math.floor(Math.random()*(bgList.length));
          this.setState({background:process.env.PUBLIC_URL+'./img/'+bgList[rand].filename});
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

  render() {
    const { background } = this.state;

    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <header>
          <BookmarksContainer />
          <WeatherContainer />
        </header>

        <main>
          <div className="Time"><Clock/></div>
          <div className="Message">Message</div>
          <div className="Focus"><FocusContainer/></div>
        </main>

        <footer>
          <SettingsContainer />
          <CurrentQuoteContainer />
          <ListContainer/>
        </footer>
      </div>
    );
  }
}

export default App;
