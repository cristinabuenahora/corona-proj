import { BlackjackTypes } from '../Reducers/Blackjack/Blackjack.model';

export const deal = () => ({
  type: BlackjackTypes.DEAL_CARDS
});

export const hit = () => ({
  type: BlackjackTypes.HIT
});

export const stand = () => ({
  type: BlackjackTypes.STAND
});

export const reset = () => ({
  type: BlackjackTypes.RESET
});
