import { Card } from '../Reducers/Blackjack/Blackjack.model';
import { RootState } from '../Reducers/index';

export const getPlayerHand = (state: RootState): Card[] => state.blackjack.playerHand;
export const getDealerHand = (state: RootState): Card[] => state.blackjack.dealerHand;
export const getPlayerTurn = (state: RootState): boolean => state.blackjack.playerTurn;

export const getTotal = (state: RootState, hand: Card[]): number => {
    return hand.reduce((sum, card) => {
        switch(card.value) {
            case 'J':
            case 'Q':
            case 'K':
            return 10 + sum;

            case 'A':
            const plusOne = 1 + sum;
            const plusEleven = 11 + sum;
            return (plusEleven > 21) ? plusOne : plusEleven;

            default:
            return card.value + sum;
        }
    }, 0);
};

export const calculatePlayerTotal = (state: RootState): number =>
    getTotal(state, getPlayerHand(state));
export const calculateDealerTotal = (state: RootState): number =>
    getTotal(state, getDealerHand(state));
