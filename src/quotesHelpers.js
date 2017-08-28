import { loadFromStorage } from './localStorage';
import defaultQuoteFeeds from './defaultQuoteFeeds.json';

// Quotes helpers
export const parseQuote = (quote) => {
  return quote
    .split(/-|\u2014/) // hyphen or &mdash;
    .map(item => typeof item === 'string' ? item.trim() : item);
};

export const loadQuoteFeeds = () => {
  return loadFromStorage('quoteFeeds') || defaultQuoteFeeds;
};

export const loadCurrentFeed = () => {
  return loadFromStorage('currentFeed') || defaultQuoteFeeds[0];
};

export const loadRandomQuote = () => {
  const currentFeed = loadFromStorage('currentFeed') || defaultQuoteFeeds[0];
  const { quotes } = currentFeed;
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    quoteId: quote.id,
    feedName: currentFeed.feedName
  };
};
