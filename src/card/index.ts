import { CARD_SUIT, CARD_VALUE } from "./card.interface";

/**
 * Represents a card.
 */
export default class Card {

    private _suit: CARD_SUIT;
    private _value: CARD_VALUE;

    /**
     * Creates a new instance of the Card class.
     * @param suit - The suit of the card.
     * @param value - The value of the card.
     */
    constructor(suit: CARD_SUIT, value: CARD_VALUE) {
        this._suit = suit;
        this._value = value;
    }

    /**
     * Gets the suit of the card.
     */
    public get suit(): CARD_SUIT {
        return this._suit;
    }

    /**
     * Gets the value of the card.
     */
    public get value(): CARD_VALUE {
        return this._value;
    }
}