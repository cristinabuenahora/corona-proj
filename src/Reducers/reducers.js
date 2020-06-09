import { DEAL, HIT } from '../Actions/actionTypes';
import { card, newShuffledDeck } from '../Components/Cards.js';

const initialState = {
  score: 0,
  deck: newShuffledDeck(),
  playerHand: [],
  dealerHand: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DEAL:
      let [player1, dealer1, player2, dealer2] = state.deck;
      return {
        ...state,
        deck: state.deck.slice(4),
        playerHand: [player1, player2],
        dealerHand: [dealer1, card(dealer2.value, dealer2.suit, false)],
      };

    case HIT:
      let [newCard] = state.deck;

      let newHand = state.playerHand.concat(newCard);
      return {
        ...state,
        deck: state.deck.slice(1),
        playerHand: newHand
      };

    default:
      return state;
  }
}
