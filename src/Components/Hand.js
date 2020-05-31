import React from 'react';
import { connect } from 'react-redux';
import { addOne } from '../Actions/actions';
import { getHand } from '../Selectors/selectors';

const suits = {'clubs':'♣', 'diamonds': '♦', 'hearts': '♥', 'spades':'♠'};
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const colors = { '♣': 'black', '♦': 'red', '♥': 'red', '♠': 'black' };

function Card(props) {
  const color = (props.suit == 'hearts' || props.suit == 'diamonds') ? 'red' : 'black';
  const symbol = suits[props.suit];
  return (
    <div class="card">
      <span style={ { color } }>
        {props.value}
        {symbol}
      </span>
    </div>
  );
}

class Hand extends React.Component {
  render() {
    return (
      <div class="hand">
        { this.props.hand.map((card, i) =>
          <Card
              suit={ card.suit }
              value={ card.value }
              key={ i }
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    hand: getHand(state)
});

export default connect(mapStateToProps)(Hand);
