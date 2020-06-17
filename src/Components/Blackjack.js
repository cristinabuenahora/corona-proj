import React from 'react';
import Hand from './Hand';
import { deal, hit, reset } from '../Actions/actions';
import { getPlayerHand, getDealerHand, getDealerTotal, getPlayerTotal } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = ({ deal, hit, reset, dealerHand, dealerTotal, playerHand, playerTotal, gameOver }) => (
  <div>
    {gameOver 
    ? <div>
        <p>{playerTotal === 21 ? 'BLACKJACK!! :D' : 'Game Over :('}</p>
        <button onClick={ reset }>Start Over</button>
      </div>
    : <button onClick={ deal }>Deal</button>}
    <p>Dealer: { dealerTotal }</p>
    <Hand cards={ dealerHand } />
    <p>Your Hand: { playerTotal }</p>
    <Hand cards={ playerHand } />
    {(!gameOver && playerTotal > 0) && <button onClick={ hit }>Hit</button>}
  </div>
);

const mapStateToProps = (state) => {
  const playerTotal = getPlayerTotal(state); 

  return ({
    playerHand: getPlayerHand(state),
    playerTotal,
    dealerHand: getDealerHand(state),
    dealerTotal: getDealerTotal(state),
    gameOver: playerTotal >= 21
  });
}; 

export default connect(mapStateToProps, {
  deal,
  hit,
  reset
})(Blackjack);
