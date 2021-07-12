import { combineReducers } from 'redux';

import buyDag from './buy-dag';

const rootReducer = combineReducers({ buyDag });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
