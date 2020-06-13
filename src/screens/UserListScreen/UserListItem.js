import React, { useRef } from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


import styles from './UserListScreenStyle';

export default function UserListItem({ user, onPress }) {
    const handlePress = () => {
        onPress({ user });
    }

    return (
        <View style={styles.userListItemContainer}>
            <RectButton style={styles.userListItemContent} onPress={handlePress}>
                <View style={styles.userInfo}>
                    <Image 
                        source={{ uri: user?.avatar }}
                        style={styles.userAvatar}
                    />
                    <View style={styles.userContacts}>
                        <Text style={styles.userName}>
                            {`${user?.first_name} ${user?.last_name}`}
                        </Text>
                        <Text style={styles.userEmail}>
                            {user?.email}
                        </Text>
                    </View>
                </View>
                <Ionicons name="ios-arrow-forward" size={18} />
            </RectButton>
        </View>
    );
};