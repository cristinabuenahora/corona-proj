import React from 'react';
import Hand from './Hand';
import { deal, hit } from '../Actions/actions';
import { getPlayerHand, getDealerHand, getDealerTotal, getPlayerTotal } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = ({ deal, hit, dealerHand, dealerTotal, playerHand, playerTotal }) => (
  <div>
    <button onClick={ deal }>Deal</button>
    <p>Dealer: { dealerTotal }</p>
    <Hand cards={ dealerHand } />
    <p>Your Hand: { playerTotal }</p>
    <Hand cards={ playerHand } />
    <button onClick={ hit }>Hit</button>
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
