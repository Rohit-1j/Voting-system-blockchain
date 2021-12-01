// Keeps track of a winner
let winner = false;

// Get a reference to the cards div
const cards = document.querySelector('.cards');

// Render cards
cards.innerHTML = getCards();

// Get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// Get a reference to the Modi votes span
const modiVotesEl = document.querySelector('.votes-number-modi');

// Get a reference to the Rahul votes span
const rahulVotesEl = document.querySelector('.votes-number-rahul');

// Set event listener for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-modi')) {
            addVote(0, 'modi', modiVotesEl)
        } else {
            addVote(1, 'rahul', rahulVotesEl)
        }
    })
})
