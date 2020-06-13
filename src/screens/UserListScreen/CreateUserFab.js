import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './UserListScreenStyle';

export default function CreateUserFab({ onPress }) {
    return (
        <TouchableOpacity style={styles.createUserFab} onPress={onPress}>
            <Ionicons name="ios-add" size={32} style={styles.createUserFabContent} />
        </TouchableOpacity>
    )
}