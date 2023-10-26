import { configureStore, applyMiddleware, compose, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import messagesFeedReducer from "./message-feed-redux/reducer"
import postMessageReducer from "./post-message-redux/reducer";

const rootReducer = combineReducers({
    messagesRoot : messagesFeedReducer,
    postMessageRoot: postMessageReducer
  });

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = configureStore({reducer: rootReducer}, enhancer);