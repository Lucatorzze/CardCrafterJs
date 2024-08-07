import Deck from "../deck";
import Card from "../card";

describe("Deck", () => {
    it("Generate new Deck with 52 unique cards", () => {
        const deck = new Deck();
        expect(deck.getDeck().length).toBe(52);
        const uniqueCards = new Set(deck.getDeck());
        expect(uniqueCards.size).toBe(52);
    });

    it("Generate new Deck and shuffle", () => {
        const deck = new Deck();
        const originalDeck = deck.getDeck();
        deck.shuffleDeck();
        const shuffledDeck = deck.getDeck();
        expect(originalDeck).not.toEqual(shuffledDeck);
    });

    it("Generate new Deck and draw a card", () => {
        const deck = new Deck();
        const card = deck.drawCard();
        expect(card).toBeInstanceOf(Card);
        expect(deck.getDeck().length).toBe(51);
    });

    it("Generate new Deck and draw all cards", () => {
        const deck = new Deck();
        for (let i = 0; i < 52; i++) {
            deck.drawCard();
        }
        expect(deck.getDeck().length).toBe(0);
        expect(deck.drawCard()).toBeUndefined();
    });

    it("Generate new Deck and draw all cards, then reset", () => {
        const deck = new Deck();
        for (let i = 0; i < 52; i++) {
            deck.drawCard();
        }
        deck.resetDeck();
        expect(deck.getDeck().length).toBe(52);
    });

    it("Generate a new deck from another", () => {
        const deck = new Deck();
        for (let i = 0; i < 20; i++) {
            deck.drawCard();
        }
        expect(deck.getDeck().length).toBe(32); 0
        const newDeck = new Deck({ deck: deck.getDeck() });
        expect(newDeck.getDeck().length).toBe(32);
    });

    it("Generate new Deck with Jokers", () => {
        const deck = new Deck({ withJokers: true });
        expect(deck.getDeck().length).toBe(54);
        const uniqueCards = new Set(deck.getDeck());
        expect(uniqueCards.size).toBe(54);
    });
});