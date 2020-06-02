import React from 'react';
import { connect } from 'react-redux';

import { deal, hit } from '../Actions/actions';
import { getPlayerHand, getDealerHand, getPlayerTotal, getDealerTotal } from '../Selectors/selectors';

import Hand from './Hand';

const Blackjack = ({ deal, hit, dealerHand, dealerTotal, playerHand, playerTotal }) => (
  <div>
    <button onClick={deal}>Start Deal</button>
    <button onClick={hit}>Hit</button>
    <p>Dealer Hand: {dealerTotal}</p>
    <Hand cards={dealerHand} />
    <p>Your Hand: {playerTotal}</p>
    <Hand cards={playerHand} />
  </div>
);

const mapStateToProps = (state) => ({
    playerHand: getPlayerHand(state),
    playerTotal: getPlayerTotal(state),
    dealerHand: getDealerHand(state),
    dealerTotal: getDealerTotal(state)
});

export default connect(mapStateToProps, { 
  deal, 
  hit
})(Blackjack);
