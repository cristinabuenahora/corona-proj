import { DEAL } from '../Actions/actionTypes';
import { newShuffledDeck } from '../Components/Cards.js';

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
        dealerHand: [dealer1, dealer2],
      };

    default:
      return state;
  }
}
