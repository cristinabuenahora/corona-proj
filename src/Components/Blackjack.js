import React from 'react';
import Hand from './Hand';
import { deal, hit } from '../Actions/actions';
import { getPlayerHand, getDealerHand } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = ({ deal, hit, dealerHand, playerHand }) => (
  <div>
    <button onClick={deal}>Start Deal</button>
    <button onClick={hit}>Hit</button>
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

export default connect(mapStateToProps, { 
  deal, 
  hit
})(Blackjack);
