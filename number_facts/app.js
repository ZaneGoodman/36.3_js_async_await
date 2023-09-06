BASE_API_URL = "http://numbersapi.com/";
numberFactsUl = document.getElementById("rand-num-fact");
favoriteNumFactsUl = document.getElementById("my-fav-num");

// Get multiple numbers facts and show on page
function listFacts(fact, list) {
  li = document.createElement("li");
  li.innerText = fact;
  list.append(li);
}

//  Get one number fact
async function getNumberFact() {
  let fact = await axios.get(`${BASE_API_URL}42?json`)
  console.log(fact.data.text)
}


// Get facts about multiple numbers and list
async function getMultNumFacts() {
  let facts = await axios.get(`${BASE_API_URL}46,68,47,96`)
  let values = Object.values(facts.data)
  for(fact of values) {
    listFacts(fact, numberFactsUl)
  }
}
getMultNumFacts()
// Get multiple facts about one number and list


async function getMultFactsForOneNum() {
  
  let {data : fact1 } = await axios.get(`${BASE_API_URL}55?json`)
  let {data : fact2 } = await axios.get(`${BASE_API_URL}55?json`)
  let {data : fact3 } = await axios.get(`${BASE_API_URL}55?json`)
  let {data : fact4 } = await axios.get(`${BASE_API_URL}55?json`)
  
  let numberFacts = [fact1.text, fact2.text, fact3.text, fact4.text];
  for(fact of numberFacts) {
    listFacts(fact, favoriteNumFactsUl)
  }
}
getMultFactsForOneNum()