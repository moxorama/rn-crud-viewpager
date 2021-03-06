import { put, call, select } from 'redux-saga/effects';
import UserActions, { getCurrentPage } from '~/redux/UserRedux';

export function* page(api) {
    const currentPage = yield select(getCurrentPage);

    // В UI страницы 0-based
    const response = yield call(api.listUsers, { page: currentPage + 1 });

    if (response.ok) {
        yield put(UserActions.pageSuccess({ 
            page, 
            pageUsers: response?.data?.data,
            totalPages: response?.data?.total_pages,
        }))
    } else {
        yield put(UserActions.fail({ error: response.problem }))
    }
}

/* 
    Если бы API реально работал на обновление данных - имело бы смысл сделать так
    if (response.ok) {
        yield put(UserActions.pageRequest());
    }
*/

export function* update(api, { user }) {
    const response = yield call(api.updateUser, { userId: user?.id, user });


    if (response.ok) {
        const user = response?.data?.user;
        yield put(UserActions.updateSuccess({ user }));
    } else {
        yield put(UserActions.fail({ error: response.problem }))
    }
}


export function* destroy(api, { userId }) {
    const response = yield call(api.deleteUser, { userId });

    if (response.ok) {
        yield put(UserActions.deleteSuccess({ userId }));
    } else {
        yield put(UserActions.fail({ error: response.problem }))
    }
}


export function* create(api, { user }) {
    const response = yield call(api.createUser, { user });

    if (response.ok) {
        const userId = response?.data?.id;
        const newUser = { ...user, id: userId };
        yield put(UserActions.createSuccess({ user: newUser }));
    } else {
        yield put(UserActions.fail({ error: response.problem }))
    }
}