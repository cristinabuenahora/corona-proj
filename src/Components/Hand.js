import React from 'react';

const suits = {'clubs':'♣', 'diamonds': '♦', 'hearts': '♥', 'spades':'♠'};

function Card(props) {
  const color = (props.suit === 'hearts' || props.suit === 'diamonds') ? 'red' : 'black';
  const symbol = suits[props.suit];
  return (
    <div class="card">
      <span style={ { color } }>
        { props.value }
        { symbol }
      </span>
    </div>
  );
}

function Hand(props) {
  return (
    <div className="hand">
      { props.cards.map((card, i) =>
        <Card
            suit={ card.suit }
            value={ card.value }
            key={ i }
        />
      )}
    </div>
  );
}

export default Hand;
