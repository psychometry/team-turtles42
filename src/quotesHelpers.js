import v4 from 'uuid/v4';
import defaultQuotes from './quotes.json';

// Quotes helpers
export const parseQuote = (quote) => {
  return quote
    .split(/-|\u2014/) // hyphen or &mdash;
    .map(item => typeof item === 'string' ? item.trim() : item);
};

export const loadDefaultFeeds= () => {
  defaultQuotes.forEach(quote => {
    quote.id = v4();
  });

  return [
    { 
      name: 'Default', 
      quotes: defaultQuotes,
    }
  ];
};

export const loadDefaultFeed = () => {
  return { 
    name: 'Default', 
    quotes: defaultQuotes,
  };
};

