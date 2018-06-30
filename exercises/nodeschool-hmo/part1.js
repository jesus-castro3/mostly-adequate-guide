var score = {
    mexico: 2,
    brazil: 1
};

function updateScore(whoScored) {
    if (score[whoScored]) {
        score[whoScored]++;
        console.log(score);
    } else {
        console.log('Country does not exist on score board');
    }
};


updateScore("mexico");

//1. Inpure function
//2. Function has side effects, interacts with scope outside itself
//3. Mutable score object



var score = {
  mexico: 2,
  brazil: 1
};

const goalFrom = (country, score) => 
    (score[country]) ?
        Object.assign(score, { mexico: score.mexico + 1 }) :
        "Country does not exist on score board"


console.log(goalFrom("mexico", score));

//but wait there something up
// can you identify it?



//1. Function is still a bit impure, look at the inputs it receives and look at the outcome
//2. We can simplify this even more using some js functional patters like composition and currying


