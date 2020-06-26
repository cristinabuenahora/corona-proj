export enum BlackjackTypes {
    DEAL_CARDS = 'DEAL_CARDS',
    HIT = 'HIT',
    STAND = 'STAND',
    DEALER_PLAY = 'DEALER_PLAY',
    RESET = 'RESET'
}

export interface Card {
    value: any,
    suit: string,
    faceUp: boolean,
}

export interface BlackjackStore {
    score: number,
    deck: Card[],
    playerTurn: boolean,
    dealerHand: Card[],
    playerHand: Card[],
}
