const xs = [1, 2, 3, 4, 5];

// pure
xs.slice(0, 3); // [1,2,3]

xs.slice(0, 3); // [1,2,3]

xs.slice(0, 3); // [1,2,3]


// impure
xs.splice(0, 3); // [1,2,3]

xs.splice(0, 3); // [4,5]

xs.splice(0, 3); // []”

//1. Function is still a bit impure, look at the inputs it receives and look at the outcome
//2. We can simplify this even more using some js functional patters like composition and currying


// impure
let minimum = 21;
const checkAge1 = age => age >= minimum;

// pure
const checkAge2 = (age) => {
    const minimum = 21;
    return age >= minimum;
};

//we can also make minimum inmutable using .freeze
const immutableState = Object.freeze({ minimum: 21 });


//1. Inpure function
//2. Function has side effects, interacts with scope outside itself
//3. Mutable score object



const score = {
    mexico: 2,
    brazil: 1
};

const updateScore = (country) => {
    if(score[country]) {
        score[country]++;
        console.log(score);
    } else {
        console.log('Country is not available to score keep :(');
    }    
}

updateScore("mexico");


// const goalFrom = (country, score) =>
//     (score[country]) ?
//         Object.assign(score, { mexico: score.mexico + 1 }) :
//         "Country does not exist on score board"


// console.log(goalFrom("mexico", score));

//but wait there something up
// can you identify it?
