import clone        from 'clone';
import {
  TOGGLE_COLOR,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA,
} from '../constants/Constants';

const initialState = {
  color: 'red',
  data: {
    loading: false,
    objects: [],
  },
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_COLOR:
    return Object.assign({}, state, {
      color: state.color === 'red' ? 'blue' : 'red'
    });

  case EXAMPLE_REQUEST_START:
    return Object.assign({}, state, {
      data: Object.assign({}, state.data, {
        loading: true,
      }),
    });

  case EXAMPLE_REQUEST_DATA:
    return Object.assign({}, state, {
      data: Object.assign({}, state.data, {
        loading: false,
        objects: action.data,
      }),
    });

  default:
    return state;
  }
}
