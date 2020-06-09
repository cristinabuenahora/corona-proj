import { BlackjackTypes, BlackjackStore, Card } from './Blackjack.model';
import { newShuffledDeck } from '../../Components/Cards.js';
import { AnyAction } from 'redux';

export const initialState: BlackjackStore = {
  score: 0,
  deck: newShuffledDeck(),
  playerHand: [],
  dealerHand: [],
};

export default function blackjack(state = initialState, action: AnyAction): BlackjackStore {
  switch (action.type) {
    case BlackjackTypes.DEAL_CARDS:
      let [player1, dealer1, player2, dealer2] = state.deck;
      let faceDownCard : Card = {value: dealer2.value, suit: dealer2.suit, faceUp: false};
      return {
        ...state,
        deck: state.deck.slice(4),
        playerHand: [player1, player2],
        dealerHand: [dealer1, faceDownCard],
      };

    case BlackjackTypes.HIT:
      let [nextCard] = state.deck;
      return {
          ...state,
          deck: state.deck.slice(1),
          playerHand: [...state.playerHand, nextCard]
      }

    default:
      return state;
  }
}
