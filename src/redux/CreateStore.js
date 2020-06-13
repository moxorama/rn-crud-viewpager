import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '~/config/ReactotronConfig';

export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];
    /* ------------- Saga Middleware ------------- */

    const sagaMiddleware = createSagaMiddleware({});
    middleware.push(sagaMiddleware);
    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));

    if (__DEV__) {
      enhancers.push(Reactotron.createEnhancer(true));
    }

    const store = createStore(rootReducer, compose(...enhancers));

    // В этом проекте нет смысла в Persistence
    /*
      if (ReduxPersist.active) {
        updateReducers(store);
      }
    */


    const sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware,
    };
};
