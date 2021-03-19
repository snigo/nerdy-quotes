import { Quote } from '../types';

export interface AppState {
  busy: boolean;
  current: Quote;
}

export const initialState: AppState = {
  busy: false,
  current: {
    id: 0,
    quote: 'Welcome to Nerdy Quotes',
    author: 'Nerdy Quotes App',
  },
};

export const errorState: AppState = {
  busy: false,
  current: {
    id: NaN,
    quote: 'Sorry, I\'ve frakked up, try again!',
    author: 'Nerdy Quotes App',
  },
};
