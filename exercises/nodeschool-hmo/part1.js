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




