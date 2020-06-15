import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import styles from './UserListScreenStyle';

export default function UserListItem({ user, onPress }) {
    const handlePress = () => {
        onPress({ user });
    }

    return (
        <View style={styles.userListItemContainer}>
            <TouchableOpacity style={styles.userListItemContent} onPress={handlePress}>
                <View style={styles.userInfo}>
                    <View style={styles.userAvatarContainer}>
                        <Image 
                            source={{ uri: user?.avatar }}
                            style={styles.userAvatar}
                        />
                    </View>
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
            </TouchableOpacity>
        </View>
    );
};