import React from 'react';
import Hand from './Hand';
import { deal } from '../Actions/actions';
import { getPlayerHand, getDealerHand } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = ({ deal, dealerHand, playerHand }) => (
  <div>
    <button onClick={deal}>Start Deal</button>
    <p>Dealer Hand:</p>
    <Hand cards={dealerHand} />
    <p>Your Hand:</p>
    <Hand cards={playerHand} />
  </div>
);

const mapStateToProps = (state) => ({
    playerHand: getPlayerHand(state),
    dealerHand: getDealerHand(state)
});
export default connect(mapStateToProps, { deal })(Blackjack);
