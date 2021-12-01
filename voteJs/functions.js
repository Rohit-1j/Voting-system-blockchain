// Return a list of cards
const getCards = () => {
    return candidates.map(candidate => {
        return `<div class="card">
            <img class="card-image" src="Images/${candidate.id}.jpg">
            <div class="card-info">
                <div class="candidate-votes">
                    <span class="votes-number-${candidate.id}">${candidate.votes}</span>
                    <span class="votes-text">VOTES</span>
                </div>
                <div class="line"></div>
                <div class="candidate-info">
                    <span class="candidate-name">${candidate.name}</span>
                    <span class="candidate-party">${candidate.party}</span>
                </div>
            </div>
            <button id="card-btn" class="card-btn btn-${candidate.id}">VOTE</button>
        </div>`
    })
}
// Adds one vote to the corresponding candidate.
const addVote = (index, candidate, votesEl) => {
    // Increase vote by one as long as there's not a winner
  if (!winner) {
        // Increase vote by one
        candidates[index].votes++;

        // Update votes element
        votesEl.textContent = candidates[index].votes;

        // Check if the candidate won
        isWinner(candidate, candidates[index].votes);
    }
}

// If candidate won, set winner variable to true
const isWinner = (candidate, votes) => {
    if (votes === 351) {
        winner = true;

        setWinnerLoser(candidate);
    }
}

// Shows who won and who lost
const setWinnerLoser = (candidate) => {
    if (candidate === "modi") {
        document.querySelector('.btn-modi').textContent = "WINNER";
        document.querySelector('.btn-rahul').textContent = "LOSER";
    } else {
        document.querySelector('.btn-rahul').textContent = "WINNER";
        document.querySelector('.btn-modi').textContent = "LOSER";
    }
}
/*document.getElemtById("card-btn").addEventListener("click",function(){
    document.getElementById("card-btn").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
   
  document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementById("card-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });*/
