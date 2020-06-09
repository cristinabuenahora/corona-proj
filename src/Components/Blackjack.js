import React from 'react';
import Hand from './Hand';
import { deal, hit } from '../Actions/actions';
import { getPlayerHand, getDealerHand } from '../Selectors/selectors';
import { connect } from 'react-redux';

const Blackjack = (props) => (
  <div>
    <button onClick={ props.deal }>Start Deal</button>
    <p>Dealer Hand:</p>
    <Hand cards={ props.dealerHand } />
    <p>Your Hand:</p>
    <Hand cards={ props.playerHand } />
    <button onClick={ props.hit }>Hit</button>
  </div>
);

const mapStateToProps = (state) => ({
    playerHand: getPlayerHand(state),
    dealerHand: getDealerHand(state)
});
export default connect(mapStateToProps, { deal, hit })(Blackjack);
