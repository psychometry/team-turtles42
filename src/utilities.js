// Quotes helpers
export const parseQuote = (quote) => {
  return quote
    .split(/-|\u2014/) // hyphen or &mdash;
    .map(item => typeof item === 'string' ? item.trim() : item);
}
