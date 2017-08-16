import v4 from 'node-uuid';
import defaultQuotes from './quotes.json';


// Quotes helpers
export const parseQuote = (quote) => {
  return quote
    .split(/-|\u2014/) // hyphen or &mdash;
    .map(item => typeof item === 'string' ? item.trim() : item);
}

export const loadDefaultLists = () => {
  defaultQuotes.forEach(quote => {
    quote.id = v4();
  });

  return [{ name: 'Default', quotes: defaultQuotes }];
}

export const loadDefaultList = () => {
  return loadDefaultLists()[0];
}

