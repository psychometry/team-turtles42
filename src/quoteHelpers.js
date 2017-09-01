import { loadFromStorage } from './localStorage';
import defaultFeeds from './defaultFeeds.json';

// Quote helpers
export const parseQuote = (quote) => {
  return quote
    .split(/-|\u2014/) // hyphen or &mdash;
    .map(item => typeof item === 'string' ? item.trim() : item);
};

export const loadQuoteFeeds = () => {
  return loadFromStorage('quoteFeeds') || defaultFeeds;
};

export const loadCurrentFeed = () => {
  return loadFromStorage('currentFeed') || defaultFeeds[0].feedName;
};
