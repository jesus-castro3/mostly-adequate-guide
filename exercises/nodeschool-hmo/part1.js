const xs = [1, 2, 3, 4, 5];

// pure
xs.slice(0, 3); // [1,2,3]

xs.slice(0, 3); // [1,2,3]

xs.slice(0, 3); // [1,2,3]


// impure
xs.splice(0, 3); // [1,2,3]

xs.splice(0, 3); // [4,5]

xs.splice(0, 3); // []”



// impure
let minimum = 21;
const checkAge = age => age >= minimum;

// pure
const checkAge = (age) => {
    const minimum = 21;
    return age >= minimum;
};

//we can also make minimum inmutable using .freeze
const immutableState = Object.freeze({ minimum: 21 });