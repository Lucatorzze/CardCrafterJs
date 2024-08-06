# CardCrafter.js

CardCrafter.js est un package JavaScript pour créer et manipuler des jeux de cartes. Elle permet de générer des jeux de cartes, de mélanger les cartes et de distribuer les cartes.

## Installation

Vous pouvez installer CardCrafter.js via npm :

```bash
npm install cardcrafter.js
```

## Utilisation
Voici un exemple de base pour utiliser CardCrafter.js :

```javascript
import { Deck } from 'cardcrafter.js';

// Créer un nouveau jeu de cartes
const deck = new Deck();

// Mélanger le jeu de cartes
deck.shuffleDeck();

// Distribuer une carte
const card = deck.drawCard();
console.log(`Vous avez tiré : ${card.value} de ${card.suit}`);
```

## API
### Deck
- `new Deck()`: Crée un nouveau jeu de cartes.
- `deck.shuffleDeck()`: Mélange le jeu de cartes.
- `deck.drawCard()`: Tire une carte du dessus du jeu.

### Card
- `card.value`: La valeur de la carte (par exemple, "2", "3", "JACK", "QUEEN", "KING", "ACE").
- `card.suit`: La couleur de la carte (par exemple, "HEARTS", "DIAMONDS", "CLUBS", "SPADES").
### Contribuer
Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
