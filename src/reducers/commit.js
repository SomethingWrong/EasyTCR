import { COMMIT_HIDE_TX_QUEUE, COMMIT_SHOW_TX_QUEUE } from '../constants/actions';

const initialState = {
  queue: null,
  showTxQueue: false
};

export default function challenge (state = initialState, action) {
  switch (action.type) {
    case COMMIT_SHOW_TX_QUEUE:
      return {...state, queue: action.queue, showTxQueue: true};

    case COMMIT_HIDE_TX_QUEUE:
      return {...state, showTxQueue: false};

    default:
      return state;
  }
}
