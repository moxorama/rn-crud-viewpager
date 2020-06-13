import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
/* 
    Если бы API реально работал на обновление данных - я бы на любое изменение перезапрашивал бы текущую страницу
    Для демонстрации сделал удаление из стора, но при перелистывании оно слетит
*/


const { Types, Creators } = createActions({
    setPage: { currentPage: undefined },

    pageRequest: {},
    pageSuccess: { pageUsers: undefined, totalPages: undefined },

    updateRequest: { user: undefined },
    updateSuccess: { user: undefined },

    createRequest: { user: undefined },
    createSuccess: { user: undefined },

    deleteRequest: { userId: undefined },
    deleteSuccess: { userId: undefined },
});


export const UserTypes = Types;
export default Creators;


const setPage = (state, { currentPage }) => 
    state.merge({ currentPage });

const pageRequest = (state) => 
    state.merge({ fetching: true });

const pageSuccess = (state, { pageUsers, totalPages }) => {
    const nextState = state.setIn(
        ['content', state.currentPage], 
        pageUsers
    ).merge({
        totalPages,
        fetching: false,
    });
    return nextState;
}

const updateRequest = (state, { user }) => 
    state.merge({ fetching: true });

// Просто показываю Immutable, в реальном проекте я бы не писал этот код
const updateSuccess = (state, { user }) => {
    const pageUsers = state.content[state.currentPage]
    const userIdx = pageUsers.findIndex((u) => u.id === user?.id);

    const nextState = state.setIn(
        ['content', state.currentPage, userIdx], 
        user
    ).merge({
        fetching: false,
    });

    return nextState;
}

const deleteRequest = (state, { userId }) => 
    state.merge({ fetching: true });


const deleteSuccess = (state, { userId }) => {
    const pageUsers = state.content[state.currentPage]
        .filter((user) => user?.id !== userId)
    
    const nextState = state.setIn(
        ['content', state.currentPage],
        pageUsers 
    ).merge({
        fetching: false
    });

    return nextState;
}


const createRequest = (state, { user }) => 
    state.merge({ fetching: true });

const createSuccess = (state, { user }) => {
    const lastIdx = state.content[state.currentPage].length

    console.log(user);

    const nextState = state.setIn(
        ['content', state.currentPage, lastIdx], 
        user
    ).merge({
        fetching: false,
    });

    return nextState;
}


/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    content: {},
    totalPages: 1,
    currentPage: 0,
    fetching: false,
    error: null,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_PAGE]: setPage,
    [Types.PAGE_REQUEST]: pageRequest,
    [Types.PAGE_SUCCESS]: pageSuccess,

    [Types.UPDATE_REQUEST]: updateRequest,
    [Types.UPDATE_SUCCESS]: updateSuccess,

    [Types.DELETE_REQUEST]: deleteRequest,
    [Types.DELETE_SUCCESS]: deleteSuccess,

    [Types.CREATE_REQUEST]: createRequest,
    [Types.CREATE_SUCCESS]: createSuccess,
});

/* ------------- Selectors ------------- */
export const getCurrentPage = (state) => state?.user?.currentPage;
export const isFetching = (state) => state?.user?.fetching;