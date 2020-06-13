import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import createStore from '~/redux';

import UserListScreen from '~/screens/UserListScreen';

const store = createStore();

export default function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <UserListScreen />
            </Provider>
        </SafeAreaProvider>
    );
}