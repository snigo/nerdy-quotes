import { Quote } from '../types';

/**
 * TODO: Fix display of the message
 */
const formatMessage = (message: Quote) => (
  `${message.quote}\n\n\t– ${message.author}`
);

export default formatMessage;
