import { ActionType, AppAction } from './actions';
import { AppState, errorState, initialState } from './const';

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.FETCH_QUOTE_REQUEST:
    case ActionType.TYPE_START:
      return {
        ...state,
        busy: true,
      };
    case ActionType.FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        busy: false,
        current: action.payload,
      };
    case ActionType.FETCH_QUOTE_FAILURE:
      return errorState;
    case ActionType.TYPE_END:
      return {
        ...state,
        busy: false,
      };
    default:
      return state;
  }
};

export default appReducer;
