export enum BlackjackTypes {
    DEAL_CARDS = 'DEAL_CARDS',
    HIT = 'HIT',
}

export interface Card {
    value: any,
    suit: string,
    faceUp: boolean,
}

export interface BlackjackStore {
    score: number,
    deck: Card[],
    dealerHand: Card[],
    playerHand: Card[],
}
