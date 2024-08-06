import { Suits, Values } from "./deck.constant";
import { Card } from "./deck.interface";

export default class Deck {
    private deck: Card[] = [];
    private drawCards: Card[] = [];

    constructor(deck?: Card[]) {
        if (deck) {
            this.deck = deck;
        } else {
            this.initDeck().getDeck()
        }
    }

    public getDeck() {
        return this.deck;
    }

    public initDeck() {
        const deck: Card[] = [];
        for (let i = 0; i < Suits.length; i++) {
            for (let x = 0; x < Values.length; x++) {
                const card: Card = { value: Values[x], suit: Suits[i] };
                deck.push(card);
            }
        }
        this.deck = deck;
        return this;
    }

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

    public drawCard() {
        const card = this.deck.shift();
        if (card) {
            this.drawCards.push(card);
        }
        return card;
    }
}