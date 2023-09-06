API_BASE_URL = "https://deckofcardsapi.com/api/";

// Get the value of a new card from a new deck
async function getNewCard() {
  let newDeck = await axios.get(`${API_BASE_URL}deck/new/shuffle/?deck_count=1`)
  let newCard = await axios.get(`${API_BASE_URL}deck/${newDeck.data.deck_id}/draw/?count=1`)
  console.log( `${newCard.data.cards[0].value} of ${newCard.data.cards[0].suit}`)
  
}
//  Get two cards from a newly shuffled deck

async function getTwoCards() {
 let deck = await axios.get(`${API_BASE_URL}deck/new/shuffle/?deck_count=1`)
 let deck_id = deck.data.deck_id
 let card1 = await axios.get(`${API_BASE_URL}deck/${deck_id}/draw/?count=1`)
 let card2 = await axios.get(`${API_BASE_URL}deck/${deck_id}/draw/?count=1`)
 let cardSuits = [`${card1.data.cards[0].value} of ${card1.data.cards[0].suit}`, `${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`]
 console.log(cardSuits)
}



// Call API for a new deck and give user the ability to click through all the cards in the deck


async function getDeckId() {
  let cardArea = document.getElementById("card-div");
  let btn = document.querySelector("button");
  let deck = await axios.get(`${API_BASE_URL}deck/new/shuffle/?deck_count=1`)
  let deckId = deck.data.deck_id
    btn.addEventListener("click", async function () {
      let card = await axios.get(`${API_BASE_URL}deck/${deckId}/draw/`)
        let cardImg = document.createElement("img");
        cardImg.src = card.data.cards[0].image;
        cardArea.append(cardImg);
        console.log(card);
        if (card.data.remaining === 0) {
          alert("Thats all the cards!");
        }
      });
}
getDeckId()
