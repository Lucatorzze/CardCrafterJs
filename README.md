# CardCrafterJs

CardCrafterJs is a JavaScript package for creating and manipulating card games. It allows you to generate decks of cards, shuffle cards and deal cards

## Installation

You can install CardCrafterJs via :

```bash
npm i --save cardcrafter-js
```

## Example
Here is a basic example for using CardCrafterJs :

```javascript
import { Deck, Card, CARD_SUIT, CARD_VALUE } from 'cardcrafter-js';

// Create a new card
const newCard = new Card(CARD_SUIT.SPADE, CARD_VALUE.ACE)
console.log(newCard)

// Create a new deck
const deck = new Deck();

// Shuffle the deck
deck.shuffleDeck();

// Deal a card
const card = deck.drawCard();
console.log(`${card.value} of ${card.suit}`);
```

## API
### Card
- `new Card()`: Creates a new card.
- `Card.suit`: Get suit of the card.
- `Card.value`: Get value of the card 

### Deck
- `new Deck()`: Creates a new deck.
- `deck.shuffleDeck()`: Shuffles the deck.
- `deck.drawCard()`: Draws a card from the top of the deck.

### Card
- `card.value`: The value of the card (for example, "2", "3", "JACK", "QUEEN", "KING", "ACE").
- `card.suit`: The color of the card (for example, "HEARTS", "DIAMONDS", "CLUBS", "SPADES").

## Tests
Run all tests: `npm run test`

Example output:

```bash
> cardcrafter-js@1.1.0 test
> jest --verbose

 PASS  src/__tests__/card.test.ts
  Card
    √ Create a new card (5 ms)

 PASS  src/__tests__/deck.test.ts
  Deck
    √ Generate new Deck with 52 unique cards (6 ms)
    √ Generate new Deck and shuffle (1 ms)
    √ Generate new Deck and draw a card (1 ms)
    √ Generate new Deck and draw all cards
    √ Generate new Deck and draw all cards, then reset (1 ms)
    √ Generate a new deck from another

Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        1.955 s, estimated 3 s
Ran all test suites.
```

## Contribute
Contributions are welcome! Please submit a pull request or open an issue to discuss the changes you would like to make.

## Licence
This project is under the MIT license. See the LICENSE file for details.
