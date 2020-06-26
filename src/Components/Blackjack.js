import React from 'react';
import Hand from './Hand';
import { deal, hit, stand, reset, dealerPlay } from '../Actions/actions';
import { getPlayerHand, getDealerHand, getDealerTotal, getPlayerTotal, getCanHit, getCanStand } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = ({ deal, hit, stand, dealerPlay, reset, canHit, canStand, dealerHand, dealerTotal, playerHand, playerTotal, lose, win }) => {
  const standButton = <button onClick={ stand }>Stand</button>;
  const hitButton = <button onClick={ hit }>Hit</button>;
  const resetButton = <button onClick={ reset }>Start Over</button>;
  const dealButton = <button onClick={ deal }>Deal</button>;
  const dealerPlayButton = <button onClick={ dealerPlay }>Dealer Play</button>;

  return (
   <div>
   {win
    ? <div>
        <p>You win!! :D</p>
        <p>Your total:{playerTotal}</p>
        <p>Dealer total:{dealerTotal}</p>
        {resetButton}
      </div>
    : lose
      ? <div> <p> 'You lose :('</p> {resetButton}</div>
      :
      <div>
      {dealButton}
      <p>Dealer</p>
      <Hand cards={ dealerHand } />
      <p>Your Hand: { playerTotal }</p>
      <Hand cards={ playerHand } />
      <div>
        {canStand && standButton}
        {canHit && hitButton}
        {!canStand && dealerPlayButton}
      </div>
      </div>
    }
    </div>
 );
}

const mapStateToProps = (state) => {
  const playerTotal = getPlayerTotal(state);
  const dealerTotal = getDealerTotal(state);

  return ({
    playerHand: getPlayerHand(state),
    playerTotal,
    dealerHand: getDealerHand(state),
    dealerTotal,
    canHit: getCanHit(state),
    canStand: getCanStand(state),
    gameOver: playerTotal >= 21,
    win: playerTotal === 21 || dealerTotal > 21
  });
};

export default connect(mapStateToProps, {
  deal,
  hit,
  stand,
  dealerPlay,
  reset
})(Blackjack);
