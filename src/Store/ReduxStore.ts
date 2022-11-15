import { combineReducers } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import {PostsReducer} from "./Reducers/PostsReducer";

const RootReducer = combineReducers({
        posts: PostsReducer
    }
)
export const store = createStore(RootReducer)
export type storeType = ReturnType<typeof RootReducer>