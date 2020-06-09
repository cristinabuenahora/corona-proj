import { BlackjackTypes } from '../Reducers/Blackjack/Blackjack.model';

export const deal = () => ({
  type: BlackjackTypes.DEAL_CARDS
});

export const hit = () => ({
  type: BlackjackTypes.HIT
});
