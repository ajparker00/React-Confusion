// Splitting our reducere into 4 different files instead of having a single
//file named Reducers.js that has all of the reducers on that 1 page 

import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
          return state;
      }
};