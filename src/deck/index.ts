import Card from "../card";
import { Suits, Values } from "../card/card.constant";
import { CARD_SUIT, CARD_VALUE } from "../card/card.interface";
import { DeckOptions } from "./deck.interface";

/**
 * Represents a deck of playing cards.
 */
export default class Deck {
    private deck: Card[] = [];
    private drawCards: Card[] = [];


    /**
     * Represents a deck of cards.
     * @constructor
     * @param options - The options for initializing the deck.
     * @param options.deck - The deck of cards to use.
     * @param options.withJokers - Whether to include jokers in the deck. Default is false.
     */
    constructor(options?: DeckOptions) {
        this.initDeck(options)
    }

    /**
     * Retrieves the deck of cards.
     * @returns {Card[]} The deck of cards.
     */
    public getDeck(): Card[] {
        return this.deck;
    }


    /**
     * Initializes the deck with the specified options or creates a new deck if no options are provided.
     * @param options - The options to initialize the deck with.
     * @param options.deck - The deck of cards to use.
     * @param options.withJokers - Whether to include jokers in the deck. Default is false.
     * @returns The initialized deck.
     */
    private initDeck(options?: DeckOptions): Deck {
        if (options && options.deck) {
            this.deck = options.deck;
            return this;
        }
        const deck: Card[] = [];
        for (let i = 0; i < Suits.length; i++) {
            for (let x = 0; x < Values.length; x++) {
                const card: Card = new Card(Suits[i], Values[x]);
                deck.push(card);
            }
        }
        if (options && options.withJokers) {
            deck.push(new Card(CARD_SUIT.RED, CARD_VALUE.JOKER));
            deck.push(new Card(CARD_SUIT.BLACK, CARD_VALUE.JOKER));
        }
        this.deck = deck;
        return this;
    }

    /**
     * Resets the deck by reinitializing it with a standard set of playing cards.
     * @returns The current instance of the Deck class.
     */
    public resetDeck() {
        return this.initDeck();
    }

    /**
     * Shuffles the deck by swapping random cards multiple times.
     * @param nbShuffleTime The number of times to shuffle the deck. Default is 1000.
     * @returns The updated Deck instance with the shuffled deck.
     */
    public shuffleDeck(nbShuffleTime: number = 1000) {
        const deck = this.deck.slice();
        for (let i = 0; i < nbShuffleTime; i++) {
            const pos1 = Math.floor((Math.random() * deck.length));
            const pos2 = Math.floor((Math.random() * deck.length));
            const tmp = deck[pos1];
            deck[pos1] = deck[pos2];
            deck[pos2] = tmp;
        }
        this.deck = deck;
        return this;
    }

    /**
     * Draws a card from the deck and adds it to the drawCards array.
     * @returns {Card | undefined} The card that was drawn from the deck, or undefined if the deck is empty.
     */
    public drawCard(): Card | undefined {
        const card = this.deck.shift();
        if (card) {
            this.drawCards.push(card);
        }
        return card;
    }
}