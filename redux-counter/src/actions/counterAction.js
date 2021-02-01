export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export const increaseCount = () => ({
    type: INCREASE_COUNT,
    payload: {count: 1} 
    // payload: {count: 5},
    // payload: {count: 10}


})

export const decreaseCount = () => ({
    type: DECREASE_COUNT ,
    payload: {count: 1}
    // payload: {count: 5}, 
    // payload: {count: 10} 

})