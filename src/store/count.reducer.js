
import * as Actions from './count.actions';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case Actions.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;