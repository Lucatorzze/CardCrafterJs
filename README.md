# CardCrafterJs

CardCrafterJs is a JavaScript package for creating and manipulating card games. It allows you to generate decks of cards, shuffle cards and deal cards

- [Installation](#installation)
- [Example](#example)
- [API](#api)
  - [Card](#card)
  - [Énumérations](#énumérations)
    - [CARD_SUIT](#card_suit)
    - [CARD_VALUE](#card_value)
  - [Deck](#deck)
- [Tests](#tests)
- [Contribute](#contribute)
- [Licence](#licence)

## Installation

You can install CardCrafterJs via :

```bash
npm i --save cardcrafter-js
```

## Example
Here is a basic example for using CardCrafterJs :

### Card
```javascript
import { Card, CARD_SUIT, CARD_VALUE } from 'cardcrafter-js';

// Create a new card
const card = new Card(CARD_SUIT.SPADE, CARD_VALUE.ACE)
console.log(newCard)

// Get Suit and Value 
console.log(card.suit) // Output: SPADE
console.log(card.value) // Output: ACE

```

### Deck

```javascript
import { Deck } from 'cardcrafter-js';

// Create a new deck
const deck = new Deck();

// Shuffle the deck
deck.shuffleDeck();

// Deal a card
const card = deck.drawCard();
console.log(`${card.value} of ${card.suit}`);

// Reset a deck
deck.resetDeck()

// Initialise deck with other deck
const deck = new Deck();
for (let i = 0; i < 20; i++) {
    deck.drawCard();
}
// deck.getDeck().length is now 32
const newDeck = new Deck({ deck: deck.getDeck() });
// newDeck.getDeck().length is 32 too

// Initialise deck with 2 jokers
const deck = new Deck({withJokers: true});

```

## API
### Card
- `new Card()`: Creates a new card.
- `Card.value`: The value of the card (for example, "2", "3", "JACK", "QUEEN", "KING", "ACE").
- `Card.suit`: The color of the card (for example, "HEART", "DIAMOND", "CLUB", "SPADE").

#### Énumérations
##### CARD_SUIT

- `CLUB`
- `DIAMOND`
- `HEART`
- `SPADE`

###### CARD_SUIT For Joker
- `RED`
- `BLACK`

##### CARD_VALUE

- `TWO`
- `THREE`
- `FOUR`
- `FIVE`
- `SIX`
- `SEVEN`
- `EIGHT`
- `NINE`
- `TEN`
- `JACK`
- `QUEEN`
- `KING`
- `ACE`
- `JOKER`


### Deck
- `new Deck()`: Creates a new deck.
- `deck.shuffleDeck()`: Shuffles the deck.
- `deck.drawCard()`: Draws a card from the top of the deck.
- `deck.resetDeck()`: Resets the deck

## Tests
Run all tests: `npm run test`

Example output:

```bash
> cardcrafter-js@1.1.0 test
> jest --verbose

 PASS  src/__tests__/card.test.ts
  Card
    √ Create a new card (6 ms)

 PASS  src/__tests__/deck.test.ts
  Deck
    √ Generate new Deck with 52 unique cards (6 ms)
    √ Generate new Deck and shuffle (1 ms)
    √ Generate new Deck and draw a card
    √ Generate new Deck and draw all cards
    √ Generate new Deck and draw all cards, then reset (1 ms)
    √ Generate a new deck from another
    √ Generate new Deck with Jokers (1 ms)

Test Suites: 2 passed, 2 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        2.659 s
Ran all test suites.
```

## Contribute
Contributions are welcome! Please submit a pull request or open an issue to discuss the changes you would like to make.

## Licence
This project is under the MIT license. See the LICENSE file for details.
