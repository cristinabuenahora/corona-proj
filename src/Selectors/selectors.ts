import { Card } from '../Reducers/Blackjack/Blackjack.model';
import { RootState } from '../Reducers/index'; 

export const getCanHit = (state: RootState): boolean => state.blackjack.canHit;
export const getCanStand = (state: RootState): boolean => state.blackjack.canStand;

export const getScore = (state: RootState): number => state.blackjack.score;
export const getPlayerHand = (state: RootState): Card[] => state.blackjack.playerHand;
export const getDealerHand = (state: RootState): Card[] => state.blackjack.dealerHand;

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

export const getPlayerTotal = (state: RootState): number => 
    getTotal(state, getPlayerHand(state));
export const getDealerTotal = (state: RootState): number => 
    getTotal(state, getDealerHand(state));