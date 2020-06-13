import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import Api from '~/services/Api';

import { UserTypes } from '~/redux/UserRedux';

import {
    update,
    destroy,
    page
} from './UserSagas';

const api = Api.create();

export default function* root() {
    yield all([
        takeLatest(UserTypes.SET_PAGE, page, api),
        takeLatest(UserTypes.PAGE_REQUEST, page, api),
        takeLatest(UserTypes.UPDATE_REQUEST, update, api),
        takeLatest(UserTypes.DELETE_REQUEST, destroy, api),

    ])

}