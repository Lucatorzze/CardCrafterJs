export enum DECK_SUIT {
    CLUB = "CLUB",
    DIAMOND = "DIAMOND",
    HEART = "HEART",
    SPADE = "SPADE"
}

export enum DECK_VALUE {
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    TEN = "10",
    JACK = "JACK",
    QUEEN = "QUEEN",
    KING = "KING",
    ACE = "ACE"
}

export interface Card {
    suit?: DECK_SUIT;
    value?: string | DECK_VALUE;
}