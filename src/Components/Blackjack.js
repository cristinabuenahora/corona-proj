import React from 'react';
import Hand from './Hand';
import { deal, hit, stand, reset, dealerPlay } from '../Actions/actions';
import { getPlayerHand, getDealerHand, calculateDealerTotal, calculatePlayerTotal, getPlayerTurn } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = ({ deal, hit, stand, dealerPlay, reset, dealerHand, dealerTotal, playerHand, playerTotal, lose, win, playerTurn }) => {
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
        <p>Your total: {playerTotal}</p>
        <p>Dealer total: {dealerTotal}</p>
        {resetButton}
      </div>
    : lose
      ? <div>
          <p>You lose :(</p>
          <p>Your total:{playerTotal}</p>
          <p>Dealer total:{dealerTotal}</p>
          {resetButton}
        </div>
      : playerTotal > 0
        ? (playerTurn
           ? <div>{standButton} {hitButton}</div>
           : <div>{dealerPlayButton}</div>)
        : <div>{dealButton}</div>
    }
    <p>Dealer</p>
    <Hand cards={ dealerHand } />
    <p>Your Hand: { playerTotal }</p>
    <Hand cards={ playerHand } />
    </div>
 );
}

const mapStateToProps = (state) => {
  const playerTotal = calculatePlayerTotal(state);
  const dealerTotal = calculateDealerTotal(state);

  return ({
    playerHand: getPlayerHand(state),
    playerTotal: playerTotal,
    dealerHand: getDealerHand(state),
    dealerTotal: dealerTotal,
    lose: playerTotal >= 21 || dealerTotal === 21,
    win: playerTotal === 21 || dealerTotal > 21,
    playerTurn: getPlayerTurn(state)
  });
};

export default connect(mapStateToProps, {
  deal,
  hit,
  stand,
  dealerPlay,
  reset
})(Blackjack);
