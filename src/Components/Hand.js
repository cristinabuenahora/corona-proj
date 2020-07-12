import React from 'react';

const suits = {'clubs':'♣', 'diamonds': '♦', 'hearts': '♥', 'spades':'♠'};

function Card(props) {
  const symbol = suits[props.suit];
  if (!props.faceUp) {
    return (
      <div className="card down">*</div>
    )
  }
  const divClass = "card rank-".concat(props.value, " ", props.suit);
  return (
    <div className={divClass}>
      <span className="rank">{ props.value }</span>
      <span className="suit">{ symbol }</span>
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
            faceUp={ card.faceUp }
            key={ i }
        />
      )}
    </div>
  );
}

export default Hand;
