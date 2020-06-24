import { BlackjackTypes, BlackjackStore, Card } from './Blackjack.model';
import { newShuffledDeck } from '../../Components/Cards.js';
import { AnyAction } from 'redux';

export const initialState: BlackjackStore = {
  score: 0,
  deck: newShuffledDeck(),
  canHit: false,
  canStand: false,
  playerHand: [],
  dealerHand: [],
};

export default function blackjack(state = initialState, action: AnyAction): BlackjackStore {
  switch (action.type) {
    case BlackjackTypes.DEAL_CARDS:
      const [player1, dealer1, player2, dealer2] = state.deck;
      const faceDownCard: Card = { value: dealer2.value, suit: dealer2.suit, faceUp: false };
      return {
        ...state,
        deck: state.deck.slice(4),
        canHit: true,
        canStand: true,
        playerHand: [player1, player2],
        dealerHand: [dealer1, faceDownCard],
      };

    case BlackjackTypes.HIT:
    const [nextCard] = state.deck;
      return {
          ...state,
          deck: state.deck.slice(1),
          playerHand: [...state.playerHand, nextCard]
      }

    case BlackjackTypes.STAND: 
      return {
        ...state,
        canHit: false,
        canStand: false
      }

    case BlackjackTypes.DEALER_PLAY: {
      const { dealerHand } = state;
      console.log(dealerHand);
      if (dealerHand.length === 2 && !dealerHand[1].faceUp) {
        const updatedDealerHand = [...dealerHand]; 
        Object.assign(updatedDealerHand[1], { faceUp: true });
        return {
          ...state,
          dealerHand: updatedDealerHand
        };
      } else {
        const [nextCard] = state.deck;
        return {
          ...state,
          deck: state.deck.slice(1),
          dealerHand: [...state.dealerHand, nextCard]
        }
      }
    }

    case BlackjackTypes.RESET: {
        return {
          score: 0,
          deck: newShuffledDeck(),
          canHit: false,
          canStand: false,
          playerHand: [],
          dealerHand: []
        };
    }

    default:
      return state;
  }
}
