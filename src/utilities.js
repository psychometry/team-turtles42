import { loadFromStorage } from './localStorage';
import defaultQuotesById from './defaultQuotes.json';

// Quotes
const quotes = loadFromStorage('react-dash-quotes');
const defaultQuoteIds = Object.keys(defaultQuotesById);
const defaultFeedsById = { 
  'Default': {
    feedName: 'Default',
    quoteIds: defaultQuoteIds
  } 
};
const defaultFeed = { feedId: 'Default', feedName: 'Default' };

export const feedsById = quotes ? quotes.feedsById : defaultFeedsById;
export const quotesById = quotes ? quotes.quotesById : defaultQuotesById;
export const currentFeed = quotes ? quotes.currentFeed : defaultFeed; 

export const parseQuote = (quote) => {
  return quote
    .split(/-|\u2014/) // hyphen or &mdash;
    .map(item => typeof item === 'string' ? item.trim() : item);
};

// Timer
const defaultTimerSettings = {
  bell: true,
  desktop: true
}
const timerSettings = loadFromStorage('react-dash-timer-settings') || defaultTimerSettings;

export const loadTimerSettings = () => {
  return {
    bell: timerSettings.bell,
    desktop: timerSettings.desktop
  }
};

// Weather
export const loadWeatherSettings = () => {
  return loadFromStorage('react-dash-weather-settings') || {};
};

// Random
export const randomIndex = length => Math.floor(Math.random() * length);


