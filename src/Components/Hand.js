import React from 'react';

const suits = {'clubs':'♣', 'diamonds': '♦', 'hearts': '♥', 'spades':'♠'};

function Card(props) {
  const color = (props.suit === 'hearts' || props.suit === 'diamonds') ? 'red' : 'black';
  const symbol = suits[props.suit];
  if (!props.faceUp) {
    return (
      <div class="card down">*</div>
    )
  }
  const divClass = "card rank-".concat(props.value, " ", props.suit);
  return (
    <div class={divClass}>
      <span class="rank">{ props.value }</span>
      <span class="suit">{ symbol }</span>
    </div>
  );
}

function Hand(props) {
  return (
    <div class="hand">
      { props.cards.map((card, i) =>
        <Card
            suit={ card.suit }
            value={ card.value }
            faceUp={ card.faceUp }
            key={ i }
        />
      )}
    </div>
  );
}

export default Hand;
