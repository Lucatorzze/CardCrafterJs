# CardCrafter.js

CardCrafter.js is a JavaScript package for creating and manipulating card games. It allows you to generate decks of cards, shuffle cards and deal cards

## Installation

You can install CardCrafter.js via :

```bash
npm i --save cardcrafter-js
```

## Example
Here is a basic example for using CardCrafter.js :

```javascript
import { Deck } from 'cardcrafter-js';

// Create a new deck
const deck = new Deck();

// Shuffle the deck
deck.shuffleDeck();

// Deal a card
const card = deck.drawCard();
console.log(`Vous avez tiré : ${card.value} de ${card.suit}`);
```

## API
### Deck
- `new Deck()`: Creates a new deck.
- `deck.shuffleDeck()`: Shuffles the deck.
- `deck.drawCard()`: Draws a card from the top of the deck.

### Card
- `card.value`: The value of the card (for example, "2", "3", "JACK", "QUEEN", "KING", "ACE").
- `card.suit`: The color of the card (for example, "HEARTS", "DIAMONDS", "CLUBS", "SPADES").
### Contribute
Contributions are welcome! Please submit a pull request or open an issue to discuss the changes you would like to make.

## Licence
This project is under the MIT license. See the LICENSE file for details.
