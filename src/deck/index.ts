import Card from "../card";
import { Suits, Values } from "../card/card.constant";

/**
 * Represents a deck of playing cards.
 */
export default class Deck {
    private deck: Card[] = [];
    private drawCards: Card[] = [];

    /**
     * Creates a new instance of the Deck class.
     * @param deck - An optional array of cards to initialize the deck with.
     */
    constructor(deck?: Card[]) {
        if (deck) {
            this.deck = deck;
        } else {
            this.initDeck().getDeck()
        }
    }

    /**
     * Retrieves the deck of cards.
     * @returns {Card[]} The deck of cards.
     */
    public getDeck(): Card[] {
        return this.deck;
    }

    /**
     * Initializes the deck with a standard set of playing cards.
     * @returns The current instance of the Deck class.
     */
    public initDeck() {
        const deck: Card[] = [];
        for (let i = 0; i < Suits.length; i++) {
            for (let x = 0; x < Values.length; x++) {
                const card: Card = new Card(Suits[i], Values[x]);
                deck.push(card);
            }
        }
        this.deck = deck;
        return this;
    }

    /**
     * Resets the deck by reinitializing it with a standard set of playing cards.
     * @returns The current instance of the Deck class.
     */
    public resetDeck() {
        this.initDeck();
        return this;
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