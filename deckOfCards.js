class Card {
    constructor(suit, title, number) {
        this.suit = suit;
        this.title = title;
        this.number = number;
    }
    show() {
        console.log(`Name: ${this.title}, Suit: ${this.suit}, Number: ${this.number}`)
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.reset();
    }
    reset() {
        const titles = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        for(let i = 0; i < suits.length; i++) {
            for(let j = 1; j <= titles.length; j ++) {
                this.cards.push(new Card(suits[i], titles[j], j));
            }
        }
    }
    shuffle() {
        for(let i = 0; i < 100; i++ ) {
            const index1 = Math.floor(Math.random() * 52);
            const index2 = Math.floor(Math.random() * 52);

            const card = this.cards[index1];
            this.cards[index1] = this.cards[index2];
            this.cards[index2] = card;
        }
    }
    deal() {
        if(this.cards.length >= 0) {
            return this.cards.pop();
        } else {
            console.log("Deck is Empty");
        }
        // const index = Math.floor(Math.random() * this.cards.length);
        // const cards = this.cards.slice(0, index).concat();
        // (this.cards.slice(index + 1));
        // return card;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    take(deck) {
        this.hand.push(deck.deal());
    }
    discard(cardIndex) {
       this.hand = this.hand.filter(singleCard => singleCard !== this.hand[cardIndex]);
    }
}

const deck = new Deck();
deck.shuffle();
const player = new Player("Tommy");
player.take(deck);
player.take(deck);
console.log(player.hand);
player.discard(1); //removes a card from the player's hand at a specific index
console.log(player.hand);