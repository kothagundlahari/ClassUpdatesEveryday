import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import todoApp from './reducers';
import { createLogger } from 'redux-logger';


const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
        todoApp,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
