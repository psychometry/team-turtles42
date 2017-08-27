import { loadFromStorage } from './localStorage';
import defaultQuoteFeeds from './defaultQuoteFeeds.json';

// Quotes helpers
export const parseQuote = (quote) => {
  return quote
    .split(/-|\u2014/) // hyphen or &mdash;
    .map(item => typeof item === 'string' ? item.trim() : item);
};

export const loadDefaultQuoteFeeds = () => defaultQuoteFeeds;

export const loadDefaultQuoteFeed = () => defaultQuoteFeeds[0];

export const loadCurrentQuote = () => {
  const currentFeed = loadFromStorage('currentFeed') || defaultQuoteFeeds[0];
  const { quotes } = currentFeed;

  return {
    quote: quotes[Math.floor(Math.random() * quotes.length)],
    feedName: currentFeed.feedName
  };
};
