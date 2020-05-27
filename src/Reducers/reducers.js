import { ADD_NUM } from '../Actions/actionTypes';

const initialState = {
  num: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NUM: {
    console.log(state.num);
    const updatedNum = state.num + 1;
      return {
        ...state,
        num: updatedNum
      };
    }

    default:
      return state;
  }
}
