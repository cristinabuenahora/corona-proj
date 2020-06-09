import React from 'react';
import Hand from './Hand';
import { deal, hit } from '../Actions/actions';
import { getPlayerHand, getDealerHand } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = ({ deal, hit, dealerHand, dealerTotal, playerHand, playerTotal }) => (
  <div>
    <button onClick={ props.deal }>Deal</button>
    <p>Dealer:</p>
    <Hand cards={ props.dealerHand } />
    <p>Your Hand:</p>
    <Hand cards={ props.playerHand } />
    <button onClick={ props.hit }>Hit</button>
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
