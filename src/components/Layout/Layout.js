import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './Header';
import styles from './LayoutStyle';

export default function Layout({ children }) {
    return (
        <>
            <StatusBar style="light" />
            <Header title="Список пользователей" />
            <View style={styles.contentContainer}>
                {children}
            </View>
        </>
    )
}