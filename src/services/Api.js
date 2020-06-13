// a library to wrap and simplify api calls
/* global __DEV__ */
import apisauce from 'apisauce';
import Reactotron from 'reactotron-react-native';

const create = (baseURL = 'https://reqres.in') => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
        },
        timeout: 30000,
    });

    if (__DEV__) {
        api.addMonitor((response) => {
            Reactotron.apisauce(response);
        });
    }

    const listUsers = ({ page }) => api.get('/api/users', { page })
    const updateUser = ({ userId, user }) => api.put(`/api/users/${userId}`, { user });
    const deleteUser = ({ userId }) => api.delete(`/api/users/${userId}`);
    const createUser = ({ user }) => api.post(`/api/users/`, { user });


    return {
        listUsers,
        updateUser,
        deleteUser,
        createUser,
    };
};

// let's return back our create method as the default.
export default {
    create,
};
