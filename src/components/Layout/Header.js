import React from 'react';
import { View, Text } from 'react-native';

import styles from './LayoutStyle';

export default function Header({ title }) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}