import { Card } from '../Reducers/Blackjack/Blackjack.model';
import { RootState } from '../Reducers/index';

export const getPlayerHand = (state: RootState): Card[] => state.blackjack.playerHand;
export const getDealerHand = (state: RootState): Card[] => state.blackjack.dealerHand;
export const getPlayerTurn = (state: RootState): boolean => state.blackjack.playerTurn;

export const getTotal = (state: RootState, hand: Card[]): number => {
    var numAces = 0;
    const sum = hand.reduce((sum, card) => {
        switch(card.value) {
            case 'J':
            case 'Q':
            case 'K':
            return 10 + sum;

            case 'A':
            numAces += 1;
            return sum;

            default:
            return card.value + sum;
        }
    }, 0);
    if (numAces === 0) {
      return sum;
    }
    // There can be at most one ace counted as an 11
    const biggerSum = sum + 11 + (numAces - 1);
    const smallerSum = sum + numAces;
    return (biggerSum > 21) ? smallerSum : biggerSum;
};

export const calculatePlayerTotal = (state: RootState): number =>
    getTotal(state, getPlayerHand(state));
export const calculateDealerTotal = (state: RootState): number =>
    getTotal(state, getDealerHand(state));
