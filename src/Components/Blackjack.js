import React from 'react';
import Hand from './Hand';
import { deal, hit, stand, reset, dealerPlay } from '../Actions/actions';
import { getPlayerHand, getDealerHand, getDealerTotal, getPlayerTotal, getCanHit, getCanStand } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = ({ deal, hit, stand, dealerPlay, reset, canHit, canStand, dealerHand, dealerTotal, playerHand, playerTotal, gameOver }) => {
  const standButton = <button onClick={ stand }>Stand</button>;
  const hitButton = <button onClick={ hit }>Hit</button>;
  const resetButton = <button onClick={ reset }>Start Over</button>;
  const dealButton = <button onClick={ deal }>Deal</button>;
  const dealerPlayButton = <button onClick={ dealerPlay }>Dealer Play</button>;

  return (
   <div>
     {gameOver 
     ? <div>
         <p>{playerTotal === 21 ? 'BLACKJACK!! :D' : 'Game Over :('}</p>
         {resetButton}
       </div>
     : dealButton}
     <p>Dealer</p>
     <Hand cards={ dealerHand } />
     <p>Your Hand: { playerTotal }</p>
     <Hand cards={ playerHand } />
     {(!gameOver && playerTotal > 0) && <div>
       {canStand && standButton}
       {canHit && hitButton}
       {!canStand && dealerPlayButton}
     </div>}
   </div>
 );
}

const mapStateToProps = (state) => {
  const playerTotal = getPlayerTotal(state); 

  return ({
    playerHand: getPlayerHand(state),
    playerTotal,
    dealerHand: getDealerHand(state),
    dealerTotal: getDealerTotal(state),
    canHit: getCanHit(state),
    canStand: getCanStand(state),
    gameOver: playerTotal >= 21
  });
}; 

export default connect(mapStateToProps, {
  deal,
  hit,
  stand,
  dealerPlay,
  reset
})(Blackjack);
