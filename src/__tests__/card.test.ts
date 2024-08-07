import Card from "../card";
import { CARD_SUIT, CARD_VALUE } from "../card/card.interface";

describe("Card", () => {

    it("Create a new card", () => {
        const card = new Card(CARD_SUIT.SPADE, CARD_VALUE.ACE);
        expect(card.suit).toBe(CARD_SUIT.SPADE);
        expect(card.value).toBe(CARD_VALUE.ACE);
    })

});