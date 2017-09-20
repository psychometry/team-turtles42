import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import Focus from '../Focus/Focus';
import LinksContainer from '../Links/LinksContainer';
import WeatherContainer from '../Weather/WeatherContainer';
import TimeIcons from '../TimeIcons/TimeIcons';
import Timer from '../Timer/Timer';
import Clock from '../Clock/Clock';
import SettingsContainer from '../Settings/containers/SettingsContainer';
import CurrentQuoteContainer from '../CurrentQuote/CurrentQuoteContainer';
import ListContainer from '../Todo/containers/ListContainer';
import Welcome from '../Welcome/Welcome';
import Message from '../Message/Message';
import BgInfo from '../BgInfo/BgInfo';
import './App.scss';

const theme = {
  white: 'rgb(255,255,255)',
  grey: 'rgba(255,255,255,.15)',
  black: 'rgba(15, 15, 15, 0.925)'
};

class App extends Component {
  componentDidMount() {
    const {updateTime, option,list} = this.props.background;
    if(!updateTime||(new Date()-new Date(updateTime))>60*60*24*1000){
      this.props.update(new Date());
      this.props.fetchBackground();
    }
    if(!option){
      this.props.setOption('unsplash');
    }
    if(list){
      this.props.selectBackground(list, Math.floor(Math.random() * list.length));
    }
  }
  componentDidUpdate(prevProp){
    if(this.props.background.list!==prevProp.background.list){
      const {list}=this.props.background;
      this.props.selectBackground(list, Math.floor(Math.random() * list.length));
    }
    if(this.props.background.option!==prevProp.background.option){
      const {option}=this.props.background;
      if(option==='local'){
        this.props.fetchBackgroundLocal();
      }else{
        this.props.fetchBackground();
      }
    }
  }
  render() {
    const {
      background,
      time,
      timer,
      toggleTimer,
      setTimer,
      resetTimer,
      updateTimer,
      focus,
      setFocus,
      deleteFocus,
      toggleFocus,
      updateTime,
      name,
      setName,
      apps
    } = this.props;
    const IconStyle={height:"50px"}
    const timerIcon=apps.clock && apps.timer?(
      <TimeIcons timer={timer.showing} onToggleTimer={toggleTimer} />
    ):(<div style={IconStyle}></div>);
    if (!name || name === '') {
      return (
        <div className="App" style={{
          backgroundImage: `url(${background.bg})`
        }}>
          <header/>
          <main className="main">
            <Welcome setName={setName}/>
          </main>
          <footer/>
        </div>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <div className="App" style={{
            backgroundImage: `url(${background.bg})`
          }}>
          {/*
            <header>
              <LinksContainer state={apps.links} />
              <WeatherContainer state={apps.weather} />
            </header>

            <main className="main">
              <div className="top">
                {apps.clock && apps.timer &&
                  <TimeIcons timer={timer.showing} onToggleTimer={toggleTimer} />
                }
                {(timer.showing || !apps.clock) &&
                  <Timer
                    state={apps.timer}
                    duration={timer.duration}
                    seconds={timer.seconds}
                    settings={timer.settings}
                    id={timer.id}
                    active={timer.active}
                    onSetTimer={setTimer}
                    onResetTimer={resetTimer}
                    onUpdateTimer={updateTimer}
                  />
                }
                {(!timer.showing || !apps.timer) &&
                  <Clock
                    state={apps.clock}
                    time={time}
                    updateTime={updateTime}
                  />
                }
              </div>

              <div className="bottom">
                <Message state={apps.message} time={time} name={name}/>
                <Focus
                  state={apps.focus}
                  focus={focus}
                  setFocus={setFocus}
                  deleteFocus={deleteFocus}
                  toggleFocus={toggleFocus}
                />
              </div>
            </main>

            <footer>
              <SettingsContainer />
              <CurrentQuoteContainer state={apps.quote} />
              <ListContainer state={apps.todo} />
            </footer>
            */}
            <div className="top_left">
              <LinksContainer state={apps.links} />
            </div>
            <div className="top_right">
              <WeatherContainer state={apps.weather} />
            </div>
            <div className="middle">
              <div>
                {
                  timerIcon
                }
                {(timer.showing || !apps.clock) &&
                  <Timer
                    state={apps.timer}
                    duration={timer.duration}
                    seconds={timer.seconds}
                    settings={timer.settings}
                    id={timer.id}
                    active={timer.active}
                    onSetTimer={setTimer}
                    onResetTimer={resetTimer}
                    onUpdateTimer={updateTimer}
                  />
                }
                {(!timer.showing || !apps.timer) &&
                  <Clock
                    state={apps.clock}
                    time={time}
                    updateTime={updateTime}
                  />
                }
              </div>
              <Message state={apps.message} time={time} name={name}/>
              <Focus
                state={apps.focus}
                focus={focus}
                setFocus={setFocus}
                deleteFocus={deleteFocus}
                toggleFocus={toggleFocus}
              />
            </div>
            <div className="bottom_left">
              <SettingsContainer />
            </div>
            <div className='bottom_center'>
              <CurrentQuoteContainer state={apps.quote} />
            </div>
            <div className="bottom_right">
              <BgInfo background={background} />
              <ListContainer state={apps.todo} />
            </div>
          </div>
        </ThemeProvider>
      );
    }
  }
}

export default App;
