// var classArray = [];

// function printName(name){
// 	alert("Hi " + name);
// 	classArray.push(name);
// }

// Homework Ideas:
// 1.    Fix 11-13 and 1
// 2.    Create a delay on the draw
// 3.    Change it from wins to $wager amount
// 4.    Add a wager dialogue (prompt or form)
// 5.    Color code the card based on suit
// 7.    Add 1 or 11 logic to player
// 8.  Add 1 or 11 logic to dealer
// 9.    Add multiple players 


var deck = [];
var placeInDeck = 0;
var playerTotalCards = 2;
var dealerTotalCards = 2;
var playerHand;
var dealerHand;


function shuffleDeck(){
	var deck =[];
	// fill our deck, in order (for now)
	// suit
	var suit = "";
	for(s = 1; s <= 4; s++){
		if(s === 1) {
			suit = "h";
		}else if(s === 2){
			suit = "s";
		}else if(s === 3){
			suit = "d";
		}else if(s === 4){
			suit = "c";
		}
		//card number
		for(i = 1; i <= 13; i++){
			deck.push(i+suit);
		}
	}
	console.log(deck);

	var numberOfTimesToShuffle = Math.floor( Math.random() * 500 +500);
	//Shuffle the deck
	for(i = 0; i < numberOfTimesToShuffle; i++){
		//pick 2 random cards from the deck. And switch them.
		var card1 = Math.floor(Math.random() * 52);
		var card2 = Math.floor(Math.random() * 52);
		var temp = deck[card2];
		deck[card2] = deck[card1];
		deck[card1] = temp;
	}
	//shuffled deck
	console.log(deck);
	return deck;

	}

function placeCard(card, who, slot){ // This function only effects the look of the card on the screen.
	var currId = who + '-card-' + slot;
	document.getElementById(currId).className = "card";
	document.getElementById(currId).innerHTML = card;
}


function bust(who){
	if(who === "player"){
		// player lost, dealer won.
		document.getElementById('message').innerHTML = "You have busted.  Better luck next time.";
	}else{
		document.getElementById('message').innerHTML = "The dealer has busted.  You win.";
	}
}

function calculateTotal(hand, who){
	var total = 0;
	for(i = 0; i<hand.length; i++){
		var cardValue = Number(hand[i].slice(0, -1));
		total = total + cardValue;
		//total +=cardValue --is same as above line.
	}
	var idWhoToGet = who + '-total';
	document.getElementById(idWhoToGet).innerHTML = total;

	// Check for Bust
	if(total > 21){
		bust(who);
	}

}

function deal(){
	//Shuffled deck from function shuffleDeck
	deck = shuffleDeck();
	playerHand = [ deck[0], deck[2] ];
	dealerHand = [ deck[1], deck[3] ];
	//after dealing, we need to update the deck with which card position is available.
	placeInDeck = 4;

	placeCard(playerHand[0], 'player', 'one');
	placeCard(dealerHand[0], 'dealer', 'one');
	placeCard(playerHand[1], 'player', 'two');
	placeCard(dealerHand[1], 'player', 'two');

	calculateTotal(playerHand, 'player');
	calculateTotal(dealerHand, 'dealer');

}

function hit(){
	if(playerTotalCards === 2){ slot = "three";}
	else if(playerTotalCards === 3){ slot = "four";}
	else if(playerTotalCards === 4){ slot = "five";}
	else if(playerTotalCards === 5){ slot = "six";}


	placeCard(deck[placeInDeck], 'player', slot)
	playerHand.push(deck[placeInDeck]);
	playerTotalCards++;
	placeInDeck++;
	calculateTotal(playerHand, 'player');

}

function checkWin(){
	//Get player total and dealer total and see who is closer to 21 without going over.

	// Get player total
	// get dealer totalwho is higher but less than 21
	// set up a message
}

function reset(){
		// empty the deck
	
		// reset the place in the deck
		// reset the players total cards
		// reset thedealers total cards 
		// reset the players hand array 
		// reset the dealers hand array 
		// reset the message
		// reset all the cards (divs and the empty class)
}

function stand(){
	var dealerHas = Number(document.getElementById('dealer-total').innerHTML);
	var slot;
	while(dealerHas < 17){
		//keep hitting... keep drawing... get more cards...
		if(dealerTotalCards === 2){ slot = "three";}
		else if(dealerTotalCards === 3){ slot = "four";}
		else if(dealerTotalCards === 4){ slot = "five";}
		else if(dealerTotalCards === 5){ slot = "six";}
		placeCard(deck[placeInDeck], 'dealer', slot);
		dealerHand.push(deck[placeInDeck]);
		dealerHas = calculateTotal(dealerHand, 'dealer');
		placeInDeck++;
		dealerTotalCards++;

	}
	// WE KNOW that the dealer has more than 17 at this point of the loop.
	checkWin();
}

function setName(){
	var name = "Peter";
	return name;
}

var name = setName();

























