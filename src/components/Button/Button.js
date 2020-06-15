import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './ButtonStyle';

export default function Button({ text, onPress, disabled }) {
    return (
        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}