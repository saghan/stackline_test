import { createStore, applyMiddleware } from 'redux';
import { ThunkAction, thunk } from 'redux-thunk';

// Define the interface for each item.
export interface ItemData {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: {
    customer: string;
    review: string;
    score: number;
  }[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }[];
}

// The overall application state interface.
export interface AppState {
  data: ItemData[];
  loading: boolean;
  error: string | null;
}

// Initially the data is empty.
const initialState: AppState = {
  data: [],
  loading: false,
  error: null,
};

// Define the action type constants.
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Define action interfaces.
interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: ItemData[];
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

type Action = FetchDataRequestAction | FetchDataSuccessAction | FetchDataFailureAction;

// A simple reducer that updates the state when the data has been "fetched."
function reducer(state = initialState, action: Action): AppState {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;
export default store;

// Define a thunk type for convenience.
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// Thunk action to fetch data immediately.
export const fetchData = (): AppThunk => async dispatch => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    // Dynamically import your data immediately.
    const module = await import('./data.json');
    dispatch({ type: FETCH_DATA_SUCCESS, payload: module.default });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: 'Error fetching data' });
  }
}; 