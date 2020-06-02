import { Card } from '../Reducers/Blackjack/Blackjack.model';

export const getScore = (state: any): number => state.blackjack.getScore;
export const getPlayerHand = (state: any): Card[] => state.blackjack.playerHand;
export const getDealerHand = (state: any): Card[] => state.blackjack.dealerHand;
