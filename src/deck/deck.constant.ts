import { DECK_SUIT, DECK_VALUE } from "./deck.interface";

export const Suits: DECK_SUIT[] = [
    DECK_SUIT.SPADE,
    DECK_SUIT.DIAMOND,
    DECK_SUIT.CLUB,
    DECK_SUIT.HEART
];
export const Values: (string | DECK_VALUE)[] = [
    DECK_VALUE.TWO,
    DECK_VALUE.THREE,
    DECK_VALUE.FOUR,
    DECK_VALUE.FIVE,
    DECK_VALUE.SIX,
    DECK_VALUE.SEVEN,
    DECK_VALUE.EIGHT,
    DECK_VALUE.NINE,
    DECK_VALUE.TEN,
    DECK_VALUE.JACK,
    DECK_VALUE.QUEEN,
    DECK_VALUE.KING,
    DECK_VALUE.ACE
];