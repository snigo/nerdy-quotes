import { Dispatch, SetStateAction } from 'react';
import typer from '../lib/typer';
import { Quote } from '../types';

const apiUri = process.env.NEXT_PUBLIC_API_URI;

export enum ActionType {
  FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST',
  FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS',
  FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE',
  TYPE_START = 'TYPE_START',
  TYPE_END = 'TYPE_END',
}

export interface AppAction<P = any> {
  type: ActionType,
  payload?: P;
}

export const fetchQuoteRequest = (): AppAction => ({
  type: ActionType.FETCH_QUOTE_REQUEST,
});

export const fetchQuoteSuccess = (quote: Quote): AppAction<Quote> => ({
  type: ActionType.FETCH_QUOTE_SUCCESS,
  payload: quote,
});

export const fetchQuoteFailure = (err: any): AppAction => ({
  type: ActionType.FETCH_QUOTE_FAILURE,
  payload: err,
});

export const fetchQuote = () => async (dispatch) => {
  dispatch(fetchQuoteRequest());
  try {
    const response = await fetch(apiUri);
    if (!response.ok) throw new Error('Error while fetching the quote');
    const { author, quote, id }: Quote = await response.json();
    dispatch(fetchQuoteSuccess({ author, quote, id }));
  } catch (err) {
    dispatch(fetchQuoteFailure(err));
  }
};

export const typeStart = () => ({
  type: ActionType.TYPE_START,
});

export const typeEnd = () => ({
  type: ActionType.TYPE_END,
});

export const type = (message: string, setterFn: Dispatch<SetStateAction<string>>) => (
  async (dispatch) => {
    dispatch(typeStart());
    await typer(message, setterFn);
    dispatch(typeEnd());
  }
);
