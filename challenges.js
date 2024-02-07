// Complete this file 
// There are erors in this code.

// Call the function to make sure you are
// getting the correct response 
// see screenshots in slides and github readMe to view correct response 

// complete the code and send a 
// screenshot to the Teams chat once completed

// promises import, do not change
const { getTrex, even, unstable } = require('./promises')
// promises import, do not change


const getDino =  async () => {
    try {
        let result = await getTrex();
        console.log(result)
    } catch (error) {
        console.log('error:', error)
    }
};
 getDino()

const divisible = async (num) => {
    try {
        let result = await even(num);
        console.log(result)
    }
     catch (error){
        console.log('error:', error)
    }
};

divisible(4);

const getResponse = async () => {
    try {
        let result = await unstable();
        console.log(result)
    } catch (error) {
        console.log('error:', error);
    }
};
getResponse();

module.exports = { getDino, divisible, getResponse }

