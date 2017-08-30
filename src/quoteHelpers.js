import { loadFromStorage } from './localStorage';
import defaultQuoteFeeds from './defaultQuoteFeeds.json';

// Quote helpers
export const parseQuote = (quote) => {
  return quote
    .split(/-|\u2014/) // hyphen or &mdash;
    .map(item => typeof item === 'string' ? item.trim() : item);
};

export const loadQuoteFeeds = () => {
  return loadFromStorage('quoteFeeds') || defaultQuoteFeeds;
};

export const loadCurrentFeed = () => {
  return loadFromStorage('currentFeed') || defaultQuoteFeeds[0].feedName;
};
